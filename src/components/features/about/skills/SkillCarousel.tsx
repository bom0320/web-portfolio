"use client";

import { SkillCard, SkillPagination } from "@/components/features/about/skills";
import { useSkillCarouselDrag } from "./hooks/useSkillCarouselDrag";

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

const PAGINATION_COUNT = 5;

export default function SkillCarousel({ skills }: SkillCarouselProps) {
  const {
    viewportRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
  } = useSkillCarouselDrag();

  return (
    <div className="skill-carousel js-skill-carousel">
      <div
        ref={viewportRef}
        className="skill-carousel__viewport js-skill-carousel-viewport"
        aria-label="기술 스택 목록"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <div
          className="skill-carousel__track js-skill-carousel-track"
          onDragStart={(event) => event.preventDefault()}
        >
          {skills.map((skill) => (
            <div className="skill-carousel__item" key={skill.name}>
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

      <SkillPagination total={PAGINATION_COUNT} />
    </div>
  );
}
