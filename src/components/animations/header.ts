"use client";

import gsap from "gsap";

const HeaderAnimation = {
  layout: {
    header() {
      const sections = gsap.utils.toArray<HTMLElement>(".marquee .content");

      sections.forEach((el) => {
        gsap.to(el, {
          xPercent: -100,
          repeat: -1,
          duration: 70,
          ease: "linear",
          modifiers: {
            xPercent: gsap.utils.wrap(-100, 0),
          },
        });
      });
    },
  },
};

export default HeaderAnimation;
