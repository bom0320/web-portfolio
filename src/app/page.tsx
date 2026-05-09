"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import LifeMotionSection from "@/components/sections/LifeMotionSection";
import HeroToLifeAnimation from "@/components/animations/heroToLife";

export default function HomePage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HeroToLifeAnimation.create();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <HeroSection />
      <LifeMotionSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
