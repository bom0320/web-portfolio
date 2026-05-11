"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import LifeMotionSection from "@/components/sections/LifeMotionSection";
import HeroToLifeAnimation from "@/components/animations/heroToLife";
import LifeMotionAnimation from "@/components/animations/lifeMotion";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HeroToLifeAnimation.create();

      const topTrack = document.querySelector<HTMLDivElement>(
        ".js-life-motion-top"
      );
      const bottomTrack = document.querySelector<HTMLDivElement>(
        ".js-life-motion-bottom"
      );

      if (!topTrack || !bottomTrack) return;

      const controller = LifeMotionAnimation.track(topTrack, bottomTrack);

      ScrollTrigger.create({
        trigger: ".js-hero-life",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          controller.setProgress(self.progress);
        },
        onRefresh: () => {
          controller.refresh();
        },
      });

      return () => {
        controller.destroy();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="hero-life-transition js-hero-life">
        <div className="hero-life-transition__sticky">
          <HeroSection />
          <LifeMotionSection />
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
