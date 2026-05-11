import gsap from "gsap";

const HeroToLifeAnimation = {
  create() {
    gsap.set(".js-life-motion-enter", {
      y: "100vh",
    });

    gsap.set([".js-life-motion-top", ".js-life-motion-bottom"], {
      x: 0,
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

    tl.to(
      ".js-life-motion-enter",
      {
        y: "0vh",
        ease: "power4.inOut",
        duration: 1,
      },
      0
    );

    tl.to(
      ".js-hero-character",
      {
        y: 44,
        rotate: 5,
        scale: 0.94,
        opacity: 0.35,
        ease: "none",
        duration: 0.7,
      },
      0
    );

    tl.to(
      ".js-hero-exit-item",
      {
        y: -80,
        opacity: 0,
        stagger: {
          each: 0.08,
          from: "end",
        },
        ease: "none",
        duration: 0.6,
      },
      0.1
    );

    return tl;
  },
};

export default HeroToLifeAnimation;
