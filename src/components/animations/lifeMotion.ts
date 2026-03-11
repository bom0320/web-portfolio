import gsap from "gsap";

type LifeMotionController = {
  readonly distance: number;
  refresh: () => void;
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const LifeMotionAnimation = {
  track(track: HTMLDivElement, viewport: HTMLDivElement): LifeMotionController {
    const setX = gsap.quickSetter(track, "x", "px") as (value: number) => void;

    let distance = 0;
    let currentX = 0;
    let targetX = 0;

    const refresh = () => {
      distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
    };

    const setProgress = (progress: number) => {
      targetX = -distance * progress;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      setX(currentX);
    };

    refresh();
    gsap.ticker.add(tick);

    return {
      get distance() {
        return distance;
      },
      refresh,
      setProgress,
      destroy() {
        gsap.ticker.remove(tick);
        setX(0);
      },
    };
  },
};

export default LifeMotionAnimation;
