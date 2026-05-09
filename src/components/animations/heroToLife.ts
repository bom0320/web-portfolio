import gsap from "gsap";

const HeroToLifeAnimation = {
  create() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "70% top",
        end: "bottom top",
        scrub: 0.9,
        invalidateOnRefresh: true,
      },
    });

    // 1. 캐릭터 (시선 아래 + 힘 빠짐)
    tl.to(".js-hero-character", {
      y: 28,
      rotate: 6,
      scale: 0.95,
      opacity: 0.45,
      ease: "none",
    });

    // 2. 텍스트 cascade exit
    tl.to(
      ".js-hero-exit-item",
      {
        y: -70,
        opacity: 0,
        stagger: {
          each: 0.12,
          from: "end", // 아래 → 위 순서
        },
        ease: "none",
      },
      "<"
    );

    // 3. LifeMotion viewport 진입 (충돌 방지용 wrapper만)
    tl.fromTo(
      ".js-life-motion-enter",
      {
        y: 90,
        x: -40,
        rotate: -2,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "<0.15"
    );

    return tl;
  },
};

export default HeroToLifeAnimation;
