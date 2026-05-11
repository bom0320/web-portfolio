import gsap from "gsap";

const HeroToLifeAnimation = {
  create() {
    gsap.set(".js-life-motion-enter", {
      y: "100vh",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".js-hero-life",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(
        ".js-life-motion-enter",
        {
          y: "0vh",
          ease: "power4.inOut",
        },
        0
      )
      .to(
        ".js-hero-character",
        {
          y: 44,
          rotate: 5,
          scale: 0.94,
          opacity: 0.35,
          ease: "none",
        },
        0
      )
      .to(
        ".js-hero-exit-item",
        {
          y: -80,
          opacity: 0,
          stagger: {
            each: 0.08,
            from: "end",
          },
          ease: "none",
        },
        0.1
      );

    return timeline;
  },
};

export default HeroToLifeAnimation;
