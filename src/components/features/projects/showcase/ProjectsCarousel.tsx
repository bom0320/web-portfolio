"use client";

import type { Dispatch, SetStateAction } from "react";

import type { ProjectItem } from "@/data/projects";

import ProjectSlide, { type ProjectSlidePosition } from "./ProjectSlide";

interface ProjectsCarouselProps {
  items: ProjectItem[];
  activeIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
}

const getCircularOffset = (
  index: number,
  activeIndex: number,
  total: number
) => {
  let offset = index - activeIndex;
  const half = total / 2;

  if (offset > half) {
    offset -= total;
  }

  if (offset < -half) {
    offset += total;
  }

  return offset;
};

const getSlidePosition = (
  index: number,
  activeIndex: number,
  total: number
): ProjectSlidePosition => {
  const offset = getCircularOffset(index, activeIndex, total);

  if (offset === 0) {
    return "active";
  }

  if (offset === -1) {
    return "previous";
  }

  if (offset === 1) {
    return "next";
  }

  return offset < 0 ? "hidden-left" : "hidden-right";
};

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

  /*
   * 프로젝트가 2개뿐인 필터에서도
   *
   * A ← B → A
   *
   * 처럼 양쪽 카드가 모두 보이도록
   * 반대편 카드 하나를 clone 한다.
   */
  const duplicateItem =
    items.length === 2 ? items[activeIndex === 0 ? 1 : 0] : null;

  const duplicateIndex =
    items.length === 2 ? (activeIndex === 0 ? 1 : 0) : null;

  const duplicatePosition: ProjectSlidePosition | null =
    duplicateIndex !== null
      ? getSlidePosition(duplicateIndex, activeIndex, items.length) ===
        "previous"
        ? "next"
        : "previous"
      : null;

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__stage">
        {items.map((item, index) => {
          const position = getSlidePosition(index, activeIndex, items.length);

          return (
            <ProjectSlide
              key={item.id}
              item={item}
              position={position}
              onSelect={() => onActiveIndexChange(index)}
            />
          );
        })}

        {duplicateItem && duplicateIndex !== null && duplicatePosition && (
          <ProjectSlide
            key={`${duplicateItem.id}-duplicate`}
            item={duplicateItem}
            position={duplicatePosition}
            onSelect={() => onActiveIndexChange(duplicateIndex)}
          />
        )}
      </div>
    </div>
  );
}
