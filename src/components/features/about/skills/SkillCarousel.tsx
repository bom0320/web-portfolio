"use client";

import { useState } from "react";

import { SkillCard } from "@/components/features/about/skills";
import type { Skill } from "@/data/skills";

type SkillCarouselProps = {
  skills: Skill[];
};

export default function SkillCarousel({ skills }: SkillCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="skill-carousel">
      <div className="skill-carousel__track">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
