import gsap from "gsap";

interface CreateContactFooterAnimationParams {
  footer: HTMLElement;
}

export function createContactFooterAnimation({
  footer,
}: CreateContactFooterAnimationParams) {
  gsap.set(footer, {
    y: 110,
    willChange: "transform",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  timeline.to(footer, {
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  return timeline;
}
