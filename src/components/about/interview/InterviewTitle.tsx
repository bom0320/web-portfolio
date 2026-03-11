"use client";

import { INTERVIEW_TITLE_PATHS } from "@/assets/svg/interviewTitlePath";

type InterviewTitleProps = {
  fillGroupRef: React.RefObject<SVGGElement | null>;
};

export default function InterviewTitle({ fillGroupRef }: InterviewTitleProps) {
  return (
    <svg
      className="about-interview__title-svg"
      viewBox="0 0 407 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="INTERVIEWS"
      role="img"
    >
      <g className="about-interview__title-outline" opacity={0.75}>
        {INTERVIEW_TITLE_PATHS.map((d, i) => (
          <path
            key={`outline-${i}`}
            d={d}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </g>

      <g ref={fillGroupRef} className="about-interview__title-fill" opacity={0}>
        {INTERVIEW_TITLE_PATHS.map((d, i) => (
          <path key={`fill-${i}`} d={d} fill="black" />
        ))}
      </g>
    </svg>
  );
}
