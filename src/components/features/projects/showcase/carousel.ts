import type { ProjectSlidePosition } from "./ProjectSlide";

export const getCircularOffset = (
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

export const getSlidePosition = (
  index: number,
  activeIndex: number,
  total: number
): ProjectSlidePosition => {
  const offset = getCircularOffset(index, activeIndex, total);

  if (offset === 0) return "active";
  if (offset === -1) return "previous";
  if (offset === 1) return "next";

  return offset < 0 ? "hidden-left" : "hidden-right";
};

export const getDuplicateSlide = (activeIndex: number, total: number) => {
  if (total !== 2) {
    return null;
  }

  const index = activeIndex === 0 ? 1 : 0;
  const originalPosition = getSlidePosition(index, activeIndex, total);

  const position: ProjectSlidePosition =
    originalPosition === "previous" ? "next" : "previous";

  return {
    index,
    position,
  };
};
