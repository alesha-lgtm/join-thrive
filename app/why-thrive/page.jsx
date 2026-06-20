import {
  Wrap,
  PageHeader,
  PremierAndTools,
  Comparison,
  FounderQuote,
  FinalCta,
} from "@/components/sections";

export const metadata = {
  title: "Why Thrive: Big-Firm Support, Without the Big-Firm Cut",
};

const benefits = [
  [
    "Keep more of every check",
    "90/10 to a low $12,000 cap, then just $250 a transaction. No franchise fees, no big-name splits skimming the top, and we don't spend your earnings on galas or self-congratulation.",
  ],
  [
    "You're more than a number",
    "You're never one of two hundred agents on a roster. You always have your broker, with on-site support on every deal, a real culture of camaraderie, not a call center.",
  ],
  [
    "Systems you'll actually use",
    "We won't bog you down with fancy platforms you'll use 5% of. Our custom tools are built for how agents really work: everything you need to grow, nothing to wade through.",
  ],
  [
    "A relationship-based brokerage",
    "We grow by growing your relationships, nurturing your clients for life so the referrals never stop. Your people work with you for you, not for a name on a sign.",
  ],
  [
    "Freedom to run your business",
    "Your business, your way, with hands-on help whenever you want it. Access to everything you need to grow, without franchise fees or oversized splits getting in the way.",
  ],
  [
    "An easy, guided move",
    "Switching brokerages sounds harder than it is. We make the transition simple, walking you through every step so nothing falls through the cracks.",
  ],
];

export default function WhyThrivePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Why Thrive"
        title="Everything a big firm gives you, without what it takes from you."
        intro="Thrive pairs real broker support and a trusted local name with the economics of working for yourself, purpose-built for experienced Upstate producers."
        image="/assets/images/ph-why.jpg"
      />
      <Wrap bg="var(--paper)" py={88}>
        <div className="grid-3" style={{ gap: 24 }}>
          {benefits.map(([t, d], i) => (
            <div
              key={i}
              className="lift"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-sm)",
                padding: "30px 28px",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logos/leaf-sage.png"
                alt=""
                style={{ height: 32, marginBottom: 18 }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 21,
                  color: "var(--ink-600)",
                  margin: "0 0 10px",
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
          ))}
        </div>
      </Wrap>
      <PremierAndTools />
      <Comparison />
      <FounderQuote />
      <FinalCta />
    </main>
  );
}
