# 🌐 The Prompts I Used to Plan & Build a Website with AI

> From the BuiltWithSpring YouTube series — *"I Vibe Coded My Website in Under 2 Hours"*
>
> 📺 Watch the video: [link coming soon]
> 🌐 See the finished site: [builtwithspring.com](https://builtwithspring.com)

---

No coding background. No developer. No agency. One Sunday afternoon.

These are the exact prompts — split into two phases: **Planning** (Claude.ai) and **Building** (Claude Code). Swap in your own business details wherever you see `[brackets]`.

---

## PHASE 1 — PLANNING (Use in Claude.ai)

These prompts happen in a regular Claude chat before you touch any code.
Think of this as your strategy and design session.

---

### Prompt 1 — The Kickoff Prompt
*The very first thing you send. Sets the expertise level for the entire session.*

```
I need to build a website for [my business / a client's business].

You are a senior UX designer, brand strategist, and conversion
specialist with 15 years of experience building sites for
premium consumer brands.

Before you design anything or make any recommendations, ask me
5-7 questions to understand:
- The business, what it sells, and who buys it
- The brand personality and visual vibe
- What the site needs to DO (sell, book, inform, build trust?)
- Who the target customer is and what they care about
- 2-3 example sites the client loves and why
- What success looks like 90 days after launch

Give me multiple choice options where possible so my answers
are fast and specific.

Once I've answered, give me 3 distinct design directions — not
just color options, but full creative concepts with different
visual personalities, layouts, and emotional tones. For each
one tell me: the vibe, the tech approach, the standout feature,
and which type of customer it would convert best.

Then ask me which direction I want to pursue before building
anything.
```

---

### Prompt 2 — The Competitive Research Prompt
*Run this before or after the discovery questions. Gets AI to think strategically about your market.*

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

### Prompt 3 — The Positioning Punch Prompt
*Gets you a hero headline that actually converts.*

```
Based on everything we've discussed, write a one-sentence brand
positioning statement for [business name] that would work as a
hero headline on the website.

Give me 5 options ranging from witty to premium to emotionally
resonant.

Then tell me which one you'd A/B test first and why.
```

---

### Prompt 4 — The Brief Handoff Prompt
*Use this to hand off from Claude.ai planning to Claude Code building.
This is the most important prompt — it's the blueprint your builder works from.*

```
I have a project brief for this build. Read it completely.
Also read [list any reference files — e.g. design spec, brand
kit, example sites] for visual reference.

Once you've read everything, produce a detailed site plan:
- Tech stack recommendation
- File structure
- Component breakdown
- Phased build order

Do not write any code until I approve the plan.
```

---

## PHASE 2 — BUILDING (Use in Claude Code)

These prompts happen inside Claude Code terminal after your plan is approved.

---

### Prompt 5 — The Error Recovery Prompt
*When things break — and they will — you don't need to understand the error. You just need this.*

```
I got this error: [paste the error text or describe what
happened and what you were doing].

I have no technical background.

Tell me exactly what to type to fix it, in order, one step
at a time. Don't explain what it means — just tell me what
to do.
```

---

## PHASE 3 — QUALITY (Use in Claude.ai after the build)

Run these after the site is built but before you launch.
This is the Iterative Quality Loop — the move most people skip.

---

### Prompt 6 — Build the Grading Rubric First
*Never ask "is this good?" Ask AI to define what good means — then grade against it.*

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

### Prompt 7 — The Honest Roast Prompt
*Gets the most actionable feedback. Don't skip this one.*

```
Now I want you to be brutally honest. Forget being nice.

If a senior creative director at a luxury brand agency
reviewed this site cold, what would they say in the first
60 seconds?

What would make them wince? What would make them nod?

Give me the unfiltered version.
```

---

### Prompt 8 — The Priority Fix Prompt
*Turns the feedback into an action plan.*

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

## How to Use These (The Order Matters)

**Planning phase (Claude.ai):**
1. Prompt 1 → Kickoff + discovery questions
2. Prompt 2 → Competitive research (optional but powerful)
3. Prompt 3 → Hero headline options
4. Prompt 4 → Brief handoff to Claude Code

**Building phase (Claude Code):**
5. Prompt 5 → Repeat as needed when errors appear

**Quality phase (Claude.ai):**
6. Prompt 6 → Build the rubric
7. Prompt 7 → The honest roast
8. Prompt 8 → Priority fix list

Then take the fixes back into Claude Code, implement them,
and run the quality loop again. I ran it twice.
The site you see at builtwithspring.com is version 3.

---

## The Two Tools You Need

| Tool | What It Does | Cost |
|------|-------------|------|
| [Claude.ai](https://claude.ai) | Planning, strategy, design, quality review | Free / $20/mo Pro |
| [Claude Code](https://claude.ai/download) | Actually builds and runs the code | Included with Pro |
| [GitHub](https://github.com) | Version control | Free |
| [Vercel](https://vercel.com) | Deployment (makes it live) | Free |
| [Cloudflare](https://cloudflare.com/products/registrar) | Domain registrar | ~$10/yr |

**Total cost to launch: ~$10.46 + one Sunday afternoon.**

---

## More from BuiltWithSpring

I build AI tools that solve real problems and share every
build as a tutorial — for people with no technical background.

- 🌐 [builtwithspring.com](https://builtwithspring.com)
- 📺 YouTube: [@BuiltWithSpring](https://youtube.com/@BuiltWithSpring)
- 💼 LinkedIn: [@BuiltWithSpring](https://linkedin.com/in/BuiltWithSpring)
- 📸 Instagram: [@BuiltWithSpring](https://instagram.com/BuiltWithSpring)

---

*Found this useful? Star the repo — and tell me what you built.*
