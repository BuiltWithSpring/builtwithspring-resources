# 🌐 The Prompts I Used to Plan & Build a Website with AI

> From the BuiltWithSpring YouTube series
> *"Stop paying developers. I built my business website with AI in 2 hours."*
>
> 📺 Watch the video: [link coming soon]
> 🌐 See the finished site: [builtwithspring.com](https://builtwithspring.com)

---

No coding background. No developer. No agency. One Sunday afternoon.
Total cost: $10.46.

These are the exact prompts — split into three phases that match
the video. Swap in your own business details wherever you see `[brackets]`.

**Phase 1 — Planning** runs in Claude.ai (the regular chat).
**Phase 2 — Building** runs in Claude Code (the terminal builder).
**Phase 3 — Quality** runs back in Claude.ai before you launch.

---

## PHASE 1 — PLANNING
*Use these in Claude.ai before you touch any building tools.*
*This is your strategy and design session. Don't skip it.*

---

### Prompt 1 — The Kickoff Prompt (Role Prompting)
*The very first thing you send. Gives AI an expertise hat before it
touches anything. The difference between a generic site and one that
actually looks like your business.*

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
and which type of customer it would convert best.

Then ask me which direction I want to pursue before building
anything.
```

---

### Prompt 2 — The Competitive Research Prompt
*Optional but powerful. Gets AI to think strategically about your
market before designing anything.*

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

### Prompt 3 — The Hero Headline Prompt
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

### Prompt 4 — The Brief Handoff Prompt (Context Front-Loading)
*Use this to hand off from Claude.ai planning to Claude Code building.
This is the blueprint your builder works from. Do not skip this —
it's the difference between a clean build and a chaotic one.*

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

### Prompt 4B — The Setup Prompt
*Run this in Claude.ai BEFORE opening Claude Code for the first time.
This generates step-by-step setup instructions written in plain English
for your specific machine. You will not need to Google anything.*

```
Walk me through exactly how to set up everything I need to
build this site, step by step, for a Mac with no technical
background.

Include every tool, every file, and every command I need to
type. Write it in plain English. Number every step.
```

---

## PHASE 2 — BUILDING
*Use this inside Claude Code terminal after your plan is approved.*
*When Claude Code is running — let it run. It problem-solves on its
own. It will ask you when it needs you. Until then: let it cook.*

---

### Prompt 5 — The Error Recovery Prompt
*When things break — and they will — you don't need to understand
the error. You just need this prompt.*

```
I got this error: [paste the error text or describe what
happened and what you were doing].

I have no technical background.

Tell me exactly what to type to fix it, in order, one step
at a time. Don't explain what it means — just tell me what
to do.
```

---

## PHASE 3 — QUALITY
*Run these in Claude.ai after the site is built but before you launch.*
*This is the Iterative Quality Loop — the move most people skip.*
*Don't ask "is this good?" Ask AI to define what good means — then grade.*

---

### Prompt 6 — Build the Grading Rubric First
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

### Prompt 7 — The Honest Roast
*Gets the most actionable feedback. AI will not hold back.*

```
Now I want you to be brutally honest. Forget being nice.

If a senior creative director at a top brand agency
reviewed this site cold, what would they say in the first
60 seconds?

What would make them wince? What would make them nod?

Give me the unfiltered version.
```

---

### Prompt 8 — The Priority Fix List
*Turns the feedback into a ranked action plan with implementation prompts.*

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

## The Full Order (Don't Skip Steps)

**Phase 1 — Planning (Claude.ai):**
1. Prompt 1 → Kickoff + discovery questions (Role Prompting)
2. Prompt 2 → Competitive research (optional but powerful)
3. Prompt 3 → Hero headline options
4. Prompt 4 → Brief handoff to Claude Code (Context Front-Loading)
5. Prompt 4B → Setup instructions for your machine

**Phase 2 — Building (Claude Code):**
6. Prompt 5 → Use as needed when errors appear
   *Important: let Claude Code run without interrupting it.*
   *It problem-solves on its own. Let it cook.*

**Phase 3 — Quality (Claude.ai):**
7. Prompt 6 → Build the grading rubric
8. Prompt 7 → The honest roast
9. Prompt 8 → Priority fix list

Take the fixes back into Claude Code, implement them,
and run the quality loop again. I ran it twice.
The site you see at builtwithspring.com is version 3.

---

## The Two Tools + What They Do

| Tool | Role | Cost |
|------|------|------|
| [Claude.ai](https://claude.ai) | Planning, design, quality review — the architect | Free / $20/mo Pro |
| [Claude Code](https://claude.ai/download) | Builds and runs the actual code — the construction crew | Included with Pro |
| [GitHub](https://github.com) | Version control | Free |
| [Vercel](https://vercel.com) | Deploys your site live | Free |
| [Cloudflare](https://cloudflare.com/products/registrar) | Domain registrar | ~$10/yr |

**Total cost to launch: ~$10.46 + one Sunday afternoon.**
*(A developer would have charged $5,000–$10,000 for the same result.)*

---

## More from BuiltWithSpring

I build AI tools that solve real problems for small business owners
and share every build as a free tutorial — no coding background required.

- 🌐 [builtwithspring.com](https://builtwithspring.com)
- 📺 YouTube: [@BuiltWithSpring](https://youtube.com/@BuiltWithSpring)
- 💼 LinkedIn: [@BuiltWithSpring](https://linkedin.com/in/BuiltWithSpring)
- 📸 Instagram: [@BuiltWithSpring](https://instagram.com/BuiltWithSpring)

---

*Found this useful? Star the repo and drop your business name
in the YouTube comments — I'll tell you which design direction I'd take it.*
