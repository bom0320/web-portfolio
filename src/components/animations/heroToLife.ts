import gsap from "gsap";

const HeroToLifeAnimation = {
  create() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "68% top",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    // 1. 캐릭터
    tl.to(".js-hero-character", {
      y: 30,
      rotate: 5,
      scale: 0.95,
      opacity: 0.45,
      ease: "none",
    });

    // 2. Hero 텍스트
    tl.to(
      ".js-hero-exit-item",
      {
        y: -70,
        opacity: 0,
        stagger: {
          each: 0.12,
          from: "end",
        },
        ease: "none",
      },
      "<"
    );

    // 3. LifeMotion (핵심 수정)
    tl.fromTo(
      ".js-life-motion-enter",
      {
        y: 140, // 🔥 더 아래에서 시작
      },
      {
        y: 0,
        ease: "none", // 🔥 linear 유지
      },
      "<0.08" // 🔥 거의 동시에 붙임
    );

    return tl;
  },
};

export default HeroToLifeAnimation;
