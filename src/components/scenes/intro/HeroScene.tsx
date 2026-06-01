"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import HeroAnimation from "../../../animations/hero";
import { HeroContent, HeroVisual } from "@/components/features/hero";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const introController = HeroAnimation.intro(section);

      return () => {
        introController.destroy();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        <div className="hero__body">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
