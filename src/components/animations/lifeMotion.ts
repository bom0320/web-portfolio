import gsap from "gsap";

type TrackParams = {
  topWindow: HTMLDivElement;
  bottomWindow: HTMLDivElement;
};

type LifeMotionController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const LERP_FACTOR = 0.02;

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeMotionAnimation = {
  track({ topWindow, bottomWindow }: TrackParams): LifeMotionController {
    const setTopX = gsap.quickSetter(topWindow, "xPercent") as (
      value: number
    ) => void;

    const setBottomX = gsap.quickSetter(bottomWindow, "xPercent") as (
      value: number
    ) => void;

    let currentProgress = 0;
    let targetProgress = 0;

    const tick = () => {
      currentProgress += (targetProgress - currentProgress) * LERP_FACTOR;

      setTopX(-100 + 100 * currentProgress);
      setBottomX(100 - 100 * currentProgress);
    };

    const setProgress = (progress: number) => {
      targetProgress = clampProgress(progress);
    };

    const destroy = () => {
      gsap.ticker.remove(tick);

      gsap.killTweensOf([topWindow, bottomWindow]);

      gsap.set([topWindow, bottomWindow], {
        xPercent: 0,
      });
    };

    gsap.ticker.add(tick);
    setProgress(0);

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeMotionAnimation;
