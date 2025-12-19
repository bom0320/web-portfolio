import gsap from "gsap";

const HeroAnimation = {
  intro() {
    const tl = gsap.timeline();

    tl.from(".js-hero-bom", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        ".js-hero-title",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".js-hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".js-hero-character",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

    return tl;
  },

  bomWave(target: SVGGElement) {
    return gsap.to(target, {
      x: "-=260",
      repeat: -1,
      duration: 8,
      ease: "none",
    });
  },
};

export default HeroAnimation;
