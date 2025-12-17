"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function BomWaveTitle() {
  const waveRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const el = waveRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      x: "-=260",
      repeat: -1,
      duration: 8,
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <svg
      className="hero-title__svg js-hero-bom"
      viewBox="0 0 500 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/*틀 텍스트*/}
        <clipPath id="bom-text-clip">
          <text
            x="0"
            y="110"
            textAnchor="start"
            fontFamily="'Poppins', system-ui, sans-serif"
            fontWeight="800"
            fontSize="110"
          >
            BOM&apos;s
          </text>
        </clipPath>
      </defs>

      {/* 아웃라인 텍스트 */}
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

      <g clipPath="url(#bom-text-clip)">
        <rect x="0" y="0" width="500" height="160" fill="#020617" />
        <rect
          x="0"
          y="60"
          width="500"
          height="160"
          fill="#a4a4a4"
          fillOpacity="0.8"
        />

        <g ref={waveRef}>
          <path
            d="
              M -250 60
              Q -200 30 -150 60
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
