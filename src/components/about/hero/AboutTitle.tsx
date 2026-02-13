"use client";

import { ABOUT_TITLE_FILL_PATHS } from "@/assets/svg/aboutTitlePath";

type AboutTitleProps = {
  fillGroupRef: React.RefObject<SVGGElement | null>;
};

export default function AboutTitle({ fillGroupRef }: AboutTitleProps) {
  return (
    <svg
      className="about-title__svg"
      viewBox="0 0 502 75"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* OUTLINE */}
      <g opacity={0.45}>
        {ABOUT_TITLE_FILL_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth={2}
          />
        ))}
      </g>

      {/* FILL*/}
      <g ref={fillGroupRef} opacity={0}>
        {ABOUT_TITLE_FILL_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgb(255, 255, 255)" />
        ))}
      </g>
    </svg>
  );
}
