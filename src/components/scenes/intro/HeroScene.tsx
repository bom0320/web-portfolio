"use client";

import { HeroContent, HeroVisual } from "@/components/features/hero";

export default function HeroScene() {
  return (
    <section className="hero js-intro-hero" id="home">
      <div className="hero__inner">
        <div className="hero__body">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
