"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

// Web3Forms access key. Get a free one at https://web3forms.com (enter the
// inbox you want submissions sent to, e.g. office@thriverealestatebrokers.com),
// then paste the key it emails you here. Submissions email to that inbox.
const WEB3FORMS_ACCESS_KEY = "10b7b3d3-cfee-4602-9674-e27c156cc2b3";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.target),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError("Something went wrong sending that. Please try again, or call (864) 367-5239.");
      }
    } catch (err) {
      setError("Couldn't reach the server. Please try again, or call (864) 367-5239.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm)",
        padding: 40,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {sent ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/leaf-sage.png"
            alt=""
            style={{ height: 56, marginBottom: 20, margin: "0 auto 20px" }}
          />
          <h3
            style={{
              fontFamily: "var(--font-script)",
              fontWeight: 400,
              fontSize: 40,
              color: "var(--ink-600)",
              margin: "0 0 10px",
              lineHeight: 1.1,
            }}
          >
            Thank you
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              color: "var(--text-body)",
              margin: 0,
            }}
          >
            Alesha will reach out within one business day, confidentially.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          {/* Web3Forms config (hidden) */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input
            type="hidden"
            name="subject"
            value="New agent inquiry from Join Thrive"
          />
          <input type="hidden" name="from_name" value="Join Thrive Recruiting Site" />
          {/* Honeypot: bots fill this, humans never see it */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Input label="First Name" placeholder="Jane" name="firstName" />
            <Input label="Last Name" placeholder="Agent" name="lastName" />
          </div>
          <Input label="Email" type="email" placeholder="jane@email.com" name="email" />
          <Input label="Phone" placeholder="(864) 000-0000" name="phone" />
          <Input
            label="Current brokerage"
            placeholder="Where are you now?"
            name="brokerage"
          />
          <Input
            label="Roughly how many deals last year?"
            placeholder="e.g. 18"
            name="deals"
          />
          <Button variant="primary" size="lg" fullWidth type="submit" disabled={sending}>
            {sending ? "Sending…" : "Start the Conversation"}
          </Button>
          {error && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--danger)",
                margin: 0,
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11.5,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              margin: 0,
              textAlign: "center",
            }}
          >
            100% confidential. We never contact your current broker.
          </p>
        </form>
      )}
    </div>
  );
}
