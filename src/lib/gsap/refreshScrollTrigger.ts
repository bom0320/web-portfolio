import ScrollTrigger from "gsap/ScrollTrigger";

export function refreshScrollTrigger() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
}
