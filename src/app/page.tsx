"use client";

import AboutSection from "@/components/stages/AboutStage";
import ProjectsSection from "@/components/stages/ProjectsStage";
import ContactSection from "@/components/stages/ContactStage";
import IntroStage from "@/components/stages/IntroStage";

export default function HomePage() {
  return (
    <>
      <IntroStage />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
