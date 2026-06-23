"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import { useNav, idFromPath } from "./useNav";

export default function Header() {
  const pathname = usePathname();
  const current = idFromPath(pathname);
  const solid = pathname !== "/";
  const nav = useNav();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const opaque = solid || scrolled;
  const links = [
    ["why", "Why Thrive"],
    ["splits", "The Split"],
    ["calculator", "Calculator"],
    ["move", "Making the Move"],
    ["faq", "FAQ"],
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: opaque ? "rgba(251,250,246,0.94)" : "transparent",
        backdropFilter: opaque ? "saturate(180%) blur(12px)" : "none",
        WebkitBackdropFilter: opaque ? "saturate(180%) blur(12px)" : "none",
        borderBottom: `1px solid ${opaque ? "var(--border-subtle)" : "transparent"}`,
        transition: "all var(--duration-base) var(--ease-standard)",
      }}
    >
      <div
        className="shell"
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            opaque
              ? "/assets/logos/thrive-logo-ink.png"
              : "/assets/logos/thrive-logo-white-transparent.png"
          }
          alt="Thrive Real Estate Brokers"
          onClick={() => nav("home")}
          style={{ height: 64, width: "auto", cursor: "pointer" }}
        />
        <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span className="nav-links">
            {links.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className="nav-link"
                onClick={() => nav(id)}
                style={{
                  color:
                    current === id
                      ? "var(--sage-600)"
                      : opaque
                      ? "var(--ink-600)"
                      : "rgba(251,250,246,0.92)",
                  borderBottomColor:
                    current === id ? "var(--sage-500)" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </span>
          <Button
            variant={opaque ? "primary" : "inverse"}
            size="sm"
            onClick={() => nav("contact")}
          >
            Let&apos;s Talk
          </Button>
        </nav>
      </div>
    </header>
  );
}
