"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutAnimation = {
  titleFill({
    root,
    maskRect,
    fillGroup,
  }: {
    root: Element;
    maskRect: SVGRectElement;
    fillGroup: SVGGElement;
  }) {
    gsap.set(fillGroup, { opacity: 0 });

    const st = {
      trigger: root,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    } as const;

    gsap.to(fillGroup, { opacity: 1, ease: "none", scrollTrigger: st });

    gsap.to(maskRect, {
      attr: { y: 0 },
      ease: "none",
      scrollTrigger: st,
    });
  },
};

export default AboutAnimation;
