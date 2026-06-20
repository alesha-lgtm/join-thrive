import { Wrap, PageHeader } from "@/components/sections";
import Icon, { ICONS } from "@/components/Icon";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Let's Talk: A Confidential Conversation",
};

const expectations = [
  [
    "Just a get-to-know-you call",
    "No pressure and no pitch. It's simply a chance to meet and hear a little about your business.",
  ],
  [
    "I'll answer any questions",
    "Splits, fees, the move, whatever's on your mind. You get honest, direct answers, straight from me.",
  ],
  [
    "We'll set up a time to meet",
    "If it's something you'd like to talk through in more detail, we'll find a time that works and take it from there.",
  ],
  [
    "When we meet",
    "You'll see more of our branded items and tools up close, and we'll find out together whether Thrive is a good fit for your business.",
  ],
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Let's Talk"
        title="A confidential conversation. No pressure, ever."
        intro="Tell us a little about your business and reach out for a confidential conversation. Bring last year's numbers and we'll show you exactly what changes at Thrive, no obligation."
        image="/assets/images/ph-contact.jpg"
      />
      <Wrap bg="var(--paper)" py={80}>
        <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 26,
                color: "var(--ink-600)",
                margin: "0 0 22px",
              }}
            >
              What to expect
            </h3>
            {expectations.map(([t, d], i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "var(--sage-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon d={ICONS.check} size={15} stroke="var(--paper)" sw={2.2} />
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--ink-600)",
                      marginBottom: 4,
                    }}
                  >
                    {t}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "var(--text-body)",
                      margin: 0,
                    }}
                  >
                    {d}
                  </p>
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 30,
                paddingTop: 26,
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Icon d={ICONS.phone} size={18} stroke="var(--sage-600)" />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  color: "var(--ink-600)",
                }}
              >
                Prefer to call? (864) 367-5239
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--text-body)",
                margin: "16px 0 0",
              }}
            >
              Want to see the brokerage first? Explore our listings and team at{" "}
              <a
                href="https://www.thriverealestatebrokers.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--sage-700)", borderBottom: "1px solid var(--sage-300)" }}
              >
                thriverealestatebrokers.com
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </Wrap>
    </main>
  );
}
