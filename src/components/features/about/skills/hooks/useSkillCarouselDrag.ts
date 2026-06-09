"use client";

import { useRef } from "react";

export function useSkillCarouselDrag() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) return;
    if (event.pointerType === "touch") return;

    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    scrollLeftRef.current = viewport.scrollLeft;

    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) return;
    if (!isDraggingRef.current) return;

    const distance = event.clientX - startXRef.current;
    viewport.scrollLeft = scrollLeftRef.current - distance;
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    isDraggingRef.current = false;
    viewport.classList.remove("is-dragging");

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  return {
    viewportRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
  };
}
