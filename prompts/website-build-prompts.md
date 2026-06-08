# 🌐 The 9 Prompts I Used to Plan & Build a Website with AI

> From the BuiltWithSpring YouTube series
> *"Stop paying developers. I built my business website with AI in 2 hours."*
>
> 📺 Watch the video: [link coming soon]
> 🌐 See the finished site: [builtwithspring.com](https://builtwithspring.com)

---

No coding background. No developer. No agency. One Sunday afternoon.
Total cost: $10.46.

A developer would have charged $5,000–$10,000 for the same result.

These are the exact 9 prompts — organized by the 6 steps in the video.
7 are covered in the video. 2 are bonus prompts not in the video
but absolutely worth using. Marked with ⭐

Swap in your own business details wherever you see `[brackets]`.

Set your model to **Sonnet at Medium effort** for all planning prompts.
Bottom right of the Claude.ai chat window.

---

## STEP 1 — PLAN YOUR SITE
*Use these in Claude.ai (the regular chat — free to start, nothing to install).*
*This is your strategy and design session. Don't skip it.*

**Tip 1: Role Prompting** — give AI an expertise hat before it touches anything.
**Tip 2: Context Front-Loading** — the more specific your answers, the more specific the output.

---

### Prompt 1 — The Kickoff Prompt (Role Prompting)
*The very first thing you send. The difference between a template
and something that actually looks like your business.*

```
I need to build a website for [describe your business in one sentence].

You are a senior UX designer, brand strategist, and conversion
specialist with 15 years of experience building sites for
premium consumer brands.

Before you design anything or make any recommendations, ask me
5-7 questions to understand:
- The business, what it sells, and who buys it
- The brand personality and visual vibe
- What the site needs to DO (sell, book, inform, build trust?)
- Who the target customer is and what they care about
- 2-3 example sites I love and why
- What success looks like 90 days after launch

Give me multiple choice options where possible so my answers
are fast and specific.

Once I've answered, give me 3 distinct design directions — not
just color options, but full creative concepts with different
visual personalities, layouts, and emotional tones. For each
one tell me: the vibe, the tech approach, the standout feature,
and which type of customer it would actually convert.

Then ask me which direction I want to pursue before building
anything.
```

---

### Prompt 2 — The Competitive Research Prompt (Context Front-Loading)
*Gets AI to think strategically about your market before designing.
If you don't have reference sites you love, ask Claude to recommend some.*

```
Before we finalize the design direction, research 5 high-end
[your industry] brands and analyze their websites.

For each one tell me:
- The visual style
- The conversion strategy
- What they do exceptionally well
- One thing you'd improve

Then tell me where [my business name] has a gap in the market
it could own visually.
```

---

### Prompt 3 — The Hero Headline Prompt ⭐ BONUS — not in the video
*Gets you a homepage headline that actually converts.*

```
Based on everything we've discussed, write a one-sentence brand
positioning statement for [business name] that would work as a
hero headline on the website.

Give me 5 options ranging from witty to premium to emotionally
resonant.

Then tell me which one you'd A/B test first and why.
```

---

## STEP 2 — BUILD THE BRIEF
*Still in Claude.ai. Run this at the END of your planning session
before you close the chat.*

---

### Prompt 4 — The Brief Compilation Prompt
*Compiles everything into one document — your blueprint for the build.
Save it as brief.md in your project folder.*

```
Based on everything we've discussed in this planning session,
compile a complete project brief I can hand off to Claude Code
to build this site.

Include:
- Business overview and brand personality
- Chosen design direction and visual style
- Tech stack (Next.js, GitHub, Vercel)
- Site structure and pages needed
- Key components and features
- Copy tone and voice guidelines

Format it clearly so a builder can follow it
without any additional context.
```

---

## STEP 3 — SET UP YOUR TERMINAL
*Still in Claude.ai — run this in a FRESH chat before opening Claude Code.*
*Claude.ai generates your setup instructions. You follow them in terminal.*

*Before running this prompt:*
- *If starting from scratch: create a free GitHub account (github.com) and free Vercel account (vercel.com). Two minutes each.*
- *If you already have a hosting provider: tell Claude what you're using instead.*

---

### Prompt 5 — The Setup Prompt
*Generates step-by-step setup instructions in plain English
for your specific machine and stack.*

```
This is my first time using Claude Code on my Mac.
I have no technical background.

I want to build a website using Next.js, deploy it
on Vercel, and host the code on GitHub.

Walk me through exactly how to set up everything
I need to get started — every tool, every install,
every command — in plain English, numbered step
by step. Don't skip anything.
```

---

## STEP 4 — START YOUR BUILD
*Now you're in Claude Code terminal.*
*Type claude to open it. Paste your brief.md file reference as your first message.*
*When Claude Code is running — let it run.*
*To switch models: type /model in terminal.*

---

### Prompt 6 — The Error Recovery Prompt
*When things break — and they will — you don't need to understand
the error. Use this as many times as needed.*

```
I got this error: [paste the error text or describe what
happened and what you were doing].

I have no technical background.

Tell me exactly what to type to fix it, in order, one step
at a time. Don't explain what it means — just tell me what
to do.
```

---

## STEP 5 — QUALITY CHECK BEFORE LAUNCH
*Back in Claude.ai. Run these before you push anything live.*
*This is the Iterative Quality Loop — the step most people skip.*
*Never ask "is this good?" Ask AI to define what good means — then grade.*

---

### Prompt 7 — Build the Grading Rubric First
*Always build the rubric before you grade. Never the other way around.*

```
Before you grade my site, I want you to first build the
grading rubric.

Include these categories:
- Visual design and brand consistency
- Hero section effectiveness (first 3 seconds)
- Conversion architecture (is it easy to buy / book / contact?)
- Product or service presentation
- Mobile experience
- Brand voice and copywriting
- Trust signals and social proof
- Technical performance considerations

Weight each category by importance.

Once I approve the rubric, grade my site against it and tell
me exactly what to fix for anything that scores below 7 out
of 10.
```

---

### Prompt 8 — The Honest Roast ⭐ BONUS — not in the video
*Gets the most brutally honest feedback. Run after the rubric
grade for a completely different perspective.*

```
Now I want you to be brutally honest. Forget being nice.

If a senior creative director at a top brand agency
reviewed this site cold, what would they say in the first
60 seconds?

What would make them wince? What would make them nod?

Give me the unfiltered version.
```

---

### Prompt 9 — The Priority Fix List
*Turns feedback into a ranked action plan with the exact prompts
to paste into Claude Code for each fix.*

```
Based on everything you just flagged, give me the top 3
highest-impact fixes I should make before launch — ranked
by how much each one would move conversion.

For each fix tell me:
- What to change
- Why it matters
- The exact prompt I should give Claude Code to implement it
```

---

## STEP 6 — IMPROVE YOUR SITE AFTER LAUNCH
*The site you launch doesn't have to be the site you keep.*
*Any time you want to add something new — same process.*
*No new prompts needed. No new skills required.*

1. Describe what you want in Claude.ai
2. Grade the idea using the same rubric process
3. Ask Claude for the build prompt
4. Paste it into Claude Code terminal
5. Let it cook

---

## Prompt Order Summary

| Step | What You're Doing | Prompt | Tool |
|------|-------------------|--------|------|
| Step 1 | Plan your site | Prompts 1 + 2 | Claude.ai |
| Step 1 bonus | Hero headline | Prompt 3 ⭐ | Claude.ai |
| Step 2 | Build the brief | Prompt 4 | Claude.ai |
| Step 3 | Set up terminal | Prompt 5 | Claude.ai |
| Step 4 | Build the site | Prompt 6 | Claude Code |
| Step 5 | Quality check | Prompts 7 + 9 | Claude.ai |
| Step 5 bonus | Honest roast | Prompt 8 ⭐ | Claude.ai |
| Step 6 | Improve after launch | No new prompts | Both |

---

## The Two Tools + What They Do

| Tool | Role | Cost |
|------|------|------|
| [Claude.ai](https://claude.ai) | Planning, design, quality review — the architect | Free to start |
| [Claude Code](https://claude.ai/download) | Builds and runs the actual code — the construction crew | Claude Pro $20/mo |
| [GitHub](https://github.com) | Version control | Free |
| [Vercel](https://vercel.com) | Deploys your site live | Free |
| [Cloudflare](https://cloudflare.com/products/registrar) | Domain registrar | ~$10/yr |

**Total cost to launch: ~$10.46 + one Sunday afternoon.**
*(A developer would have charged $5,000–$10,000 for the same result.)*

---

## Model Settings

**For all planning and setup prompts (Steps 1–3):**
Sonnet · Medium effort
Bottom right of the Claude.ai chat window.

**When something breaks and you've tried twice (Step 4):**
Switch to Opus · High effort
Type /model in the Claude Code terminal to switch.
Switch back to Sonnet once it's fixed.

---

## More from BuiltWithSpring

I build AI tools that solve real problems for small business owners
and share every build as a free tutorial — no coding background required.

- 🌐 [builtwithspring.com](https://builtwithspring.com)
- 📺 YouTube: [@BuiltWithSpring](https://youtube.com/@BuiltWithSpring)
- 💼 LinkedIn: [@BuiltWithSpring](https://linkedin.com/in/BuiltWithSpring)
- 📸 Instagram: [@BuiltWithSpring](https://instagram.com/BuiltWithSpring)

---

*7 prompts covered in the video + 2 bonus ones marked ⭐*
*All free. Steal them. Build something.*

*Drop your business name in the YouTube comments —
I'll tell you which design direction I'd take it.*
