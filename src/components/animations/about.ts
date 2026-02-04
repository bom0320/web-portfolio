"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutAnimation = {
  aboutTitleFill({
    root,
    fillRect,
  }: {
    root: Element;
    fillRect: SVGRectElement;
  }) {
    gsap.fromTo(
      fillRect,
      { attr: { y: 220 }, opacity: 0 },
      {
        attr: { y: 0 },
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "top 45%",
          scrub: true,
        },
      }
    );
  },
};

export default AboutAnimation;
