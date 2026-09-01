"use client";

import {
  type Dispatch,
  type SetStateAction,
  type TouchEvent,
  useRef,
} from "react";

import type { ProjectItem } from "@/data/projects";

import ProjectSlide, { type ProjectSlidePosition } from "./ProjectSlide";

interface ProjectsCarouselProps {
  items: ProjectItem[];
  activeIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
}

const SWIPE_THRESHOLD = 50;

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
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchStartYRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      touchStartXRef.current === null ||
      touchStartYRef.current === null ||
      items.length <= 1
    ) {
      return;
    }

    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const deltaX = endX - touchStartXRef.current;
    const deltaY = endY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    // 세로 스크롤 제스처라면 무시
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    // 너무 짧은 움직임은 스와이프로 처리하지 않음
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
      return;
    }

    if (deltaX < 0) {
      // 왼쪽으로 스와이프 → 다음 프로젝트
      onActiveIndexChange((current) =>
        current === items.length - 1 ? 0 : current + 1
      );

      return;
    }

    // 오른쪽으로 스와이프 → 이전 프로젝트
    onActiveIndexChange((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

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
    <div
      className="projects-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
