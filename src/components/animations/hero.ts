import gsap from "gsap";

const HeroAnimation = {
  play() {
    const tl = gsap.timeline();

    tl.from(".js-hero-bom", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // 2) PORTFOLIO
    tl.from(
      ".js-hero-title",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6" // BOM's랑 살짝 겹치게
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

    // 4) 캐릭터
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
