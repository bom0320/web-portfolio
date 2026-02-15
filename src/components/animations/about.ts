import gsap from "gsap";

const AboutAnimation = {
  aboutTitleFill(fillGroup: SVGGElement) {
    // 시작 상태 확실히
    gsap.set(fillGroup, { opacity: 0 });

    return gsap.to(fillGroup, {
      opacity: 1,
      duration: 5,
      ease: "power3.out",
      paused: true,
    });
  },
  aboutDecorEnter() {
    const decor = gsap.utils.toArray<HTMLElement>(".about-hero .decor");
    const tl = gsap.timeline({ paused: true });

    // 시작 위치(살짝 흐트러진 상태)
    gsap.set(".decor--sun", { x: -80, y: -30, rotate: -6, scale: 0.98 });
    gsap.set(".decor--stars", { x: 90, y: -35, rotate: 5, scale: 0.98 });
    gsap.set(".decor--heart", { x: 80, y: 45, rotate: 4, scale: 0.98 });
    gsap.set(".decor--stars2", { x: -70, y: 60, rotate: -5 });

    tl.to(decor, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.9,
      ease: "expo.out",
      stagger: 0.08,
    });

    return tl;
  },
};

export default AboutAnimation;
