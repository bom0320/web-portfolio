"use client";

import AboutHero from "../about/hero/AboutHero";
import AboutSkills from "../about/skills/AboutSkills";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <AboutHero />
      <AboutSkills />
    </section>
  );
}
