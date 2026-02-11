"use client";

import { useId } from "react";
import {
  ABOUT_TITLE_FILL_PATHS,
  ABOUT_TITLE_OUTLINE_PATHS,
} from "@/assets/svg/ aboutTitlePath";

type AboutTitleProps = {
  fillRectRef: React.RefObject<SVGRectElement | null>;
};

export default function AboutTitle({ fillRectRef }: AboutTitleProps) {
  const clipId = useId();
  const shapeId = useId();

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
