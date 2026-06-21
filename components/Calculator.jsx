"use client";

import { useState } from "react";

export const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
const CAP = 12000; // annual company-dollar cap
const TECH_YR = 125 * 12; // $125/mo tech fee (covers E&O + tools)
const PER_TXN = 250; // flat per-transaction fee after you cap

function Row({ label, value, sub, onChange, min, max, step, format }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-500)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 22,
            color: "var(--ink-600)",
          }}
        >
          {format ? format(value) : value}
          {sub}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "var(--sage-500)", height: 4 }}
      />
    </div>
  );
}

export default function Calculator({ embedded }) {
  const [deals, setDeals] = useState(18);
  const [price, setPrice] = useState(385000);
  const [commPct, setCommPct] = useState(0); // YOUR commission rate, you set it
  const [curSplit, setCurSplit] = useState(70); // % the agent keeps now
  const [franchisePct, setFranchisePct] = useState(0); // franchise royalty paid now
  const [monthlyNow, setMonthlyNow] = useState(0); // desk / monthly fee paid now ($/mo)
  const [perTxnNow, setPerTxnNow] = useState(0); // per-transaction fee paid now ($/deal)

  const commissionRate = commPct / 100;
  const gci = deals * price * commissionRate;
  const capGci = CAP / 0.1; // GCI at which the $12K cap is reached
  const companyDollar = Math.min(gci * 0.1, CAP);
  const cappedOut = gci > capGci;
  const dealsAfterCap =
    cappedOut && gci > 0 ? Math.round(deals * (1 - capGci / gci)) : 0;
  const perTxnFees = dealsAfterCap * PER_TXN;
  const thriveKeep = gci > 0 ? gci - companyDollar - TECH_YR - perTxnFees : 0;
  // What you keep now = your split, minus any franchise royalty skimmed off the
  // top, minus the desk/monthly fee and any per-transaction fee you pay today.
  const nowKeep = Math.max(
    0,
    gci * (curSplit / 100) -
      gci * (franchisePct / 100) -
      monthlyNow * 12 -
      perTxnNow * deals
  );
  const diff = thriveKeep - nowKeep;

  return (
    <div
      className={embedded ? undefined : "grid-calc"}
      style={{
        ...(embedded ? { display: "grid", gridTemplateColumns: "1fr" } : null),
        gap: embedded ? 32 : 56,
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          background: "var(--white)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-sm)",
          padding: 36,
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--sage-600)",
            marginBottom: 24,
          }}
        >
          Your Production
        </div>
        <Row
          label="Closings / year"
          value={deals}
          min={2}
          max={60}
          step={1}
          onChange={setDeals}
        />
        <Row
          label="Average sale price"
          value={price}
          min={150000}
          max={1500000}
          step={5000}
          onChange={setPrice}
          format={fmt}
        />
        <Row
          label="Your commission rate"
          value={commPct}
          sub="%"
          min={0}
          max={6}
          step={0.25}
          onChange={setCommPct}
          format={(v) => v.toFixed(2)}
        />
        <Row
          label="What you keep now"
          value={curSplit}
          sub="%"
          min={50}
          max={95}
          step={1}
          onChange={setCurSplit}
        />
        <Row
          label="Franchise fee you pay now"
          value={franchisePct}
          sub="%"
          min={0}
          max={8}
          step={0.5}
          onChange={setFranchisePct}
          format={(v) => v.toFixed(1)}
        />
        <Row
          label="Monthly fee you pay now"
          value={monthlyNow}
          sub="/mo"
          min={0}
          max={1500}
          step={25}
          onChange={setMonthlyNow}
          format={fmt}
        />
        <Row
          label="Per-transaction fee you pay now"
          value={perTxnNow}
          min={0}
          max={1000}
          step={25}
          onChange={setPerTxnNow}
          format={fmt}
        />
        {commPct === 0 && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12.5,
              lineHeight: 1.6,
              color: "var(--sage-700)",
              margin: "0 0 12px",
              fontWeight: 500,
            }}
          >
            ↑ Enter your own commission rate to see your numbers.
          </p>
        )}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11.5,
            lineHeight: 1.6,
            color: "var(--text-muted)",
            margin: "6px 0 0",
          }}
        >
          You set your own commission rate, Thrive never sets or suggests
          commissions. Figures reflect the 90/10 split, the {fmt(CAP)} annual
          company cap, the $125/mo tech fee, and a flat ${PER_TXN}{" "}
          per-transaction fee after you cap.
        </p>
      </div>

      <div
        style={{
          background: "var(--ink-600)",
          borderRadius: "var(--radius-sm)",
          padding: 36,
          color: "var(--paper)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--sage-300)",
            marginBottom: 8,
          }}
        >
          You keep at Thrive
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 58,
            lineHeight: 1,
            color: "var(--paper)",
            letterSpacing: "-0.01em",
          }}
        >
          {fmt(thriveKeep)}
        </div>
        <div
          style={{
            height: 1,
            background: "rgba(251,250,246,0.16)",
            margin: "26px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "rgba(251,250,246,0.72)",
            }}
          >
            Gross commission income
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "var(--paper)",
            }}
          >
            {fmt(gci)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "rgba(251,250,246,0.72)",
            }}
          >
            Company dollar{" "}
            {cappedOut && (
              <em style={{ color: "var(--sage-300)", fontStyle: "normal" }}>
                · capped
              </em>
            )}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "var(--paper)",
            }}
          >
            - {fmt(companyDollar)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: cappedOut ? 12 : 22,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "rgba(251,250,246,0.72)",
            }}
          >
            Tech / E&O ($125/mo)
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              color: "var(--paper)",
            }}
          >
            - {fmt(TECH_YR)}
          </span>
        </div>
        {cappedOut && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                color: "rgba(251,250,246,0.72)",
              }}
            >
              Per-transaction (${PER_TXN} × {dealsAfterCap})
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                color: "var(--paper)",
              }}
            >
              - {fmt(perTxnFees)}
            </span>
          </div>
        )}
        <div
          style={{
            background: "rgba(125,130,99,0.28)",
            border: "1px solid var(--sage-400)",
            borderRadius: "var(--radius-xs)",
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--sage-200)",
              marginBottom: 4,
            }}
          >
            {diff >= 0 ? "More in your pocket vs. today" : "Difference vs. today"}
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 30,
              color: "var(--paper)",
            }}
          >
            {diff >= 0 ? "+ " : "- "}
            {fmt(Math.abs(diff))}
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "rgba(251,250,246,0.7)",
                letterSpacing: "0.04em",
              }}
            >
              {" "}
              / year
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
