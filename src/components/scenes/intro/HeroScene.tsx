"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroAnimation from "../../../animations/hero";
import { HeroContent, HeroVisual } from "@/components/features/hero";
gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
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
        end: "bottom top",
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
