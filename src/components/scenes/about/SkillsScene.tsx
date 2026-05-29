"use client";

import { SkillTitle, SkillCard } from "@/components/features/about";
import { SKILLS } from "@/data/skills";

export default function SkillsScene() {
  return (
    <section className="about-skills js-about-skills">
      <div className="about-skills__inner js-about-skills-inner">
        <SkillTitle />

        <div className="about-skills__grid">
          {SKILLS.map((s) => (
            <SkillCard
              key={s.name}
              name={s.name}
              icon={s.icon}
              value={s.value}
              sub={s.sub}
              bg={s.bg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
