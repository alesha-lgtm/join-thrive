"use client";

import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";
import Icon, { ICONS } from "./Icon";
import Calculator from "./Calculator";
import AskThrive from "./AskThrive";
import { useNav } from "./useNav";

export function Wrap({ children, bg, py = 96, style }) {
  return (
    <section style={{ background: bg || "transparent", padding: `${py}px 0`, ...style }}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro, image }) {
  return (
    <div
      style={{
        background: "var(--charcoal)",
        padding: "150px 0 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(105deg, rgba(44,55,67,0.92) 0%, rgba(44,55,67,0.74) 52%, rgba(44,55,67,0.5) 100%)",
            }}
          />
        </>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logos/leaf-sage.png"
        alt=""
        style={{ position: "absolute", right: -30, top: -20, height: 200, opacity: 0.1 }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{ width: 28, height: 1, background: "var(--sage-300)" }} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--sage-300)",
            }}
          >
            {eyebrow}
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(38px,5vw,62px)",
            lineHeight: 1.04,
            letterSpacing: "-0.015em",
            color: "var(--paper)",
            margin: 0,
            maxWidth: 800,
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(251,250,246,0.82)",
              margin: "22px 0 0",
              maxWidth: 600,
            }}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const nav = useNav();
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        marginTop: -80,
        overflow: "hidden",
        background: "var(--charcoal)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/images/hero.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.42,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(46,61,77,0.90) 0%, rgba(46,61,77,0.66) 46%, rgba(46,61,77,0.30) 100%)",
        }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
            <span style={{ width: 28, height: 1, background: "var(--sage-300)" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--sage-300)",
              }}
            >
              A Boutique Brokerage · Greenville, SC
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(46px, 6.5vw, 84px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "var(--paper)",
              margin: "0 0 24px",
            }}
          >
            You worked hard
            <br />
            for your money.
            <br />
            <span style={{ color: "var(--sage-300)" }}>Keep more of it.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(251,250,246,0.86)",
              maxWidth: 560,
              margin: "0 0 36px",
            }}
          >
            Thrive is built for experienced Upstate agents who are done
            overpaying. A 90/10 split, a low $12,000 annual cap, and a hands-on
            broker on every deal, without the franchise machine taking its cut.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary" size="lg" onClick={() => nav("contact")}>
              Start the Conversation
            </Button>
            <Button
              variant="inverse"
              size="lg"
              iconLeft={<Icon d={ICONS.calc} size={15} />}
              onClick={() => nav("calculator")}
            >
              Run My Numbers
            </Button>
          </div>
        </div>
      </div>
      <div
        className="hero-stats"
        style={{
          background: "rgba(46,61,77,0.48)",
          borderTop: "1px solid rgba(251,250,246,0.12)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <div className="hero-stats-inner">
          {[
            ["90/10", "Your split"],
            ["$12K", "Annual cap, then ~100% (less a flat $250 per deal)"],
            ["$125/mo", "Flat tech fee, E&O included"],
            ["$0", "Desk fees · royalties · franchise cut"],
          ].map(([v, l], i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 26,
                  color: "var(--paper)",
                  lineHeight: 1,
                }}
              >
                {v}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(251,250,246,0.62)",
                  marginTop: 5,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemStatement() {
  return (
    <Wrap bg="var(--paper)" py={104}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow align="center">The Honest Truth</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,3.6vw,44px)",
            lineHeight: 1.12,
            color: "var(--ink-600)",
            margin: "18px 0 0",
            letterSpacing: "-0.01em",
          }}
        >
          You&apos;ve worked hard to build your business. Why are you giving so
          much of it away?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 19,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "var(--ink-600)",
            margin: "22px auto 0",
            maxWidth: 640,
          }}
        >
          You&apos;re paying franchise prices for a desk you barely use.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.75,
            color: "var(--text-body)",
            margin: "20px auto 0",
            maxWidth: 640,
          }}
        >
          High splits. Monthly fees that don&apos;t flex with your business.
          Royalties skimmed off every check. A brokerage name that markets
          itself instead of you.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.75,
            color: "var(--text-body)",
            margin: "18px auto 0",
            maxWidth: 640,
          }}
        >
          You&apos;ve built a business you&apos;re proud of. Now imagine keeping
          more of your hard-earned money and your independence.
        </p>
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: 32,
            color: "var(--sage-500)",
            margin: "30px 0 0",
          }}
        >
          It&apos;s time for a brokerage built around you.
        </p>
      </div>
    </Wrap>
  );
}

export function Pillars() {
  const items = [
    [
      ICONS.trend,
      "You keep more of your money",
      "90/10 from day one, a low $12,000 annual cap, then just $250 a transaction. No franchise fees, no big-name splits, and we don't spend your money on galas and self-congratulation. We keep more in your pocket and a great culture intact.",
    ],
    [
      ICONS.shield,
      "One low monthly fee",
      "$125 a month covers your E&O insurance and the tools you actually use. No desk fees, no royalties, no franchise tax on your success.",
    ],
    [
      ICONS.spark,
      "You're more than a number",
      "You're never one of two hundred agents here. You always have your broker: direct, on-site support on every deal, not a ticket in a queue.",
    ],
    [
      ICONS.check,
      "Systems you'll actually use",
      "We don't bog you down with fancy platforms you'll use 5% of. Our custom systems are built for how agents really work: everything you need to grow, nothing to wade through.",
    ],
    [
      ICONS.send,
      "A relationship-based brokerage",
      "We grow by growing your relationships, nurturing your clients for life so the referrals keep coming. Your people work with you for you, not for a logo on a sign.",
    ],
    [
      ICONS.arrow,
      "Freedom, with support",
      "Run your business your way, with hands-on help whenever you want it. And when you're ready to move, we make it easy, walking you through every step of the transition.",
    ],
  ];
  return (
    <Wrap bg="var(--cream)" py={104}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Eyebrow align="center">Why Agents Move to Thrive</Eyebrow>
        <h2
          className="headline-oneline"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "var(--ink-600)",
            margin: "18px auto 0",
            lineHeight: 1.12,
          }}
        >
          All the support of a big firm. None of the franchise cut.
        </h2>
      </div>
      <div className="grid-2" style={{ gap: 24 }}>
        {items.map(([, t, d], i) => (
          <div
            key={i}
            className="lift"
            style={{
              display: "flex",
              gap: 22,
              background: "var(--white)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-sm)",
              padding: "32px 32px",
              boxShadow: "var(--shadow-xs)",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                fontFamily: "var(--font-serif)",
                fontSize: 34,
                lineHeight: 1,
                color: "var(--sage-400)",
                paddingTop: 2,
                minWidth: 38,
              }}
            >
              {String(i + 1).padStart(2, "0")}
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
                  fontSize: 14.5,
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
    </Wrap>
  );
}

export function SplitModel() {
  const nav = useNav();
  const tiers = [
    [
      "Through your cap",
      "90 / 10",
      "From your first deal of the year, you keep 90%. Thrive's 10% counts toward your $12,000 annual cap.",
    ],
    [
      "After your cap",
      "~100%",
      "Once Thrive has collected $12,000, you keep 100% of your commission, just a flat per-transaction fee from there.",
    ],
    [
      "Every new year",
      "Resets",
      "The cap starts fresh each year. No rollover penalties, no clawbacks if you came up short.",
    ],
  ];
  return (
    <Wrap bg="var(--paper)" py={104}>
      <div className="grid-split" style={{ gap: 64, alignItems: "center" }}>
        <div>
          <Eyebrow>The Split, In Plain English</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontWeight: 400,
              fontSize: "clamp(36px,4.2vw,54px)",
              color: "var(--ink-600)",
              margin: "14px 0 20px",
              lineHeight: 1.15,
            }}
          >
            One low cap. Then the year is yours.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--text-body)",
              margin: "0 0 28px",
              maxWidth: 460,
            }}
          >
            No tiers to climb, no fine print. You pay a 10% company dollar until
            you reach $12,000 for the year. That&apos;s the whole model, and for
            a producing agent, you reach it early and ride near-100% the rest of
            the way.
          </p>
          <Button variant="secondary" onClick={() => nav("splits")}>
            See the full breakdown
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {tiers.map(([label, big, desc], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: i === 1 ? "var(--ink-600)" : "var(--white)",
                border: `1px solid ${i === 1 ? "var(--ink-600)" : "var(--border-subtle)"}`,
                borderRadius: "var(--radius-sm)",
                padding: "24px 28px",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <div style={{ width: 130, flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 34,
                    color: i === 1 ? "var(--sage-300)" : "var(--sage-600)",
                    lineHeight: 1,
                  }}
                >
                  {big}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 10.5,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: i === 1 ? "rgba(251,250,246,0.6)" : "var(--text-muted)",
                    marginTop: 6,
                  }}
                >
                  {label}
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: i === 1 ? "rgba(251,250,246,0.85)" : "var(--text-body)",
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

export function Comparison() {
  const rows = [
    ["Commission split", "Flat, you never graduate", "90/10 to a $12K cap, then ~100%"],
    ["Monthly cost", "$300 to $1,000+ in desk & fees", "$125 flat, E&O included"],
    ["Franchise royalty", "6 to 8% skimmed off the top", "None, you're independent"],
    ["Broker access", "Hard to reach, hands-off", "Hands-on, on every deal"],
    ["Your brand", "You market the franchise", "You market you, under a name clients trust"],
    ["If you have a slow year", "Fees keep coming", "No cap penalty, it just resets"],
  ];
  return (
    <Wrap bg="var(--cream)" py={104}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow align="center">Side By Side</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,3.6vw,44px)",
            color: "var(--ink-600)",
            margin: "18px 0 0",
          }}
        >
          The franchise model vs. Thrive
        </h2>
      </div>
      <div className="cmp-scroll">
      <div
        className="cmp-card"
        style={{
          background: "var(--white)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          boxShadow: "var(--shadow-sm)",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            background: "var(--sand)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ padding: "18px 26px" }} />
          <div
            style={{
              padding: "18px 26px",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Big Franchise
          </div>
          <div
            style={{
              padding: "18px 26px",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--sage-700)",
              background: "var(--sage-50)",
            }}
          >
            Thrive
          </div>
        </div>
        {rows.map(([label, a, b], i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr",
              borderBottom:
                i < rows.length - 1 ? "1px solid var(--border-subtle)" : "none",
            }}
          >
            <div
              style={{
                padding: "20px 26px",
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 500,
                color: "var(--ink-600)",
              }}
            >
              {label}
            </div>
            <div
              style={{
                padding: "20px 26px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <Icon
                d={ICONS.x}
                size={15}
                stroke="var(--danger)"
                sw={2}
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--text-muted)",
                }}
              >
                {a}
              </span>
            </div>
            <div
              style={{
                padding: "20px 26px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                background: "var(--sage-50)",
              }}
            >
              <Icon
                d={ICONS.check}
                size={15}
                stroke="var(--sage-600)"
                sw={2}
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--ink-600)",
                }}
              >
                {b}
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Wrap>
  );
}

export function CalculatorSection() {
  return (
    <Wrap bg="var(--paper)" py={104} style={{ scrollMarginTop: 80 }}>
      <div id="calc-anchor" style={{ position: "relative", top: -60 }} />
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow align="center">Run Your Numbers</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,3.6vw,44px)",
            color: "var(--ink-600)",
            margin: "18px auto 14px",
            maxWidth: 640,
            lineHeight: 1.12,
          }}
        >
          See what you&apos;d keep at Thrive, before you ever switch.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--text-body)",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Drag the sliders to match your year.
          <br />
          Real math, no sign-up, no sales pitch.
        </p>
      </div>
      <Calculator />
    </Wrap>
  );
}

export function ChatSection() {
  return (
    <Wrap bg="var(--cream)" py={104}>
      <div className="grid-split" style={{ gap: 56, alignItems: "center" }}>
        <div>
          <Eyebrow>Still Have Questions?</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(30px,3.4vw,42px)",
              color: "var(--ink-600)",
              margin: "14px 0 20px",
              lineHeight: 1.18,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--sage-500)",
                fontSize: "clamp(26px, 3.4vw, 38px)",
                display: "block",
                lineHeight: 1.1,
                marginBottom: 6,
                whiteSpace: "nowrap",
              }}
            >
              Ask the awkward ones.
            </span>
            We&apos;ll give you straight answers.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--text-body)",
              margin: 0,
              maxWidth: 440,
            }}
          >
            What&apos;s really covered? What happens in a slow year? How fast can
            I move my license? Tap a question and get the honest version, the
            same answers you&apos;d get on a call with the broker.
          </p>
        </div>
        <AskThrive />
      </div>
    </Wrap>
  );
}

export function FounderQuote() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", background: "var(--ink-600)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="grid-split8"
          style={{ gap: 64, alignItems: "center", minHeight: 460 }}
        >
          <div style={{ alignSelf: "stretch", position: "relative", minHeight: 460 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/alesha-broker.jpg"
              alt="Alesha Oppatt, Broker-in-Charge"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(46,61,77,0) 55%, rgba(46,61,77,1) 100%)",
              }}
            />
          </div>
          <div style={{ padding: "72px 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/leaf-white.png"
              alt=""
              style={{ height: 44, marginBottom: 22, opacity: 0.9 }}
            />
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage-300)",
                marginBottom: 18,
              }}
            >
              A Note From Your Broker-in-Charge
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(18px,1.9vw,24px)",
                lineHeight: 1.65,
                color: "var(--paper)",
                margin: "0 0 28px",
                letterSpacing: 0,
              }}
            >
              &ldquo;At Thrive, I work for you, not the other way around. I built
              this brokerage so good agents could keep more of what they earn and
              never feel like one of two hundred names on a roster. You get
              on-site support, custom tools you&apos;ll actually use, and the
              freedom to run your business your way. We don&apos;t spend your
              money on fancy galas or self-congratulation. We put it back in your
              pocket and into a culture that has your back. We grow by growing
              your relationships, so your clients keep coming back and keep
              sending their friends. You&apos;re more than a number here, and you
              always have your broker.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 44, height: 1, background: "var(--sage-300)" }} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 19,
                    color: "var(--paper)",
                  }}
                >
                  Alesha Oppatt
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--sage-300)",
                    marginTop: 3,
                  }}
                >
                  Broker-in-Charge · Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PremierAndTools() {
  const tools = [
    "Branded folders and pens",
    "Home-equity boxes",
    "Ready-to-use marketing templates",
    "New tools added all the time",
  ];
  return (
    <Wrap bg="var(--sand)" py={104}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Eyebrow align="center">More Than a Split</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,3.6vw,44px)",
            color: "var(--ink-600)",
            margin: "18px auto 0",
            maxWidth: 720,
            lineHeight: 1.12,
          }}
        >
          Everything you need to grow, and then some.
        </h2>
      </div>
      <div className="grid-2" style={{ gap: 24, alignItems: "stretch" }}>
        {/* Proprietary Premier Client program */}
        <div
          className="lift"
          style={{
            background: "var(--sage-50)",
            border: "1px solid var(--sage-200)",
            borderRadius: "var(--radius-sm)",
            padding: "36px 36px",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/tpc.png"
            alt="The Thrive Premier Client Program"
            style={{
              width: 280,
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 18px",
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--sage-700)",
              marginBottom: 12,
            }}
          >
            Proprietary · Exclusive to Thrive
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14.5,
              lineHeight: 1.7,
              color: "var(--text-body)",
              margin: 0,
            }}
          >
            Our proprietary Premier Client program keeps you in front of every
            past client, all year long, and delivers them real, tangible value.
            It is how you stay top of mind, win repeat business, and turn happy
            clients into a steady stream of referrals. Built in-house, exclusive
            to Thrive agents, and always improving.
          </p>
        </div>

        {/* The ever-growing toolkit */}
        <div
          className="lift"
          style={{
            background: "var(--white)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-sm)",
            padding: "36px 36px",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/tah.png"
            alt="The Thrive Agent Hub"
            style={{
              width: 230,
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 22px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14.5,
              lineHeight: 1.7,
              color: "var(--text-body)",
              margin: "0 0 18px",
            }}
          >
            The Thrive Agent Hub puts the resources you need in one place, and it
            keeps growing, not just tech:
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 16px", padding: 0 }}>
            {tools.map((t, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "var(--font-sans)",
                  fontSize: 14.5,
                  color: "var(--ink-600)",
                  marginBottom: 12,
                }}
              >
                <Icon
                  d={ICONS.check}
                  size={16}
                  stroke="var(--sage-600)"
                  sw={2}
                  style={{ flexShrink: 0 }}
                />
                {t}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            When something makes your business easier, we add it.
          </p>
        </div>
      </div>
    </Wrap>
  );
}

export function MakingTheMove() {
  const points = [
    "I'll map the move around your active deals, so nothing slips",
    "I'll handle the license and MLS transfer right alongside you",
    "You'll never feel like you're doing it alone",
  ];
  return (
    <Wrap bg="var(--paper)" py={104}>
      <div className="grid-split" style={{ gap: 56, alignItems: "center" }}>
        <div>
          <Eyebrow>Making the Move</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(30px,3.4vw,42px)",
              color: "var(--ink-600)",
              margin: "18px 0 18px",
              lineHeight: 1.12,
              maxWidth: 520,
            }}
          >
            Changing brokerages isn&apos;t as hard as you think.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--text-body)",
              margin: "0 0 18px",
              maxWidth: 480,
            }}
          >
            I&apos;ve done it myself, so I know the hesitation, the quiet what-ifs
            about timing, your clients, your pending deals. Here&apos;s the honest
            truth: it&apos;s far simpler than it feels from the outside. I&apos;ll
            be right there to walk you through every step. And like most agents
            who make the move, you&apos;ll probably end up thinking the same
            thing:
          </p>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 32,
              color: "var(--sage-500)",
              margin: 0,
            }}
          >
            Why didn&apos;t I do this sooner?
          </p>
        </div>
        <div
          style={{
            background: "var(--sage-50)",
            border: "1px solid var(--sage-200)",
            borderRadius: "var(--radius-sm)",
            padding: "34px 36px",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {points.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                marginBottom: i < points.length - 1 ? 20 : 0,
              }}
            >
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
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--ink-600)",
                  margin: 0,
                }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

export function IbcSection() {
  return (
    <Wrap bg="var(--cream)" py={64}>
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          display: "flex",
          gap: 40,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/ibc.png"
          alt="Independent Brokerage Collective"
          style={{ width: 200, height: "auto", flexShrink: 0 }}
        />
        <div style={{ flex: "1 1 380px", minWidth: 0 }}>
          <Eyebrow>An Independent Brokerage, Not Alone</Eyebrow>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--text-body)",
              margin: "16px 0 14px",
            }}
          >
            As a small, locally owned brokerage, Thrive is a proud member of the
            Independent Brokerage Collective, a network that helps independent
            brokerages stay independent, share resources, and compete with the
            franchises without giving up what makes us local.
          </p>
          <a
            href="https://independentbrokeragecollective.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--sage-700)",
              borderBottom: "1px solid var(--sage-300)",
              paddingBottom: 2,
            }}
          >
            independentbrokeragecollective.org
          </a>
        </div>
      </div>
    </Wrap>
  );
}

export function FinalCta() {
  const nav = useNav();
  return (
    <Wrap bg="var(--paper)" py={104}>
      <div
        style={{
          background: "var(--charcoal)",
          borderRadius: "var(--radius-sm)",
          padding: "72px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/leaf-sage.png"
          alt=""
          style={{
            position: "absolute",
            right: -40,
            bottom: -40,
            height: 220,
            opacity: 0.12,
          }}
        />
        <div style={{ position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 32,
              color: "var(--sage-300)",
              margin: "0 0 10px",
            }}
          >
            Your move, on your terms
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(32px,4vw,52px)",
              lineHeight: 1.08,
              color: "var(--paper)",
              margin: "0 0 20px",
            }}
          >
            Let&apos;s talk about what staying is costing you.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(251,250,246,0.82)",
              maxWidth: 560,
              margin: "0 auto 32px",
            }}
          >
            A confidential, no-pressure conversation with the broker. Bring your
            last year&apos;s numbers, and we&apos;ll show you exactly what changes at
            Thrive.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" size="lg" onClick={() => nav("contact")}>
              Start the Conversation
            </Button>
            <Button variant="inverse" size="lg" onClick={() => nav("calculator")}>
              Run My Numbers First
            </Button>
          </div>
        </div>
      </div>
    </Wrap>
  );
}
