import { Wrap, PageHeader, FinalCta } from "@/components/sections";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon, { ICONS } from "@/components/Icon";
import Calculator from "@/components/Calculator";

export const metadata = {
  title: "The Split: One Low Cap. Then the Year Is Yours.",
};

const steps = [
  [
    "01",
    "Experienced agents start at 90/10",
    "From your very first closing of the year, you keep 90% of your commission. Thrive's 10%, your “company dollar,” is the only thing that counts toward your cap.",
  ],
  [
    "02",
    "You reach a $12,000 cap",
    "Once Thrive has collected $12,000 in company dollar for the year, you're capped. For a producing agent, that happens early.",
  ],
  [
    "03",
    "You keep ~100%",
    "After the cap, you keep 100% of every commission, just a flat $250 per transaction from there. The rest of your year is essentially yours.",
  ],
  [
    "04",
    "It resets, no penalty",
    "Each new year the cap starts fresh. Slow year and didn't cap? No problem, no clawback. You simply stayed on 90/10.",
  ],
];

export default function TheSplitPage() {
  return (
    <main>
      <PageHeader
        eyebrow="The Split"
        title="Start at 90/10. One low cap. Then the year is yours."
        intro="No tiers to climb. No fine print. Here's exactly how the Thrive model works, and why it favors agents who produce."
        image="/assets/images/ph-split.jpg"
      />
      <Wrap bg="var(--paper)" py={88}>
        <div className="grid-steps" style={{ gap: 20, marginBottom: 56 }}>
          {steps.map(([n, t, d], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 22,
                background: "var(--white)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-sm)",
                padding: "30px 30px",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 32,
                  color: "var(--sage-400)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {n}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: 22,
                    color: "var(--ink-600)",
                    margin: "2px 0 10px",
                  }}
                >
                  {t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text-body)",
                    margin: 0,
                  }}
                >
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "var(--sage-50)",
            border: "1px solid var(--sage-200)",
            borderRadius: "var(--radius-sm)",
            padding: "28px 32px",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Icon
            d={ICONS.shield}
            size={26}
            stroke="var(--sage-600)"
            style={{ flexShrink: 0, marginTop: 2 }}
          />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-600)",
              margin: 0,
            }}
          >
            <strong>Plus one flat $125/month tech fee</strong>, covering your
            E&O insurance, tech stack, and tools. That&apos;s the entire cost
            structure. No desk fees, no royalties, no franchise cut.
          </p>
        </div>
      </Wrap>
      <Wrap bg="var(--cream)" py={96} style={{ scrollMarginTop: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow align="center">Put It To The Test</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(28px,3.4vw,40px)",
              color: "var(--ink-600)",
              margin: "16px auto 0",
              maxWidth: 600,
              lineHeight: 1.12,
            }}
          >
            What the cap model means for your year
          </h2>
        </div>
        <Calculator />
      </Wrap>
      <FinalCta script="Cap early, keep the rest" />
    </main>
  );
}
