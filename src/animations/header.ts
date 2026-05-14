import gsap from "gsap";

const HeaderAnimation = {
  marqueeLoop() {
    const sections = gsap.utils.toArray<HTMLElement>(".marquee .content");
    const tweens = sections.map((section) =>
      gsap.to(section, {
        xPercent: -100,
        repeat: -1,
        duration: 70,
        ease: "linear",
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      })
    );
    return tweens;
  },
};

export default HeaderAnimation;
