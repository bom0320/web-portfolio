"use client";

import Lenis from "lenis";
import { type ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const isMobileViewport = () => {
  return window.matchMedia("(max-width: 768px)").matches;
};

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    const isMobile = isMobileViewport();

    window.scrollTo(0, 0);

    let refreshFrameId = 0;
    let secondRefreshFrameId = 0;

    const refreshScrollTrigger = () => {
      refreshFrameId = requestAnimationFrame(() => {
        secondRefreshFrameId = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    };

    refreshScrollTrigger();

    const handleResize = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      return () => {
        cancelAnimationFrame(refreshFrameId);
        cancelAnimationFrame(secondRefreshFrameId);

        window.removeEventListener("resize", handleResize);

        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    lenis.scrollTo(0, {
      immediate: true,
    });

    return () => {
      cancelAnimationFrame(refreshFrameId);
      cancelAnimationFrame(secondRefreshFrameId);

      window.removeEventListener("resize", handleResize);

      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();

      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return <>{children}</>;
}
