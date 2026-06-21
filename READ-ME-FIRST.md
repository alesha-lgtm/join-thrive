# READ ME FIRST — Join Thrive

Orientation for a new session. When Alesha says **"let's work on join us"** (or Join Thrive),
read this file first, then continue the work.

## What this is
Agent-recruiting site for **Thrive Real Estate Brokers** (boutique brokerage, Greenville /
Upstate SC). Its job: convince experienced agents to switch to Thrive, walk them through the
commission model, let them calculate what they'd keep, and invite a confidential conversation.
Next.js (App Router) + React, plain JSX. Lives at `~/join-thrive`.

## It is LIVE
- **Production:** https://joinus.thriverealestatebrokers.com
- **Host:** Vercel (project `join-thrive`, account `alesha-lgtm`, free Hobby tier). Auto-deploys on push to `main`.
- **GitHub:** github.com/alesha-lgtm/join-thrive
- Separate from the WordPress marketing site (thriverealestatebrokers.com).

## Run it locally (to preview changes)
- Registered in `~/.claude/launch.json` as **`join-thrive`** (port 3100). Use the preview tool:
  `preview_start` name `join-thrive`, then open http://localhost:3100.
- Or: `cd ~/join-thrive && npm run dev`.
- If the preview ever shows blank/unstyled after a server restart, reload the full URL
  (`location.replace('http://localhost:3100/')`). It's a stale preview tab, not a code bug.

## How to deploy a change (THIS is how it goes live)
1. Edit code in `~/join-thrive`.
2. `git add -A && git commit -m "..."` (end the message with the Co-Authored-By trailer).
3. `git push origin main`
4. Vercel auto-builds; the live site updates in ~1 minute.

Claude can push directly (works as of 2026-06-20). No GitHub Desktop step needed. If a push is
ever blocked, the fallback is: Alesha clicks "Push origin" in GitHub Desktop, or adds
`"permissions": {"allow": ["Bash(git push:*)"]}` to `~/.claude/settings.json`.

## HARD RULES (do not break)
- **No em dashes** anywhere — responses or site copy. Also avoid en dashes and the minus-sign
  dash in copy; use commas, periods, or "to". (Alesha's standing rule.)
- **Calculator commission rate defaults to 0** and is entered by the agent. Thrive never sets,
  suggests, or pre-fills a commission rate (antitrust). Keep the "enter your own rate" prompt and
  the disclaimer.
- **Cap math:** 90/10 split → $12,000 annual company-dollar cap → ~100% after; flat **$250
  per-transaction fee ONLY after the cap**; flat **$125/mo** tech fee (E&O included).
- **Contact form is the ONLY conversion path** (no external booking link).

## Contact form
Posts to **Web3Forms** (no backend). Access key is in `components/ContactForm.jsx`
(`WEB3FORMS_ACCESS_KEY`). Submissions email the inbox tied to the key. Verified working.

## File map
- `app/` — routes: `page.jsx` (home), `why-thrive/`, `the-split/`, `faq/`, `contact/`;
  `layout.jsx` (metadata + Header/Footer); `globals.css` (ALL design tokens + responsive
  classes: `.shell`, `.grid-*`, `.hero*`, `.headline-oneline`, `.cmp-*`, button/field styles).
- `components/` — `sections.jsx` (Hero, ProblemStatement, Pillars, PremierAndTools, SplitModel,
  Comparison, CalculatorSection, ChatSection, FounderQuote, MakingTheMove, IbcSection, FinalCta,
  PageHeader, Wrap); `Header.jsx`, `Footer.jsx`, `Calculator.jsx`, `AskThrive.jsx` (scripted chat
  + keyword router + honest fallback), `FaqAccordion.jsx`, `ContactForm.jsx`, `Icon.jsx`,
  `useNav.js`; `ui/` (Button, Eyebrow, Input).
- `public/assets/` — `fonts/`, `logos/` (thrive marks, `tpc/tah/ibc`, leaf, favicon),
  `images/` (`hero.jpg`, `alesha-broker.jpg` = founder photo, `ph-*.jpg` = page-header backgrounds).

## Design cheatsheet
- **Fonts:** Butler (serif — headings, numbers), Montserrat (sans — body/UI; tracked-uppercase
  eyebrows and buttons), Beyond Sweet (script — ACCENT ONLY, short emotional lines; e.g. the
  "Ask the awkward ones." part of the chat heading is script while the rest is serif).
- **Color:** sage green primary (muted), slate-navy ink secondary, warm paper/cream/sand
  neutrals. Dark sections use `--charcoal`, which is a **soft slate navy (#2C3743), NOT brown**
  (owner disliked brown).
- Headings use `text-wrap: balance` to avoid a single orphan word on the last line.
- Responsive: grids collapse to one column on phones via the `.grid-*` classes; header nav hides
  on phones; the comparison table scrolls horizontally.
- **Logo sizes (set 2026-06-20):** header logo `height: 64` in `components/Header.jsx` (sits in an
  80px sticky bar; the "REAL ESTATE BROKERS" subline is readable at this size). Footer logo
  `height: 120` in `components/Footer.jsx`, intentionally much larger than the header. Owner wanted
  the footer mark big and the subline legible. Both use the white-transparent PNG (header swaps to
  `thrive-logo-ink.png` once the sticky header turns opaque on scroll / non-home pages).

## Build note
`next.config.mjs` gates static export behind `BUILD_EXPORT=true` (only `npm run build` sets it).
`next dev` runs in normal mode so the local preview stays reliable. Vercel builds Next.js
natively — don't need to touch this.

## Brand photos (for future image swaps)
In Alesha's Google Drive (alesha@thriverealestatebrokers.com): Thrive Info for Agents →
07. Brand Assets → **Thrive Brand Photos**. The Drive connector can't pull full-res image bytes
into context (too large), so have Alesha drop the file into the project or `~/Downloads`, then
process it locally with `sips` or Python PIL.

## Optional follow-ups (not blocking)
- Add a footer link to this site from the WordPress main site (Custom Link →
  https://joinus.thriverealestatebrokers.com).
- The founder-quote wording is a representative draft; confirm with Alesha.
- "Ask Thrive" chat is scripted (keyword router + honest fallback). **Decision 2026-06-20: keep it
  scripted, do NOT make it live AI.** Reasoning: a live LLM would need a backend + API key (site is
  static), adds cost, and creates antitrust exposure (it could phrase or invent a commission rate
  against the hard rule). The scripted version is enough to earn the "Let's Talk" click. If more
  coverage is wanted, add scripted Q&As + keyword routes in `components/AskThrive.jsx` (cheap, safe,
  no backend), not live AI.
