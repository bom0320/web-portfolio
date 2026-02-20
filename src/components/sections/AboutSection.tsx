"use client";

import AboutHero from "../about/hero/AboutHero";
import AboutInterview from "../about/interview/AboutInterview";
import AboutSkills from "../about/skills/AboutSkills";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <AboutHero />
      <AboutInterview />
      <AboutSkills />
    </section>
  );
}
