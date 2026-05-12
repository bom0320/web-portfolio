"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroAnimation from "@/components/animations/hero";
import {
  HeroContent,
  HeroVisual,
  HERO_EXIT_SCROLL_DISTANCE,
} from "@/components/hero";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const introController = HeroAnimation.intro(section);

      const exitController = HeroAnimation.exit(section);
      exitController.setProgress(0);

      const exitTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${HERO_EXIT_SCROLL_DISTANCE}`,
        scrub: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          exitController.setProgress(self.progress);
        },
      });

      return () => {
        exitTrigger.kill();
        introController.destroy();
        exitController.destroy();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
