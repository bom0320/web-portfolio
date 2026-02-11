import gsap from "gsap";

const AboutAnimation = {
  aboutTitleFill(fillRect: SVGRectElement) {
    return gsap.to(fillRect, {
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      paused: true, // 트리거에서 재생하려면 paused가 편함
    });
  },
};

export default AboutAnimation;
