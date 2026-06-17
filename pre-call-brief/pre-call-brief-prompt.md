# Pre-Call Research Brief — Prompt & Code Node
> BuiltWithSpring · n8n + Claude · v2

This file contains everything you need to rebuild or adapt the Pre-Call Research Brief workflow:
- The full Code node JavaScript (drop into n8n)
- The assembled prompt template
- Design decisions and gotchas
- Form field reference
- Notes field guide with example
- Templated seller context block for adapting to your own use

---

## Architecture overview

6 nodes:
1. **n8n Form Trigger** — collects prospect info and seller notes
2. **HTTP Request** — scrapes the prospect's website
3. **Code node** — assembles all inputs into one clean prompt string
4. **Claude (Anthropic)** — generates the brief
5. **Gmail** — sends the formatted brief to your inbox
6. **Respond to Webhook** — confirms submission to the form

> Two technical gotchas in this build — both documented in the blueprint JSON. Read those notes before you start if you're building this yourself.

---

## Code node JavaScript

Drop this into the Code node in your n8n workflow. It pulls form data and scraped website content from the previous nodes, then assembles the full prompt string.

```javascript
// Get form inputs from the trigger node
const form = $('Form Trigger').first().json;

const contact_name = form.contact_name || '';
const contact_title = form.contact_title || '';
const business_name = form.business_name || '';
const website_url = form.website_url || '';
const meeting_date = form.meeting_date || '';
const meeting_type = form.meeting_type || 'Discovery call';
const notes = form.notes || '';

// Get scraped website content from the HTTP Request node
// JSON.stringify fix: scraping returns nested JSON — extract the text content directly
const scrapeResult = $('HTTP Request').first().json;
const scraped = scrapeResult?.data || scrapeResult?.body || JSON.stringify(scrapeResult) || '';

// Assemble the full prompt
const prompt = `You are a senior sales strategist helping Spring (BuiltWithSpring) prepare for a discovery call. Spring is a solo AI consultant in Austin, TX who builds n8n + Claude automations for small businesses and operators who need automation in their workflow.

---

SELLER CONTEXT — swap this block for your own use

Tier 1 — Focused Build: one workflow automation solving one specific pain. $500–$1,500 depending on complexity. Delivered in 1–2 weeks.

Tier 2 — Full System: multi-workflow automation across 2-3 interconnected pain points. $1,500–$3,000. Delivered in 3–4 weeks.

Always tease Tier 1 first. Tier 2 only if multiple connected pain points surface organically — never lead with it.

Primary ICP: small business owners and operators of any industry — sales, marketing, operations, or client management — as long as the pain is real and the decision is theirs to make.
Secondary ICP: enterprise/mid-market AEs and CSMs who want personal workflow automation their company hasn't built for them. Spring builds for THEIR personal workflow — not the company's systems infrastructure.

What Spring builds: n8n + Claude automations for sales prep, lead research, follow-up sequences, client onboarding, operations, and marketing workflows.
If the prospect requires IT security approval, enterprise procurement, or custom software dev — the call ends with a graceful exit, not a proposal.
Engagement floor: $500. Never suggest less than $500 of work.

---

GOAL FRAMING

This is a DISCOVERY CALL brief — not a closing call brief. The goal is to validate pain, qualify the prospect, and earn the next meeting. Not to close the deal. Frame everything around listening, validating hypotheses, and engineering an asymmetric next step.

---

DYNAMIC VARIABLES

Contact Name: ${contact_name}
Contact Title: ${contact_title}
Business Name: ${business_name}
Website URL: ${website_url}
Meeting Date: ${meeting_date}
Meeting Type: ${meeting_type}

Spring's notes: ${notes}
Website content: ${scraped}

---

STRATEGY 1 — THE PRIORITY OVERRIDE

Spring's notes ALWAYS take priority over website inferences. Weave personal/LinkedIn-style insight from the notes throughout the brief — especially into Opening 60 Seconds, Discovery Questions framing, and the Next-Step Ask. Don't ghettoize personal context into one section; let it inform the whole brief.

If notes mention a pain point, mark it 'Confirmed:'.
If notes mention a constraint, surface it in Red Flags as confirmed.
If notes mention rapport details, use them in Opening 60 Seconds.
If notes are empty, fall back to website-based inference.

---

STRATEGY 2 — THE CONFIDENCE SIGNAL

Notes-confirmed pain points use 'Confirmed:' prefix.
Hypothesized pain points use 'Likely:' prefix.
This distinction must be visible throughout the brief — especially in Pain Points and Red Flags sections.

---

STRATEGY 3 — THE ROLE FILTER

Tailor pain points, discovery questions, and the recommended first build to what someone in the contact's SPECIFIC role cares about day-to-day. A VP of BD has different pain than a Senior AE, CSM, Marketing Manager, or Solo Founder. Let the title drive specificity. Let Spring's notes override role-based defaults when they conflict.

---

OUTPUT SECTIONS (generate all 13 — do not skip any)

🎯 TL;DR Discovery Card
📞 Opening 60 Seconds
🏢 Business Snapshot
🔥 Pain Points to Validate (Confirmed: / Likely:)
💡 The Pain They Haven't Named Yet
❓ Discovery Questions (3, with high/low intent signals)
🎁 Free Value to Drop in First 10 Minutes
🛠️ Recommended First Build (If Validated) — Tier 1 or 2
🔍 Qualifying Checklist (BANT)
🚪 Disqualifying Questions to Ask Early
🚩 Red Flags
🎬 The Asymmetric Next-Step Ask
📝 Post-Call Material (Tech Maturity + Post-Call Value Hooks)`;

return [{ json: { prompt } }];
```

---

## Design decisions

**Why a Code node instead of the HTTP Request body?**
The prompt gets long — especially when website content is injected. Building it in a Code node keeps the Claude node clean (one variable: `prompt`) and makes it easy to debug. If the brief looks wrong, you check the Code node output, not a buried HTTP body field.

**Why Confirmed: vs Likely:?**
Notes-sourced insights are facts. Website-sourced insights are hypotheses. Labeling them forces the brief to be honest about confidence level — and it trains you to probe the Likely: items on the call rather than assuming.

**Why notes beat website inferences?**
Because you had a real conversation with this person (or a mutual intro). That context is always more accurate than what the marketing team put on the homepage. The prompt is explicitly told to treat notes as highest-priority truth.

**The JSON.stringify gotcha**
The HTTP Request node returns scraped content as a nested object. If you pass it directly to the prompt, you get `[object Object]`. Use `scrapeResult?.data || scrapeResult?.body || JSON.stringify(scrapeResult)` to extract a readable string. The exact key depends on your scraper setup — check the node output and adjust.

**The HubSpot upsert pattern**
If you're logging briefs to a CRM, use an upsert (check if contact exists → update or create) rather than a straight create. A straight create will duplicate contacts every time the same prospect fills out the form. This pattern is documented in the blueprint.

---

## Form field reference

| Field | n8n key | Notes |
|-------|---------|-------|
| Contact name | `contact_name` | First + last |
| Contact title | `contact_title` | Drives Role Filter strategy |
| Business name | `business_name` | Used in Business Snapshot |
| Website URL | `website_url` | Passed to HTTP Request node for scraping |
| Meeting date | `meeting_date` | Included in TL;DR card |
| Meeting type | `meeting_type` | Default: Discovery call |
| Notes | `notes` | The most important field — see guide below |

---

## Notes field guide

The notes field is where the Priority Override strategy lives. The more you put in, the better the brief.

**What to include:**
- How you met (mutual intro, LinkedIn, event, inbound)
- What they said their pain was (even casually)
- Any constraints they mentioned (budget, timeline, team size, tech stack)
- Rapport details (shared background, referral source, something they said that stuck)
- What you already know about their business that isn't on the website

**What you don't need:**
- Formal sentences — fragments are fine
- Complete information — guesses and partials are better than nothing
- Anything you'd put in a CRM — write it like a Slack message to yourself

**Example (BuiltWithSpring ICP demo):**

> Met Spring through the Austin founder community. Spring is having trouble narrowing down her ideal customer profile — which industries or small business types she should be targeting in Austin — for her new AI consultancy. She has a strong skillset with n8n, Claude, automation workflows for sales, customer success, marketing, and operations. She is currently doing manual sales outbound on LinkedIn to anyone in Austin with a small business. She would love ideas on how AI can help her identify the best fit ICPs for her company, and the best way to engage them, along with automated outreach.

---

## Adapting this for your own use

Swap the **SELLER CONTEXT** block for your own services. Everything else stays the same.

```
SELLER CONTEXT:
Tier 1 — [name]: [one-sentence description]. $[price range]. [timeline].
Tier 2 — [name]: [one-sentence description]. $[price range]. [timeline].

ICP: [who you serve and what makes them a fit]
What you do: [your deliverable types]
What you won't do: [your limits / disqualifiers]
Engagement floor: $[your minimum]
```

The system identity block ("You are a senior sales strategist helping Spring...") should also be updated to reflect your name and role.

Everything else — the three strategies, the output sections, the Confirmed:/Likely: logic — is designed to work for any seller doing discovery calls. Keep it.
