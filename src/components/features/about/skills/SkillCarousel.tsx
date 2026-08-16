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
        {skills.map((skill, index) => {
          const isActive = activeIndex === index;

          return (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isActive={isActive}
              onActivate={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
