// BUILTWITHSPRING — LinkedIn Job Alert Parser + AI Scorer
// ============================================================
const SPREADSHEET_ID = 'PASTE YOUR SPREADSHEET ID HERE';  // Line 3 — replace in Section 4
const CLAUDE_API_KEY = 'PASTE YOUR CLAUDE API KEY HERE';  // Line 4 — replace in Section 6

// ============================================================
// STEP 1 — PARSE EMAILS & WRITE TO INBOX TAB
// Runs daily at 12pm. Writes columns A-G, leaves E-F blank.
// ============================================================
function parseLinkedInJobAlerts() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Inbox');

  const threads = GmailApp.search('from:jobalerts-noreply@linkedin.com newer_than:2d', 0, 20);

  if (threads.length === 0) {
    Logger.log('No LinkedIn job alert emails found in last 2 days');
    return;
  }

  const existingData = sheet.getDataRange().getValues();
  const existingUrls = new Set(
    existingData.slice(1).map(row => row[3]).filter(Boolean)
  );

  let newJobs = [];

  for (const thread of threads) {
    const messages = thread.getMessages();
    for (const message of messages) {
      const date = message.getDate();
      const body = message.getPlainBody();
      const htmlBody = message.getBody();
      const jobs = parseJobsFromBody(body, htmlBody);

      for (const job of jobs) {
        if (!job.url) continue;
        if (existingUrls.has(job.url)) continue;

        newJobs.push({
          date: date,
          company: job.company,
          title: job.title,
          url: job.url
        });

        existingUrls.add(job.url);
      }
    }
  }

  if (newJobs.length === 0) {
    Logger.log('No new jobs found — all already in sheet');
    return;
  }

  Logger.log('Found ' + newJobs.length + ' new jobs. Writing to sheet...');

  const rows = newJobs.map(job => [
    job.date,      // A - Date Received
    job.company,   // B - Company
    job.title,     // C - Job Title
    job.url,       // D - Job URL
    '',            // E - Fit Score (filled automatically after Section 7)
    '',            // F - Fit Details (filled automatically after Section 7)
    'Unreviewed'   // G - Status
  ]);

  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 7).setValues(rows);
  Logger.log('Written ' + rows.length + ' jobs. Starting scoring...');

  scoreUnreviewedJobs();
}

// ============================================================
// STEP 2 — SCORE UNREVIEWED JOBS WITH CLAUDE
// ============================================================
function scoreUnreviewedJobs() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Inbox');
  const data = sheet.getDataRange().getValues();

  const unscored = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const url = row[3];
    const score = row[4];
    if (url && !score) {
      unscored.push({
        rowIndex: i + 1,
        company: row[1],
        title: row[2],
        url: url
      });
    }
  }

  if (unscored.length === 0) {
    Logger.log('No unscored jobs found');
    return;
  }

  Logger.log('Scoring ' + unscored.length + ' jobs with Claude...');
  const scored = scoreJobsWithClaude(unscored);

  for (const job of scored) {
    const scoreCell = sheet.getRange(job.rowIndex, 5);
    scoreCell.setValue(job.score || '');

    // Auto color the Fit Score cell — no manual formatting needed
    if      (job.score === '🟢') scoreCell.setBackground('#C6EFCE'); // green
    else if (job.score === '🟡') scoreCell.setBackground('#FFEB9C'); // yellow
    else if (job.score === '🔴') scoreCell.setBackground('#FFC7CE'); // red

    sheet.getRange(job.rowIndex, 6).setValue(job.details || '');
  }

  Logger.log('Scoring complete');
}

// ============================================================
// PARSE JOBS FROM EMAIL BODY
// ============================================================
function parseJobsFromBody(body, htmlBody) {
  const jobs = [];

  const source = htmlBody || body;
  const isHtml = source.includes('<html') || source.includes('href=');

  if (isHtml) {
    const decoded = source
      .replace(/=3D/g, '=')
      .replace(/=\r?\n/g, '')
      .replace(/=2F/g, '/')
      .replace(/=25/g, '%');

    const jobIdRegex = /jobs\/view\/(\d+)\?alertAction/g;
    const seenIds = new Set();
    let match;

    while ((match = jobIdRegex.exec(decoded)) !== null) {
      const jobId = match[1];
      if (seenIds.has(jobId)) continue;
      seenIds.add(jobId);

      const snippet = decoded.substring(Math.max(0, match.index - 3000), match.index);
      const altMatches = [...snippet.matchAll(/alt="([^"]+)"/g)];
      const companyAlt = altMatches.length > 0 ? altMatches[altMatches.length - 1][1] : '';
      const skipAlts = ['LinkedIn', 'radar icon', 'University of California, Berkeley'];
      const company = skipAlts.includes(companyAlt) ? '' : companyAlt;

      const titleMatch = decoded.substring(match.index, match.index + 500)
        .match(/color: #0a66c2;">\s*([^<]+?)\s*<\/a>/);
      const title = titleMatch ? titleMatch[1].trim() : '';

      const locationMatch = decoded.substring(match.index, match.index + 500)
        .match(/color: #1f1f1f;">\s*([^<]+?)\s*<\/p>/);
      const location = locationMatch
        ? locationMatch[1].replace(/&middot;/g, '·').trim()
        : 'United States';

      if (title && company) {
        jobs.push({ title, company, location, url: 'https://www.linkedin.com/jobs/view/' + jobId });
      }
    }

    if (jobs.length > 0) return jobs;
  }

  // Fallback to plain text parsing
  const lines = body.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const urlRegex = /https:\/\/www\.linkedin\.com\/comm\/jobs\/view\/(\d+)/g;
  let urlMatch;
  const urls = [];
  while ((urlMatch = urlRegex.exec(body)) !== null) {
    urls.push('https://www.linkedin.com/jobs/view/' + urlMatch[1]);
  }

  const skipPhrases = [
    'job alert', 'new jobs', 'results from', 'linkedin',
    'school alumni', 'connection', 'actively recruiting',
    'easy apply', 'promoted', 'viewed', 'applied'
  ];

  let jobIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if ((lines[i] === 'United States' || lines[i].includes('United States')) && i >= 2) {
      const title = lines[i - 2];
      const company = lines[i - 1];
      const isNoise = skipPhrases.some(phrase =>
        title.toLowerCase().includes(phrase) ||
        company.toLowerCase().includes(phrase)
      );
      if (isNoise) continue;
      jobs.push({ title, company, location: lines[i], url: urls[jobIndex] || '' });
      jobIndex++;
    }
  }

  return jobs;
}

// ============================================================
// SCORE JOBS WITH CLAUDE API
// ============================================================
function scoreJobsWithClaude(jobs) {
  if (!jobs || jobs.length === 0) {
    Logger.log('scoreJobsWithClaude received empty jobs array');
    return [];
  }

  const jobList = jobs.map((job, i) =>
    `${i + 1}. Company: ${job.company || 'Unknown'} | Role: ${job.title || 'Unknown'} | URL: ${job.url}`
  ).join('\n');

  // Read the prompt from the Settings tab — cell B1
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const settingsSheet = ss.getSheetByName('Settings');

  if (!settingsSheet) {
    Logger.log('Settings tab not found — please create it and add your prompt to cell B1');
    return jobs.map(job => ({ ...job, score: '🟡', details : 'Settings tab missing' }));
  }

  const customPrompt = settingsSheet.getRange('B1').getValue();

  if (!customPrompt || customPrompt.trim() === '') {
    Logger.log('No prompt found in Settings tab cell B1');
    return jobs.map(job => ({ ...job, score: '🟡', details: 'Add your prompt to Settings tab B1' }));
  }

  const prompt = customPrompt + '\n\nJobs to score:\n' + jobList;

  try {
    const response = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'r-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      payload: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      }),
      muteHttpExceptions: true
    });

    const data = JSON.parse(response.getContentText());

    if (!data.content || !data.content[0]) {
      Logger.log('Unexpected API response: ' + JSON.stringify(data));
      return jobs.map(job => ({ ...job, score: '🟡', details: 'Scoring unavailable' }));
    }

    const rawText = data.content[0].text
      .trim()
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    const jsonMatch = rawText.match(/\[[\s\S]*\]/);
    const text = jsonMatch ? jsonMatch[0] : rawText;

    Logger.log('Claude response preview: ' + text.substring(0, 200));

    let scores;
    try {
      scores = JSON.parse(text);
    } catch (parseError) {
      Logger.log('JSON parse error: ' + parseError.message);
      Logger.log('Full text: ' + text);
      return jobs.map(job => ({ ...job, score: '🟡', details: 'Scoring unavailable' }));
    }

    if (!Array.isArray(scores)) {
      Logger.log('Scores is not an array: ' + JSON.stringify(scores));
      return jobs.map(job => ({ ...job, score: '🟡', details: 'Scoring unavailable' }));
    }

    return jobs.map((job, i) => ({
      ...job,
      score: scores[i]?.score || '🟡',
      details: scores[i]?.details || ''
    }));

  } catch (e) {
    Logger.log('Claude API error: ' + e.message);
    return jobs.map(job => ({ ...job, score: '', details: '' }));
  }
}

// ============================================================
// SET UP DAILY TRIGGER
// ============================================================
function createDailyTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('parseLinkedInJobAlerts')
    .timeBased()
    .everyDays(1)
    .atHour(12)
    .create();

  Logger.log('Trigger set: parse + score at 12pm CST daily');
}

// ============================================================
// UTILITY — Remove duplicate rows from Inbox tab
// ============================================================
function removeDuplicates() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Inbox');
  const data = sheet.getDataRange().getValues();
  const header = data[0];
  const rows = data.slice(1);

  const seen = new Set();
  const unique = rows.filter(row => {
    const url = row[3];
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  });

  sheet.clearContents();
  sheet.getRange(1, 1, 1, header.length).setValues([header]);
  if (unique.length > 0) {
    sheet.getRange(2, 1, unique.length, header.length).setValues(unique);
  }
  Logger.log('Done. ' + unique.length + ' unique rows remain.');
}