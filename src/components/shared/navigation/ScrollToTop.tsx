"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { refreshScrollTrigger } from "@/lib/gsap";

const MAX_RETRY_COUNT = 30;
const RETRY_DELAY = 50;

const getDocumentTop = (element: HTMLElement) =>
  element.getBoundingClientRect().top + window.scrollY;

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const clearPending = () => {
      if (!timeoutId) return;

      clearTimeout(timeoutId);
      timeoutId = null;
    };

    const scrollToTarget = (retryCount = 0) => {
      const hash = window.location.hash;

      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });

        requestAnimationFrame(() => {
          refreshScrollTrigger();
        });

        return;
      }

      const target = document.querySelector<HTMLElement>(hash);

      if (!target) {
        if (retryCount >= MAX_RETRY_COUNT) return;

        timeoutId = setTimeout(() => {
          scrollToTarget(retryCount + 1);
        }, RETRY_DELAY);

        return;
      }

      requestAnimationFrame(() => {
        window.scrollTo({
          top: getDocumentTop(target),
          left: 0,
          behavior: "auto",
        });

        requestAnimationFrame(() => {
          refreshScrollTrigger();
        });
      });
    };

    const runScrollToTarget = () => {
      clearPending();

      timeoutId = setTimeout(() => {
        scrollToTarget();
      }, 0);
    };

    runScrollToTarget();

    window.addEventListener("hashchange", runScrollToTarget);

    return () => {
      clearPending();
      window.removeEventListener("hashchange", runScrollToTarget);
    };
  }, [pathname]);

  return null;
}
