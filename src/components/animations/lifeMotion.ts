import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createLifeMotionTween(track: HTMLDivElement) {
  const distance = track.scrollWidth / 2;
  const wrapX = gsap.utils.wrap(-distance, 0);
  const setX = gsap.quickSetter(track, "x", "px") as (v: number) => void;

  let currentX = 0;
  let targetX = 0;

  const setProgress = (p: number) => {
    targetX = -distance * p;
  };

  const tick = () => {
    currentX += (targetX - currentX) * 0.12; // smoothing
    setX(wrapX(currentX));
  };

  gsap.ticker.add(tick);

  return {
    distance,
    setProgress,
    destroy() {
      gsap.ticker.remove(tick);
    },
  };
}
