import gsap from "gsap";

const HeroAnimation = {
  intro(root: Element) {
    const q = gsap.utils.selector(root);
    const tl = gsap.timeline();

    tl.from(q(".js-hero-bom"), {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        q(".js-hero-title"),
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        q(".js-hero-desc"),
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        q(".js-hero-character"),
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
