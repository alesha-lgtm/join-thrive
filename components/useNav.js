"use client";

import { useRouter, usePathname } from "next/navigation";

// Map the prototype's screen ids -> real routes.
export const ROUTES = {
  home: "/",
  why: "/why-thrive",
  splits: "/the-split",
  faq: "/faq",
  contact: "/contact",
  // "calculator" is an in-page anchor on the Home screen.
  calculator: "/#calc-anchor",
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
    if (id === "calculator") {
      // If already home, just smooth-scroll to the calculator.
      if (pathname === "/") {
        document
          .getElementById("calc-anchor")
          ?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      router.push("/#calc-anchor");
      // After navigation, ensure we land on the calculator.
      setTimeout(() => {
        document
          .getElementById("calc-anchor")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return;
    }
    router.push(ROUTES[id] || "/");
  };
}
