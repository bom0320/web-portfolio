"use client";

import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AboutAnimation from "@/components/animations/about";
import {
  ABOUT_TITLE_FILL_PATHS,
  ABOUT_TITLE_OUTLINE_PATHS,
} from "@/assets/svg/ aboutTitlePath";
export default function AboutTitle() {
  const clipId = useId();
  const shapeId = useId();
  const fillRectRef = useRef<SVGRectElement | null>(null);

  useLayoutEffect(() => {
    const fillRect = fillRectRef.current;
    if (!fillRect) return;

    const ctx = gsap.context(() => {
      AboutAnimation.aboutTitleFill(fillRect);
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      className="about-title__svg"
      viewBox="0 0 514 75"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* FILL SHAPE */}
        <g id={shapeId}>
          {ABOUT_TITLE_FILL_PATHS.map((d, i) => (
            <path key={i} d={d} fill="white" />
          ))}
        </g>

        {/* CLIP */}
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <use href={`#${shapeId}`} />
        </clipPath>
      </defs>

      {/* OUTLINE (fill로만) */}
      <g opacity={0.7}>
        {ABOUT_TITLE_OUTLINE_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgba(255,255,255,0.7)" />
        ))}
      </g>

      {/* FILL (rect + clip) */}
      <g clipPath={`url(#${clipId})`}>
        <rect
          ref={fillRectRef}
          x="0"
          y="75"
          width="514"
          height="75"
          fill="rgba(255,255,255,0.9)"
        />
      </g>
    </svg>
  );
}
