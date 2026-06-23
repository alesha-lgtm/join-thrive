# Join Thrive, Agent Recruiting Site

A premium agent-recruiting funnel for **Thrive Real Estate Brokers** (boutique
brokerage, Greenville / Upstate SC). Built on **Next.js (App Router) + React**, plain JSX,
with local brand fonts (Butler / Montserrat / Beyond Sweet). Its job: convince experienced
agents to switch to Thrive, walk them through the commission model, let them calculate what
they would keep, and invite a confidential conversation.

> For a full working brief (deploy steps, hard rules, file map, design cheatsheet), read
> **`READ-ME-FIRST.md`**. That file is the source of truth; this README is the quick overview.

## It is LIVE

- **Production:** https://joinus.thriverealestatebrokers.com
- **Host:** Vercel (project `join-thrive`, account `alesha-lgtm`, free Hobby tier). Auto-deploys
  on every push to `main`.
- **GitHub:** github.com/alesha-lgtm/join-thrive
- Separate from the WordPress marketing site (thriverealestatebrokers.com).

## Run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3100** (port 3000 is used by another local project).

## Deploy

1. Edit code, then `git add -A && git commit -m "..."`.
2. `git push origin main`.
3. Vercel auto-builds; the live site updates in about a minute.

## Routes

| Route               | Page                                                         |
| ------------------- | ------------------------------------------------------------ |
| `/`                 | Home (lean funnel: hero, the problem, calculator, more, CTA) |
| `/why-thrive`       | Why Thrive (benefits, tools, franchise comparison, founder)  |
| `/the-split`        | The Split (4-step cap model + calculator)                    |
| `/making-the-move`  | Making the Move (the switch is easier than it feels)         |
| `/meet-the-broker`  | Meet the Broker (Alesha's note as Broker-in-Charge)          |
| `/faq`              | FAQ (accordion + scripted "Ask Thrive" chat)                 |
| `/contact`          | Contact (confidential-conversation form, only conversion path)|

The menu routes to real pages. Calculator is not in the menu (it sits high on the home page);
the hero and final-CTA "Run My Numbers" buttons scroll to it via `/#calc-anchor`.

## Structure

```
app/                  route pages + layout (OG/Twitter tags) + globals.css (all design tokens)
components/
  ui/                 Button, Eyebrow, Input
  Icon.jsx            inline SVG icon paths
  Header.jsx          sticky header, transparent to solid on scroll; nav links
  Footer.jsx
  Calculator.jsx      earnings calculator (cap math, see below)
  AskThrive.jsx       scripted FAQ chat (keyword router + honest fallback)
  FaqAccordion.jsx
  ContactForm.jsx     posts to Web3Forms (no backend)
  useNav.js           ROUTES map + active-link helper
  sections.jsx        Hero, ProblemStatement, Pillars, PremierAndTools, Comparison,
                      CalculatorSection, ChatSection, FounderQuote, MakingTheMove,
                      IbcSection, FinalCta, PageHeader, Wrap
public/assets/        fonts, logos, images (hero, headers, founder, OG card)
```

## Important behaviors (do not change without owner sign-off)

- **Antitrust:** the calculator's commission rate **defaults to 0** and must be entered by the
  agent. Thrive never sets, suggests, or pre-fills a commission rate.
- **Cap math:** 90/10 split, $12,000 annual company-dollar cap, then about 100% after, with a flat
  **$250 per-transaction fee that applies ONLY after the cap is hit**, plus a flat **$125/mo** tech
  fee (E&O included). Calculator GCI = sales volume times commission rate.
- **Contact form is the only conversion path** (no external booking link).
- **No em dashes** anywhere in site copy (owner's standing rule).

## Recent updates (2026-06-22)

- Restructured from one long home page into a **lean home plus dedicated pages**; added
  `/making-the-move` and `/meet-the-broker`, with header photos on both.
- Menu now routes to real pages; dropped "Calculator", added "Making the Move" and
  "Meet the Broker".
- Calculator inputs reworked to last-year figures (closings, sales volume, average commission
  rate), "Current ..." fee labels, split shown as a ratio (70/30%), and an "At your current
  brokerage" vs "At Thrive" results panel.
- Hero stat clarified: the $12K cap then about 100% (less a flat $250 per deal).
- Each page has its own closing CTA line (no repetition) via a `script` prop on `FinalCta`.
- The Split title leads with "Start at 90/10" and the intro explains why the model favors every
  agent.

## To confirm before further polish

- Founder-quote wording is a representative draft; confirm with the owner.
- `public/assets/images/hero-houses.jpg` ("because I love houses" cup) is optimized but unused,
  available for a future header.
- "Ask Thrive" stays scripted by decision (no live AI; static site, antitrust safety).
