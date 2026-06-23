"use client";

import { useRouter, usePathname } from "next/navigation";

// Map the prototype's screen ids -> real routes.
export const ROUTES = {
  home: "/",
  why: "/why-thrive",
  splits: "/the-split",
  faq: "/faq",
  contact: "/contact",
  // In-page anchors on the Home screen.
  calculator: "/#calc-anchor",
  move: "/#move-anchor",
  founder: "/#founder-anchor",
};

// Derive the active nav id from the current pathname.
export function idFromPath(pathname) {
  switch (pathname) {
    case "/why-thrive":
      return "why";
    case "/the-split":
      return "splits";
    case "/faq":
      return "faq";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
}

export function useNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (id) => {
    const route = ROUTES[id] || "/";
    const hashIndex = route.indexOf("#");
    // In-page anchors (e.g. /#calc-anchor, /#move-anchor): smooth-scroll if we're
    // already on that page, otherwise navigate there first, then scroll.
    if (hashIndex !== -1) {
      const path = route.slice(0, hashIndex) || "/";
      const anchorId = route.slice(hashIndex + 1);
      const scroll = () =>
        document
          .getElementById(anchorId)
          ?.scrollIntoView({ behavior: "smooth" });
      if (pathname === path) {
        scroll();
      } else {
        router.push(route);
        setTimeout(scroll, 150);
      }
      return;
    }
    router.push(route);
  };
}
