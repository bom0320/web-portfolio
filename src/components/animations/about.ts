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
};

export default AboutAnimation;
