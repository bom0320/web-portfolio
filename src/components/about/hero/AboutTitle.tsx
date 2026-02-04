"use client";

import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AboutAnimation from "@/components/animations/about";

export default function AboutTitle({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const clipId = useId();

  // 채움 레이어(clip 안에서 움직일 흰색 rect)
  const fillRectRef = useRef<SVGRectElement | null>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    const fillRect = fillRectRef.current;
    if (!root || !fillRect) return;

    const ctx = gsap.context(() => {
      AboutAnimation.aboutTitleFill({ root, fillRect });
    }, root);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <svg
      className="about-title__svg"
      viewBox="0 0 900 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* 글자 모양으로 clip */}
        <clipPath id={clipId}>
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            fontSize="120"
            letterSpacing="-2"
          >
            ABOUT ME
          </text>
        </clipPath>
      </defs>

      {/* OUTLINE */}
      <text
        x="50%"
        y="62%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="120"
        letterSpacing="-2"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="3"
        strokeLinejoin="round"
      >
        ABOUT ME
      </text>

      {/* FILL (clipPath 내부에서만 보임) */}
      <g clipPath={`url(#${clipId})`}>
        {/* 이 rect가 아래에서 위로 올라오면 "채워지는" 느낌 */}
        <rect
          ref={fillRectRef}
          x="0"
          y="220"
          width="900"
          height="220"
          fill="rgba(255,255,255,0.9)"
        />
      </g>
    </svg>
  );
}
