"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { refreshScrollTrigger } from "@/lib/gsap";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      refreshScrollTrigger();
      return;
    }

    const scrollToHash = () => {
      const target = document.querySelector<HTMLElement>(hash);

      if (!target) return;

      refreshScrollTrigger();

      requestAnimationFrame(() => {
        const targetTop = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: "auto",
        });

        refreshScrollTrigger();
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHash);
    });
  }, [pathname]);

  return null;
}
