"use client";

import gsap from "gsap";

const AboutAnimation = {
  aboutTitleFill(fillRect: SVGRectElement) {
    return gsap.to(fillRect, {
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  },
};

export default AboutAnimation;
