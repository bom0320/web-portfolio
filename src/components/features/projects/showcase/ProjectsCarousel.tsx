"use client";

import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";

import type { ProjectItem } from "@/data/projects";

import ProjectSlide from "./ProjectSlide";

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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const activeSlide = slideRefs.current[activeIndex];

    if (!viewport || !activeSlide) return;

    const targetLeft =
      activeSlide.offsetLeft -
      (viewport.clientWidth - activeSlide.clientWidth) / 2;

    viewport.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  }, [activeIndex, items.length]);

  if (items.length === 0) {
    return (
      <div className="projects-carousel projects-carousel--empty">
        <p>해당 조건의 프로젝트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="projects-carousel">
      <div ref={viewportRef} className="projects-carousel__viewport">
        <div className="projects-carousel__track">
          {items.map((item, index) => (
            <ProjectSlide
              key={item.id}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              item={item}
              isActive={index === activeIndex}
              onSelect={() => onActiveIndexChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
