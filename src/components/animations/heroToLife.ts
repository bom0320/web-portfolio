import gsap from "gsap";

const HeroToLifeAnimation = {
  create() {
    const lifeEnter = document.querySelector(".js-life-motion-enter");
    const topTrack = document.querySelector(".js-life-motion-top");
    const bottomTrack = document.querySelector(".js-life-motion-bottom");
    const viewport = document.querySelector(".js-life-motion-viewport");

    if (!lifeEnter || !topTrack || !bottomTrack || !viewport) return;

    const getDistance = () => {
      const topDistance =
        (topTrack as HTMLElement).scrollWidth -
        (viewport as HTMLElement).clientWidth;

      const bottomDistance =
        (bottomTrack as HTMLElement).scrollWidth -
        (viewport as HTMLElement).clientWidth;

      return Math.max(topDistance, bottomDistance, 0);
    };

    gsap.set(lifeEnter, {
      y: "100vh",
    });

    gsap.set(bottomTrack, {
      x: () => -getDistance(),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".js-hero-life",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // 1. LifeMotion 아래에서 등장
    tl.to(
      lifeEnter,
      {
        y: "0vh",
        ease: "power4.in",
        duration: 0.55,
      },
      0
    );

    // 2. Hero 약하게 밀려나기
    tl.to(
      ".js-hero-character",
      {
        y: 44,
        rotate: 5,
        scale: 0.94,
        opacity: 0.42,
        ease: "none",
        duration: 0.45,
      },
      0
    );

    tl.to(
      ".js-hero-exit-item",
      {
        y: -90,
        opacity: 0,
        stagger: {
          each: 0.08,
          from: "end",
        },
        ease: "none",
        duration: 0.35,
      },
      0.08
    );

    // 3. LifeMotion이 화면을 채운 뒤 가로 트랙 이동
    tl.to(
      topTrack,
      {
        x: () => -getDistance(),
        ease: "power2.in",
        duration: 0.45,
      },
      0.55
    );

    tl.to(
      bottomTrack,
      {
        x: 0,
        ease: "power2.in",
        duration: 0.45,
      },
      0.55
    );

    return tl;
  },
};

export default HeroToLifeAnimation;
