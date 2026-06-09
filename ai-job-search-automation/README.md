# AI Job Search Automation
**From the BuiltWithSpring YouTube tutorial:** [Watch on YouTube](https://www.youtube.com/watch?v=TSH0iaGmUk0)

Automated your entire job search with AI. LinkedIn job alerts feed into a Google Sheet, get scored green/yellow/red against your resume by Claude AI, and are waiting for you every day at noon. Total daily time: 30 minutes.

## What This Builds
- LinkedIn job alerts that feed automatically into Google Sheets
- AI scoring that grades each role green 🟢, yellow 🟡, or red 🔴
- Color-coded results waiting for you every day at noon
- A system you can update anytime without touching the code

## Files

| File | Description |
|------|-------------|
| `JobSearchScript.gs` | Google Apps Script — paste this into your spreadsheet's Apps Script editor |
| `claude-prompt-template.txt` | Claude prompt template — open in Claude with your resume attached to generate your personalized scoring prompt |

## Setup Instructions

### 1. Set Up LinkedIn Job Alerts
Go to [LinkedIn Jobs](https://www.linkedin.com/jobs) and set up email alerts for your target roles.

### 2. Create Your Google Sheet
Create a new Google Sheet with two tabs:
- **Inbox** — columns: Date Received, Company, Job Title, Job URL, Fit Score, Fit Details, Status
- **Settings** — cell B1 will hold your personalized Claude scoring prompt

### 3. Add the Apps Script
1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any default code
3. Copy everything from `JobSearchScript.gs` and paste it in
4. On **Line 3**, replace `'PASTE YOUR SPREADSHEET ID HERE'` with your Sheet ID (found in the URL)

### 4. Get Your Claude API Key
Go to [console.anthropic.com](https://console.anthropic.com) and generate an API key.
On **Line 4** of the script, replace `'PASTE YOUR CLAUDE API KEY HERE'` with your key.

### 5. Generate Your Scoring Prompt
1. Open `claude-prompt-template.txt`
2. Copy everything in it
3. Paste it into [claude.ai](https://claude.ai) **with your resume attached**
4. Claude will generate a personalized scoring prompt — copy the output
5. Paste it into your Google Sheet's **Settings tab, cell B1**

### 6. Authorize Gmail Access
Run `parseLinkedInJobAlerts` once manually in Apps Script to trigger the Gmail authorization flow.

### 7. Set the Daily Trigger
Run `createDailyTrigger` in Apps Script. This sets the script to run automatically at noon every day.

## How It Works

```
LinkedIn alert email
        ↓
Gmail (Apps Script reads it)
        ↓
Google Sheet "Inbox" tab (job title, company, URL written in)
        ↓
Claude API (scores each job against your resume prompt)
        ↓
Fit Score + color coding written back to sheet
```

## Chapters
- [0:00](https://www.youtube.com/watch?v=TSH0iaGmUk0) — Why I built this
- [0:20](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=20s) — What the finished system looks like
- [1:09](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=69s) — Set up LinkedIn job alerts
- [2:47](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=167s) — Build your Google Sheet
- [5:00](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=300s) — Add the Apps Script
- [6:11](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=371s) — Authorize Gmail access
- [6:59](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=419s) — Get your Claude API key
- [8:11](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=491s) — Generate your personalized scoring prompt
- [9:42](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=582s) — Set the daily trigger
- [10:13](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=613s) — Live demo
- [10:57](https://www.youtube.com/watch?v=TSH0iaGmUk0&t=657s) — Outro

## About BuiltWithSpring
I'm Spring — I build AI automations for everyday life and work. No coding background needed.
Subscribe for new tutorials on automating life tasks with AI so you can reclaim your time.

🔗 [linkedin.com/in/springlam](https://linkedin.com/in/springlam) | [builtwithspring.com](https://builtwithspring.com)
