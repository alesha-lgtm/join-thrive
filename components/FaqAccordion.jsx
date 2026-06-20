"use client";

import { useState } from "react";
import Icon, { ICONS } from "./Icon";

const faqs = [
  [
    "What exactly is the commission split?",
    "You're on a 90/10 split until Thrive collects $12,000 in company dollar for the year. After that you keep 100% of your commission and pay only a flat per-transaction fee. The cap resets annually.",
  ],
  [
    "What happens if I have a slow year and don't hit the cap?",
    "Nothing, and that's the point. There's no penalty and no clawback. You simply remain on the 90/10 split for the rest of the year, and the cap resets fresh on your anniversary.",
  ],
  [
    "What does the $125/month cover?",
    "Your E&O insurance, your technology stack, and the core tools you use to run your business. It's a flat fee, no desk fees, no franchise royalties, no surprise add-ons.",
  ],
  [
    "Is there a per-transaction fee?",
    "Not until after you hit your $12,000 cap. Then it's a flat $250 per transaction.",
  ],
  [
    "Will I have access to my broker?",
    "Always. You're never one of two hundred names on a roster here. You have direct, on-site access to your broker on every deal, because you're more than a number at Thrive.",
  ],
  [
    "Do I get broker support, or am I on my own?",
    "Hands-on support. Alesha, the Broker-in-Charge, and the team are reachable and involved: contract guidance, negotiation help, and a calm second opinion when a deal gets complicated.",
  ],
  [
    "How hard is it to move my license?",
    "Alesha has done it herself, and so have the other agents at Thrive. We'll walk you through it, before and during your transition. Easy peasy.",
  ],
  [
    "Will I keep my brand and my clients?",
    "Absolutely. Your sphere is yours. You'll market your business under the Thrive name, a brand the Upstate already trusts, while everything you've built stays with you.",
  ],
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "26px 4px",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 21,
                  color: "var(--ink-600)",
                  lineHeight: 1.3,
                }}
              >
                {q}
              </span>
              <Icon
                d={ICONS.chevron}
                size={20}
                stroke="var(--sage-600)"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "none",
                  transition: "transform var(--duration-base) var(--ease-standard)",
                }}
              />
            </button>
            <div
              style={{
                maxHeight: isOpen ? 220 : 0,
                overflow: "hidden",
                transition: "max-height var(--duration-base) var(--ease-standard)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--text-body)",
                  margin: "0 4px 28px",
                  maxWidth: 680,
                }}
              >
                {a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
