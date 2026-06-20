# Join Thrive — Agent Recruiting Site

A premium agent-recruiting funnel for **Thrive Real Estate Brokers** (boutique
brokerage, Greenville / Upstate SC). Rebuilt from the `design_handoff_join_thrive`
prototype into a real **Next.js (App Router) + React** app.

> ⚠️ **LOCAL ONLY — do not deploy.** This site is a standalone recruiting funnel,
> separate from the WordPress marketing site (thriverealestatebrokers.com). It will
> eventually live at a subdomain like `joinus.thriverealestatebrokers.com`.
> **Publishing is pending the owner's go-ahead.** Do not push to Vercel/Netlify/
> GitHub Pages or connect a domain until explicitly told.

## Run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

## Routes

| Route          | Screen                                            |
| -------------- | ------------------------------------------------- |
| `/`            | Home (long-scroll landing + calculator + chat)    |
| `/why-thrive`  | Why Thrive (6 benefits, comparison, founder note) |
| `/the-split`   | The Split (4-step cap model + calculator)         |
| `/faq`         | FAQ (8-item accordion + Ask Thrive)               |
| `/contact`     | Contact (confidential-conversation form)          |

The header "Calculator" link / "Run My Numbers" buttons scroll to the calculator
anchor on Home (`/#calc-anchor`).

## Structure

```
app/                  route pages + layout + globals.css (all design tokens)
components/
  ui/                 Button, Eyebrow, Input (re-implemented design-system parts)
  Icon.jsx            inline Lucide-style SVG paths (from the prototype)
  Header.jsx          sticky header, transparent→solid on scroll
  Footer.jsx
  Calculator.jsx      earnings calculator (cap math — see note below)
  AskThrive.jsx       scripted FAQ chat
  FaqAccordion.jsx
  ContactForm.jsx
  sections.jsx        Hero, Pillars, SplitModel, Comparison, FounderQuote, etc.
public/assets/        fonts, logos, lifestyle images (ported from handoff)
```

## Important behaviors (do not change without owner sign-off)

- **Antitrust:** the calculator's commission rate **defaults to 0** and must be
  entered by the agent. Thrive never sets, suggests, or pre-fills a commission rate.
- **Cap math:** 90/10 split → $12,000 annual company-dollar cap → ~100% after,
  with a flat **$250 per-transaction fee that applies ONLY after the cap is hit**,
  plus a flat **$125/mo** tech fee (E&O included).
- **No external booking link** — the Contact form is the only conversion path.

## Still to confirm before publishing (from the handoff)

- Confirm the Alesha founder-quote wording (currently a representative draft).
- Swap the placeholder lifestyle photography for real Thrive imagery.
- Decide whether "Ask Thrive" stays scripted or becomes a live assistant.
- Only a single Regular weight per brand font was provided; heavier weights are
  browser-synthesized. Add full families if available.
