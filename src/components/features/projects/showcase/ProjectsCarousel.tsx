"use client";

import type { Dispatch, SetStateAction } from "react";

import type { ProjectItem } from "@/data/projects";

import ProjectSlide from "./ProjectSlide";
import { getDuplicateSlide, getSlidePosition } from "./carousel";

interface ProjectsCarouselProps {
  items: ProjectItem[];
  activeIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
}

export default function ProjectsCarousel({
  items,
  activeIndex,
  onActiveIndexChange,
}: ProjectsCarouselProps) {
  if (items.length === 0) {
    return (
      <div className="projects-carousel projects-carousel--empty">
        <p>해당 조건의 프로젝트가 없습니다.</p>
      </div>
    );
  }

  const duplicate = getDuplicateSlide(activeIndex, items.length);

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__stage">
        {items.map((item, index) => (
          <ProjectSlide
            key={item.id}
            item={item}
            position={getSlidePosition(index, activeIndex, items.length)}
            onSelect={() => onActiveIndexChange(index)}
          />
        ))}

        {duplicate && (
          <ProjectSlide
            key={`${items[duplicate.index].id}-duplicate`}
            item={items[duplicate.index]}
            position={duplicate.position}
            onSelect={() => onActiveIndexChange(duplicate.index)}
          />
        )}
      </div>
    </div>
  );
}
