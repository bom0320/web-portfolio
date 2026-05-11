"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroSection from "@/components/sections/HeroSection";
import LifeMotionSection from "@/components/sections/LifeMotionSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroToLifeAnimation from "@/components/animations/heroToLife";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HeroToLifeAnimation.create();
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
