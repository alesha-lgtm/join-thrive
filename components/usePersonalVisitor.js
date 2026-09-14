"use client";

import { useEffect, useState } from "react";

// Personal recruiting links: joinus.thriverealestatebrokers.com/?r=jane-smith
// - Greets the visitor by first name ("Hi Jane,") in the home hero.
// - Remembers the name in this browser so the greeting survives page-to-page clicks.
// - Emails Alesha (via the same Web3Forms inbox as the contact form) the first time
//   the link is opened in each browser session.
const WEB3FORMS_ACCESS_KEY = "10b7b3d3-cfee-4602-9674-e27c156cc2b3";
const STORE_KEY = "thrive_ref";

function cleanSlug(raw) {
  if (!raw) return null;
  const slug = raw.toLowerCase().replace(/[^a-z'-]/g, "").slice(0, 40);
  return slug.replace(/-/g, "") ? slug : null;
}

function toName(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function safe(fn) {
  try {
    return fn();
  } catch {
    return null;
  }
}

export function usePersonalVisitor() {
  const [visitor, setVisitor] = useState(null);

  useEffect(() => {
    const fromUrl = cleanSlug(new URLSearchParams(window.location.search).get("r"));
    const slug = fromUrl || cleanSlug(safe(() => localStorage.getItem(STORE_KEY)));
    if (!slug) return;
    if (fromUrl) safe(() => localStorage.setItem(STORE_KEY, fromUrl));

    const fullName = toName(slug);
    setVisitor({ slug, fullName, firstName: fullName.split(" ")[0] });

    // Alert once per browser session, only when they arrive via their link.
    const alertKey = `thrive_ref_alerted_${slug}`;
    if (!fromUrl || safe(() => sessionStorage.getItem(alertKey))) return;
    safe(() => sessionStorage.setItem(alertKey, "1"));

    const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const body = new FormData();
    body.append("access_key", WEB3FORMS_ACCESS_KEY);
    body.append("subject", `${fullName} opened the Join Thrive site`);
    body.append("from_name", "Join Thrive Link Alert");
    body.append("Who", fullName);
    body.append("Personal link", `?r=${slug}`);
    body.append("Page", window.location.pathname);
    body.append("When (Eastern)", when);
    body.append("Device", /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Phone" : "Computer");
    fetch("https://api.web3forms.com/submit", { method: "POST", body }).catch(() => {});
  }, []);

  return visitor;
}
