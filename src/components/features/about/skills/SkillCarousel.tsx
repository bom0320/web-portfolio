"use client";

import { useRef, useState } from "react";
import { SkillCard, SkillPagination } from "@/components/features/about/skills";

type SkillCarouselItem = {
  name: string;
  icon: string;
  value: number;
  sub?: string;
  bg: string;
};

type SkillCarouselProps = {
  skills: SkillCarouselItem[];
};

export default function SkillCarousel({ skills }: SkillCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const slideWidth = viewport.scrollWidth / skills.length;
    const nextIndex = Math.round(viewport.scrollLeft / slideWidth);
    const safeIndex = Math.min(Math.max(nextIndex, 0), skills.length - 1);

    setActiveIndex(safeIndex);
  };

  return (
    <div className="skill-carousel">
      <div
        ref={viewportRef}
        className="skill-carousel__viewport"
        aria-label="기술 스택 목록"
        onScroll={handleScroll}
      >
        <div className="skill-carousel__track">
          {skills.map((skill) => (
            <div className="skill-carousel__slide" key={skill.name}>
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                value={skill.value}
                sub={skill.sub}
                bg={skill.bg}
              />
            </div>
          ))}
        </div>
      </div>

      <SkillPagination total={skills.length} activeIndex={activeIndex} />
    </div>
  );
}
