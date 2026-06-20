"use client";

import { useEffect, useRef, useState } from "react";
import Icon, { ICONS } from "./Icon";

const QA = [
  [
    "What's the split?",
    "You're on a 90/10 split until Thrive collects $12,000 in company dollar for the year. After that, you keep 100% of your commission and pay only a flat per-transaction fee. The cap resets every year.",
  ],
  [
    "What if I don't hit the cap?",
    "No problem, and no penalty. If you don't reach $12,000 in company contributions, you simply stay on the 90/10 split for the rest of the year. You're never charged the difference.",
  ],
  [
    "What are the monthly fees?",
    "A flat $125/month tech fee. That covers your E&O insurance, the tech stack, and the custom tools you actually use. No desk fees, no franchise royalties, no surprise line items.",
  ],
  [
    "What's the per-transaction fee?",
    "Not until after you hit your $12,000 cap. Then it's a flat $250 per transaction.",
  ],
  [
    "Will I have access to my broker?",
    "Always. You're never one of two hundred names on a roster here, you have direct, on-site access to your broker on every deal. You're more than a number at Thrive.",
  ],
  [
    "How hard is it to move my license?",
    "Alesha has done it herself, and so have the other agents at Thrive. We'll walk you through it, before and during your transition. Easy peasy.",
  ],
  [
    "Do I keep my clients and my brand?",
    "Yes. Your sphere is yours. You'll market your business under the Thrive name, a brand the Upstate already trusts, while everything you've built stays with you.",
  ],
  [
    "What tools and support do I get?",
    "A lot, and it keeps growing. Custom systems built for how agents really work, branded folders and pens, home-equity boxes, marketing templates, and our proprietary Thrive Premier Client program that keeps you in front of your past clients all year.",
  ],
  [
    "Is there a contract or commitment?",
    "No long lock-in. We earn your business every month. If Thrive isn't the right fit, you're free to go, though most agents stay once they see what they keep.",
  ],
  [
    "How do I get started?",
    "Reach out for a confidential conversation. Bring last year's numbers and we'll show you exactly what changes at Thrive, with no pressure and no obligation.",
  ],
  [
    "What's the catch?",
    "Honestly, there isn't one. The whole cost is the 10% company dollar up to a $12,000 cap, $125 a month, and $250 per deal after you cap. No desk fees, no royalties, no hidden line items. Run your own numbers in the calculator above.",
  ],
  [
    "How do you make money on such a low split?",
    "By staying lean and growing with good agents, not by skimming every check or selling you leads and add-ons. A fair company dollar from a roster of happy, productive agents beats nickel-and-diming a few.",
  ],
  [
    "Do I have to buy or share my leads?",
    "No. Your sphere and your leads are yours. We don't sell you leads or take a cut of them. We help you nurture the relationships you already have so they keep referring.",
  ],
  [
    "What happens to my pending deals if I switch?",
    "We time the move around them. Your active contracts are handled so nothing falls through, and we guide the license transfer so your pipeline keeps moving.",
  ],
  [
    "Do you offer training and mentorship?",
    "Yes. You get hands-on guidance from the Broker-in-Charge and the team, plus real onboarding when you move. Lean on us as much or as little as you want.",
  ],
  [
    "Can I bring my team or assistant?",
    "Absolutely. Bring your team or your assistant. We'll get them set up so your business keeps running exactly the way it already does.",
  ],
  [
    "How fast do I get paid?",
    "Cleanly and without the runaround. We handle closings and disbursement so you get paid promptly, and we're happy to walk through the exact process on a call.",
  ],
  [
    "What makes Thrive different?",
    "We're boutique on purpose: a 90/10 split to a low cap, one flat monthly fee, real broker access, custom tools, and our proprietary Premier Client program, all without the franchise cut. Big-firm support, independent economics.",
  ],
  [
    "What areas do you cover?",
    "We're based in Greenville and work with agents across the Upstate of South Carolina. If you serve the Upstate, you're in the right place.",
  ],
];

// Honest fallback when a typed question isn't one we have a canned answer for.
const FALLBACK =
  "That's a fair question, and I'd rather give you a real answer than a canned one. The honest move is a quick, confidential conversation with the broker, usually same day. Tap “Let's Talk” up top and Alesha will answer it straight, no pressure.";

// Lightweight keyword router so the text box gives real answers, not dead air.
// Each entry maps trigger words to the index of the QA answer above.
const ROUTER = [
  { k: ["catch", "gotcha", "too good"], i: 10 },
  { k: ["make money", "how do you make", "profit", "afford", "sustainable", "stay in business"], i: 11 },
  { k: ["lead", "leads"], i: 12 },
  { k: ["pending", "active deal", "active deals", "current deal", "under contract", "in escrow", "escrow"], i: 13 },
  { k: ["per transaction", "per-transaction", "250", "transaction fee"], i: 3 },
  { k: ["cap", "slow year", "didn't hit", "didnt hit", "penalty", "12,000", "12000"], i: 1 },
  { k: ["monthly", "per month", "a month", "125", "desk fee", "desk fees", "e&o", "eo", "royalt", "hidden", "fee", "fees", "cost"], i: 2 },
  { k: ["split", "90", "company dollar", "commission rate"], i: 0 },
  { k: ["license", "move my", "switch", "transfer", "transition"], i: 5 },
  { k: ["brand", "sphere", "client", "clients"], i: 6 },
  { k: ["tool", "tools", "system", "systems", "tech", "resource", "resources", "hub", "premier", "crm", "software", "marketing"], i: 7 },
  { k: ["contract", "commit", "lock", "obligation"], i: 8 },
  { k: ["training", "mentor", "mentorship", "coach", "coaching", "onboarding"], i: 14 },
  { k: ["team", "assistant", "partner"], i: 15 },
  { k: ["get paid", "paid", "payment", "disburse", "commission check", "how fast", "payout"], i: 16 },
  { k: ["different", "makes you different", "stand out", "other brokerage", "another brokerage", "vs"], i: 17 },
  { k: ["area", "areas", "cover", "market", "region", "where are you", "located", "location", "upstate", "greenville"], i: 18 },
  { k: ["broker", "support", "guidance", "help"], i: 4 },
  { k: ["start", "begin", "join", "sign up", "signup", "next step"], i: 9 },
];

// Extra topics that aren't chips but should still get a straight answer if typed.
const EXTRA = [
  {
    k: ["stable", "stability", "financial", "big enough", "small brokerage", "still be", "go under", "fold", "how big", "how many agents", "size"],
    a: "We're intentionally boutique, not fragile. You'll get more direct broker access here than at a 200-agent franchise, and as a member of the Independent Brokerage Collective we have the backing of a larger network without the franchise cut.",
  },
];

function matchAnswer(text) {
  const t = text.toLowerCase();
  for (const r of EXTRA) {
    if (r.k.some((w) => t.includes(w))) return r.a;
  }
  for (const r of ROUTER) {
    if (r.k.some((w) => t.includes(w))) return QA[r.i][1];
  }
  return null;
}

export default function AskThrive() {
  const [msgs, setMsgs] = useState([
    {
      who: "thrive",
      text: "Hi, I'm here to answer the real questions about moving your business to Thrive. Splits, fees, what's covered. Ask me anything, or tap a question below.",
    },
  ]);
  const [asked, setAsked] = useState([]);
  const [draft, setDraft] = useState("");
  const bodyRef = useRef(null);

  const ask = (q, a) => {
    setMsgs((m) => [...m, { who: "me", text: q }]);
    setAsked((s) => [...s, q]);
    setTimeout(
      () => setMsgs((m) => [...m, { who: "thrive", text: a }]),
      420
    );
  };

  const submit = (e) => {
    e.preventDefault();
    const q = draft.trim();
    if (!q) return;
    setMsgs((m) => [...m, { who: "me", text: q }]);
    setDraft("");
    const a = matchAnswer(q) || FALLBACK;
    setTimeout(() => setMsgs((m) => [...m, { who: "thrive", text: a }]), 420);
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs]);

  const remaining = QA.filter(([q]) => !asked.includes(q));

  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        maxWidth: 560,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 22px",
          borderBottom: "1px solid var(--border-subtle)",
          background: "var(--sage-50)",
        }}
      >
        <span
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "var(--sage-500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/leaf-white.png" alt="" style={{ height: 22 }} />
        </span>
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "var(--ink-600)",
            }}
          >
            Ask Thrive
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "var(--success)",
            }}
          >
            ● Online · real answers, no pressure
          </div>
        </div>
      </div>
      <div
        ref={bodyRef}
        style={{
          padding: 22,
          height: 320,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          background: "var(--paper)",
        }}
      >
        {msgs.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.who === "me" ? "flex-end" : "flex-start",
              maxWidth: "82%",
              background: m.who === "me" ? "var(--ink-600)" : "var(--white)",
              color: m.who === "me" ? "var(--paper)" : "var(--text-body)",
              border: m.who === "me" ? "none" : "1px solid var(--border-subtle)",
              borderRadius:
                m.who === "me" ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
              padding: "11px 15px",
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "14px 18px",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--white)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: remaining.length ? 12 : 0,
          }}
        >
          {remaining.slice(0, 8).map(([q, a]) => (
            <button key={q} className="chip" onClick={() => ask(q, a)}>
              {q}
            </button>
          ))}
        </div>
        <form
          onSubmit={submit}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-control)",
            padding: "0 8px 0 14px",
          }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a question…"
            aria-label="Ask Thrive a question"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              padding: "11px 0",
              color: "var(--ink-700)",
            }}
          />
          <button
            type="submit"
            aria-label="Send"
            style={{
              width: 32,
              height: 32,
              border: "none",
              borderRadius: "var(--radius-xs)",
              background: "var(--sage-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Icon d={ICONS.send} size={15} stroke="var(--paper)" />
          </button>
        </form>
      </div>
    </div>
  );
}
