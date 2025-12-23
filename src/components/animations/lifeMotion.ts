import gsap from "gsap";

export function createLifeMotionTween(el: HTMLElement) {
  return gsap.to(el, {
    xPercent: -100,
    repeat: -1,
    duration: 70,
    ease: "linear",
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
}
