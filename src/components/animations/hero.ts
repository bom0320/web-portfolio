"use client";

import gsap from "gsap";

const HeroAnimation = {
  play() {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title__fill",
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power2.out" },
      0
    );

    // 2) PORTFOLIO 텍스트
    tl.from(
      ".js-hero-title",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6" // BOM's 채워지는 도중에 같이 올라오게
    );

    // 3) 설명문
    tl.from(
      ".js-hero-desc",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // 4) 캐릭터 이미지
    tl.from(
      ".js-hero-character",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );
  },
};

export default HeroAnimation;
