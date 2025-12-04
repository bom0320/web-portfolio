"use client";

import gsap from "gsap";

const HeroAnimation = {
  play() {
    const tl = gsap.timeline();

    // PORTFOLIO 글자
    tl.from(".js-hero-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // 2026 글자
    tl.from(
      ".js-hero-year",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7" // 앞이랑 약간 겹쳐서 나오게
    );

    // 설명문
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

    // 캐릭터 이미지
    tl.from(
      ".js-hero-character",
      {
        y: 40,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
      },
      "-=0.6"
    );
  },
};

export default HeroAnimation;
