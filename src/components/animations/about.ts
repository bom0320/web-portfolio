import gsap from "gsap";

const AboutAnimation = {
  createTitleFill(fillGroup: SVGGElement) {
    return gsap.fromTo(fillGroup, { opacity: 0 }, { opacity: 1, ease: "none" });
  },

  createDecorEnter(section: HTMLElement) {
    const decor = gsap.utils.toArray<HTMLElement>(".decor", section);

    gsap.set(".decor--sun", { x: -200, y: -120, rotate: -8 });
    gsap.set(".decor--stars", { x: 200, y: -120, rotate: 8 });
    gsap.set(".decor--stars2", { x: -180, y: 120, rotate: -6 });
    gsap.set(".decor--heart", { x: 180, y: 140, rotate: 6 });

    const tl = gsap.timeline();
    tl.to(
      decor,
      {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none", // scrub용
        stagger: 0.08,
      },
      0
    );

    return tl;
  },
};

export default AboutAnimation;
