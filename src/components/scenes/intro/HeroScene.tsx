"use client";

import { useRef } from "react";

import { HeroContent, HeroVisual } from "@/components/features/hero";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

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
