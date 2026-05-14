"use client";

import React from "react";
import { SKILL_TITLE_FILL_PATHS } from "@/assets/svg/skillTitlePath";

type SkillTitleProps = {
  fillGroupRef: React.RefObject<SVGGElement | null>;
};

export default function SkillTitle({ fillGroupRef }: SkillTitleProps) {
  return (
    <svg
      className="skills-title__svg"
      width="507"
      height="75"
      viewBox="0 0 507 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MY SKILLS"
    >
      {/* OUTLINE */}
      <g opacity={0.45}>
        {SKILL_TITLE_FILL_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* FILL */}
      <g ref={fillGroupRef} opacity={0}>
        {SKILL_TITLE_FILL_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgb(255, 255, 255)" />
        ))}
      </g>
    </svg>
  );
}
