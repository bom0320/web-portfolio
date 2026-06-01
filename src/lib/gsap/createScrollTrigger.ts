import ScrollTrigger from "gsap/ScrollTrigger";

import { GSAP_MARKERS } from "./constants";

export type ScrollTriggerVars = Parameters<typeof ScrollTrigger.create>[0];
export type ScrollTriggerInstance = ReturnType<typeof ScrollTrigger.create>;

export function createScrollTrigger(
  vars: ScrollTriggerVars
): ScrollTriggerInstance {
  return ScrollTrigger.create({
    invalidateOnRefresh: true,
    markers: GSAP_MARKERS,
    ...vars,
  });
}
