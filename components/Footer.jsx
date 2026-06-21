"use client";

import Button from "./ui/Button";
import { useNav } from "./useNav";

export default function Footer() {
  const nav = useNav();
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        color: "var(--paper)",
        paddingTop: 64,
      }}
    >
      <div className="shell">
        <div
          className="grid-footer"
          style={{ gap: 48, paddingBottom: 52, alignItems: "start" }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/thrive-logo-white-transparent.png"
              alt="Thrive"
              style={{ height: 52, marginBottom: 20 }}
            />
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                lineHeight: 1.3,
                color: "var(--paper)",
                margin: "0 0 18px",
                maxWidth: 360,
              }}
            >
              You worked hard for your money. Keep more of it.
            </p>
            <Button variant="primary" onClick={() => nav("contact")}>
              Start a Confidential Conversation
            </Button>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--sage-300)",
                margin: "0 0 16px",
              }}
            >
              Explore
            </h4>
            {[
              ["why", "Why Thrive"],
              ["splits", "The Split"],
              ["calculator", "Earnings Calculator"],
              ["faq", "FAQ"],
            ].map(([id, t]) => (
              <button
                key={id}
                type="button"
                onClick={() => nav(id)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13.5,
                  lineHeight: 2.1,
                  color: "rgba(251,250,246,0.72)",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--sage-300)",
                margin: "0 0 16px",
              }}
            >
              Get In Touch
            </h4>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                lineHeight: 1.9,
                color: "rgba(251,250,246,0.72)",
                margin: 0,
              }}
            >
              office@thriverealestatebrokers.com
              <br />
              (864) 367-5239
            </p>
            <a
              href="https://www.thriverealestatebrokers.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 16,
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--sage-300)",
                borderBottom: "1px solid rgba(183,189,159,0.5)",
                paddingBottom: 2,
              }}
            >
              Visit thriverealestatebrokers.com
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(251,250,246,0.14)",
            padding: "22px 0 40px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11.5,
              color: "rgba(251,250,246,0.5)",
            }}
          >
            © 2026 Thrive Real Estate Brokers · Independent Brokerage · Equal
            Housing Opportunity
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11.5,
              color: "rgba(251,250,246,0.5)",
            }}
          >
            Alesha Oppatt, Broker-in-Charge
          </span>
        </div>
      </div>
    </footer>
  );
}
