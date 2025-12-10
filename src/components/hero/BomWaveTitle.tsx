"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function BomWaveTitle() {
  const waveRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const el = waveRef.current;
    if (!el) return;

    // 파도 그룹 좌우로 흐르게
    gsap.to(el, {
      x: -260,
      repeat: -1,
      duration: 6,
      ease: "linear",
      modifiers: {
        x: (x) => `${Number(x) % 260}`,
      },
    });
  }, []);

  return (
    <svg
      className="hero-title__svg js-hero-bom"
      viewBox="0 0 500 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="bom-text-clip">
          <text
            x="0" // ⬅ 왼쪽 0에서 시작
            y="110" // ⬅ 세로 위치
            textAnchor="start"
            fontFamily="'Poppins', system-ui, sans-serif"
            fontWeight="800"
            fontSize="110"
          >
            BOM&apos;s
          </text>
        </clipPath>
      </defs>

      {/* 아웃라인 텍스트도 똑같이 */}
      <text
        x="0"
        y="110"
        textAnchor="start"
        fontFamily="'Poppins', system-ui, sans-serif"
        fontWeight="800"
        fontSize="110"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
      >
        BOM&apos;s
      </text>

      {/* 글자 안: 물 + 파도 */}
      <g clipPath="url(#bom-text-clip)">
        {/* 어두운 바탕 */}
        <rect x="0" y="0" width="500" height="160" fill="#020617" />

        {/* 물 (절반 정도 채우기) */}
        <rect
          x="0"
          y="60"
          width="500"
          height="160"
          fill="#a4a4a4"
          fillOpacity="0.8"
        />

        {/* 파도 라인 */}
        <g ref={waveRef}>
          <path
            d="
              M -250 60
              Q -200 40 -150 60
              T -50 60
              T 50 60
              T 150 60
              T 250 60
              T 350 60
              T 450 60
              T 550 60
              T 650 60
              V 160
              H -250
              Z
            "
            fill="#d8d8d8"
          />
        </g>
      </g>
    </svg>
  );
}
