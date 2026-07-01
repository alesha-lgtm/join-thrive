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

## Site structure (updated 2026-06-22)
The site is now **a lean home page plus dedicated pages** reached from the menu (not one long
scroll).
- **Home** (`app/page.jsx`), top to bottom: Hero, ProblemStatement ("The Honest Truth"),
  CalculatorSection, PremierAndTools ("More Than a Split"), Pillars ("why agents move", ends with
  a "See why agents move to Thrive" button to `/why-thrive`), IbcSection, FinalCta.
- **Menu** (`components/Header.jsx` `links`): Why Thrive, The Split, Making the Move,
  Meet the Broker, FAQ, plus the "Let's Talk" button. Calculator is NOT in the menu (it sits high
  on the home page). All menu items route to real pages now (no in-page anchors), via `ROUTES` +
  `idFromPath` in `components/useNav.js`. The `calculator` anchor (`/#calc-anchor`) still exists
  for the hero / final-CTA "Run My Numbers" buttons.
- `/making-the-move` = PageHeader + `MakingTheMove hideHeading` + FinalCta. `/meet-the-broker` =
  PageHeader + FounderQuote + FinalCta. Both PageHeaders use a photo background.
- Some sections appear on more than one page on purpose: PremierAndTools (home + why-thrive),
  Comparison ("franchise vs Thrive", why-thrive only now), FounderQuote (meet-the-broker +
  why-thrive), MakingTheMove (its own page).
- **FinalCta takes an optional `script` prop** so the closing line differs per page (home keeps
  "Your move, on your terms"; others have their own line). MakingTheMove takes `hideHeading`;
  PageHeader takes `image` + optional `imagePosition` (e.g. "center 22%").

## File map
- `app/` — routes: `page.jsx` (home), `why-thrive/`, `the-split/`, `making-the-move/`,
  `meet-the-broker/`, `faq/`, `contact/`;
  `layout.jsx` (metadata + Header/Footer; also holds the **Open Graph / Twitter link-preview**
  tags + `metadataBase`); `globals.css` (ALL design tokens + responsive classes: `.shell`,
  `.grid-*`, `.hero*`, `.headline-oneline`, `.cmp-*`, button/field styles).
  NOTE: the "01/02/03" step copy on The Split lives in `app/the-split/page.jsx` (the `steps`
  array), NOT in `sections.jsx`.
- `components/` — `sections.jsx` (Hero, ProblemStatement, Pillars, PremierAndTools, SplitModel,
  Comparison, CalculatorSection, ChatSection, FounderQuote, MakingTheMove, IbcSection, FinalCta,
  PageHeader, Wrap); `Header.jsx`, `Footer.jsx`, `Calculator.jsx`, `AskThrive.jsx` (scripted chat
  + keyword router + honest fallback), `FaqAccordion.jsx`, `ContactForm.jsx`, `Icon.jsx`,
  `useNav.js`; `ui/` (Button, Eyebrow, Input).
- `public/assets/` — `fonts/`, `logos/` (thrive marks, `tpc/tah/ibc`, leaf, favicon),
  `images/` (`hero.jpg` = HOME hero (do not swap; owner wants it kept), `alesha-broker.jpg` =
  founder photo in FounderQuote, `ph-*.jpg` = page-header backgrounds incl. `ph-meet.jpg` = Alesha
  on the meet-the-broker header, `hero-realestate.jpg` = "I love real estate" cup, used as the
  making-the-move header bg, `hero-houses.jpg` = "because I love houses" cup, optimized but
  currently UNUSED (available for a future header), **`og-preview.jpg`** = 1200x630
  social/link-preview card; regenerate with `/tmp/make_og.py`-style PIL script using the white logo
  + brand fonts if the card copy ever changes).
  NOTE: pasted/chat images are NOT on disk, can't be used directly. Source brand photos live under
  `~/Documents/Thrive/08 Marketing & Brand/Thrive Brand Photos/` and
  `~/Documents/Thrive/10 Headshots & Personal Photos/`; optimize with
  `sips --resampleWidth <w> -s formatOptions <q> <src> --out public/assets/images/<name>.jpg`.

## Social / link preview (set 2026-06-20)
When the live URL is shared (iMessage/texting, Facebook, LinkedIn, X, Slack, WhatsApp) it renders
a branded card: dark slate-navy, white Thrive logo, "Keep more of what you earn.", the key numbers,
and the URL. Image = `public/assets/images/og-preview.jpg`; tags = `openGraph` + `twitter` in
`app/layout.jsx` (with `metadataBase` = the production URL so the image resolves to an absolute URL
at build). Platforms cache previews hard — to force a refresh after a copy change, re-scrape the URL
in Facebook's Sharing Debugger and LinkedIn's Post Inspector.

## Earnings calculator (`components/Calculator.jsx`)
The single most important interactive piece. Structure as of 2026-06-22:
- **Left "Your Production" card = the agent's CURRENT brokerage numbers:** "Number of closings last
  year", "Sales volume last year", "Average commission rate last year" (defaults 0, antitrust),
  "Your current split" (shown as a ratio like 70/30%, the first number is take-home), "Current
  franchise fee", "Current monthly fee", "Current per-transaction fee".
- **GCI is now `volume * rate`** (was `deals * price * rate`); there is no "average sale price"
  input anymore.
- **`nowKeep`** (what you keep today) = GCI times split%, less GCI times franchise%, less
  monthlyNow times 12, less perTxnNow times deals.
- **`thriveKeep`** = GCI, less company dollar (10% capped at $12,000), less $1,500 tech (125 times
  12), less $250 times deals-after-cap.
- **Right navy results panel**: a Beyond Sweet **script header** "What you take home", then
  **"At your current brokerage" $nowKeep**, then **"At Thrive" $thriveKeep** (bigger), the Thrive
  breakdown ("How the Thrive number works"), then the **difference callout** (bright sage gradient
  chip): the plus amount and "That's how much more you would have made at Thrive."
- The $250/transaction fee only appears (math + line item) once GCI passes $120,000 (the cap point).
  Do NOT remove it when editing the panel.

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

## AI search visibility (AEO/GEO, set 2026-07-01)
Goal: get Thrive cited when agents ask AI (ChatGPT, Perplexity, Google AI Overviews, Claude)
"where should I hang / move my real estate license" in Greenville / the Upstate.
On-site foundation shipped:
- `public/robots.txt` explicitly allows AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot,
  PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, Applebot-Extended) + points to the sitemap.
- `public/sitemap.xml` (all 7 routes, trailing slashes to match `trailingSlash: true`).
- `public/llms.txt` = plain-text brief for AI systems (what Thrive is, the model, license-move, page links).
- **Schema/JSON-LD:** `RealEstateAgent` org schema site-wide in `app/layout.jsx` (`orgSchema`, Greenville +
  Upstate `areaServed`, founder Alesha, `knowsAbout` license transfer); `FAQPage` schema on `/faq`
  (`faqSchema` in `app/faq/page.jsx`).
- FAQ data now lives in `components/faqData.js` (plain module) so the server-rendered FAQ schema and the
  client `FaqAccordion` share ONE array. Do NOT move `faqs` back into the "use client" accordion, it breaks
  the server `.map()` for the schema. First two FAQ entries are query-matched ("where should I hang/move my
  license") on purpose, they feed both the visible accordion and the schema.
- **Off-site (owner action, matters most, ~6.5x more AI citations than own site):** create a Google
  Business Profile for Thrive; answer license-move questions authentically on Reddit (r/realtors + Upstate
  subs); get listed on brokerage/agent directories. On-site is the prerequisite; off-site is what moves the needle.

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
