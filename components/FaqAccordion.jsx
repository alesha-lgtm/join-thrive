"use client";

import { useState } from "react";
import Icon, { ICONS } from "./Icon";
import { faqs } from "./faqData";

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
