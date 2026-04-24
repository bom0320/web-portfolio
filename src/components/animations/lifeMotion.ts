import gsap from "gsap";

type LifeMotionController = {
  readonly distance: number;
  refresh: () => void;
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const LifeMotionAnimation = {
  track(
    topTrack: HTMLDivElement,
    bottomTrack: HTMLDivElement,
    viewport: HTMLDivElement
  ): LifeMotionController {
    const setTopX = gsap.quickSetter(topTrack, "x", "px") as (
      value: number
    ) => void;

    const setBottomX = gsap.quickSetter(bottomTrack, "x", "px") as (
      value: number
    ) => void;

    let distance = 0;

    let currentTopX = 0;
    let targetTopX = 0;

    let currentBottomX = 0;
    let targetBottomX = 0;

    const refresh = () => {
      const topDistance = Math.max(
        0,
        topTrack.scrollWidth - viewport.clientWidth
      );
      const bottomDistance = Math.max(
        0,
        bottomTrack.scrollWidth - viewport.clientWidth
      );

      distance = Math.max(topDistance, bottomDistance);

      currentBottomX = -distance;
      targetBottomX = -distance;
      setBottomX(currentBottomX);
    };

    const setProgress = (progress: number) => {
      targetTopX = -distance * progress;
      targetBottomX = -distance + distance * progress;
    };

    const tick = () => {
      currentTopX += (targetTopX - currentTopX) * 0.12;
      currentBottomX += (targetBottomX - currentBottomX) * 0.12;

      setTopX(currentTopX);
      setBottomX(currentBottomX);
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
        setTopX(0);
        setBottomX(0);
      },
    };
  },
};

export default LifeMotionAnimation;
