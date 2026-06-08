import gsap from "gsap";

export const clampProgress = (progress: number) =>
  gsap.utils.clamp(0, 1, progress);
