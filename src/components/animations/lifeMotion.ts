import gsap from "gsap";

type LifeMotionController = {
  refresh: () => void;
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const EASE_POWER = 2.3;
const LERP_SPEED = 0.12;

const getGroupWidth = (row: HTMLDivElement) => {
  const group = row.querySelector<HTMLElement>(".life-motion__group");
  return group?.offsetWidth ?? 0;
};

const LifeMotionAnimation = {
  track(
    topTrack: HTMLDivElement,
    bottomTrack: HTMLDivElement
  ): LifeMotionController {
    const setTopX = gsap.quickSetter(topTrack, "x", "px") as (
      value: number
    ) => void;

    const setBottomX = gsap.quickSetter(bottomTrack, "x", "px") as (
      value: number
    ) => void;

    let topDistance = 0;
    let bottomDistance = 0;

    let currentTopX = 0;
    let targetTopX = 0;

    let currentBottomX = 0;
    let targetBottomX = 0;

    const refresh = () => {
      topDistance = getGroupWidth(topTrack);
      bottomDistance = getGroupWidth(bottomTrack);

      currentTopX = 0;
      targetTopX = 0;

      currentBottomX = -bottomDistance;
      targetBottomX = -bottomDistance;

      setTopX(currentTopX);
      setBottomX(currentBottomX);
    };

    const setProgress = (progress: number) => {
      const easedProgress = Math.pow(progress, EASE_POWER);

      targetTopX = -topDistance * easedProgress;
      targetBottomX = -bottomDistance + bottomDistance * easedProgress;
    };

    const tick = () => {
      currentTopX += (targetTopX - currentTopX) * LERP_SPEED;
      currentBottomX += (targetBottomX - currentBottomX) * LERP_SPEED;

      setTopX(currentTopX);
      setBottomX(currentBottomX);
    };

    refresh();
    gsap.ticker.add(tick);

    return {
      refresh,
      setProgress,
      destroy() {
        gsap.ticker.remove(tick);
        gsap.killTweensOf([topTrack, bottomTrack]);
        setTopX(0);
        setBottomX(0);
      },
    };
  },
};

export default LifeMotionAnimation;
