"use client";

import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AboutAnimation from "@/components/animations/about";
import { ABOUT_TITLE_PATH } from "@/assets/svg/ aboutTitlePath";
export default function AboutTitle() {
  const clipId = useId();
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
      viewBox="0 0 521 81"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          {/* 핵심: 구멍(카운터) 제대로 빼려면 evenodd */}
          <path d={ABOUT_TITLE_PATH} fillRule="evenodd" clipRule="evenodd" />
        </clipPath>
      </defs>

      {/* OUTLINE */}
      <path
        d={ABOUT_TITLE_PATH}
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* FILL */}
      <g clipPath={`url(#${clipId})`}>
        <rect
          ref={fillRectRef}
          x="0"
          y="81"
          width="521"
          height="81"
          fill="rgba(255,255,255,0.9)"
        />
      </g>
    </svg>
  );
}
