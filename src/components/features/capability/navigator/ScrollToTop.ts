"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { refreshScrollTrigger } from "@/lib/gsap";

const NAVIGATOR_PIN_TRIGGER_ID = "capability-navigator-pin";

const MAX_RETRY_COUNT = 30;
const RETRY_DELAY = 50;

const getDocumentTop = (element: HTMLElement) => {
  return element.getBoundingClientRect().top + window.scrollY;
};

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const clearPending = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const scrollToHash = (retryCount = 0) => {
      const hash = window.location.hash;

      console.log("ScrollToTop hash check", {
        pathname,
        hash,
        retryCount,
      });

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

      refreshScrollTrigger();

      if (hash === "#project-navigator") {
        const navigatorTrigger = ScrollTrigger.getById(
          NAVIGATOR_PIN_TRIGGER_ID
        );

        console.log("navigator pin trigger", navigatorTrigger);

        if (!navigatorTrigger) {
          if (retryCount >= MAX_RETRY_COUNT) return;

          timeoutId = setTimeout(() => {
            scrollToHash(retryCount + 1);
          }, RETRY_DELAY);

          return;
        }

        requestAnimationFrame(() => {
          window.scrollTo({
            top: navigatorTrigger.start,
            left: 0,
            behavior: "auto",
          });

          requestAnimationFrame(() => {
            ScrollTrigger.update();
          });
        });

        return;
      }

      const target = document.querySelector<HTMLElement>(hash);

      console.log("normal hash target", target);

      if (!target) {
        if (retryCount >= MAX_RETRY_COUNT) return;

        timeoutId = setTimeout(() => {
          scrollToHash(retryCount + 1);
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
          ScrollTrigger.update();
        });
      });
    };

    const runScrollToHash = () => {
      clearPending();

      timeoutId = setTimeout(() => {
        scrollToHash();
      }, 0);
    };

    runScrollToHash();

    window.addEventListener("hashchange", runScrollToHash);

    return () => {
      clearPending();
      window.removeEventListener("hashchange", runScrollToHash);
    };
  }, [pathname]);

  return null;
}
