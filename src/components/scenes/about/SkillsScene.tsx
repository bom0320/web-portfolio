"use client";

import { SkillCarousel, SkillTitle } from "@/components/features/about";
import { SKILLS } from "@/data/skills";

export default function SkillsScene() {
  return (
    <section className="about-skills js-about-skills">
      <div className="about-skills__inner js-about-skills-inner">
        <SkillTitle />
        <SkillCarousel skills={SKILLS} />
      </div>
    </section>
  );
}
