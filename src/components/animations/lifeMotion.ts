import gsap from "gsap";

type TrackParams = {
  viewport: HTMLDivElement;
  topWindow: HTMLDivElement;
  bottomWindow: HTMLDivElement;
  topTrack: HTMLDivElement;
  bottomTrack: HTMLDivElement;
};

type LifeMotionController = {
  refresh: () => void;
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const EASE_POWER = 2.3;
const LERP_SPEED = 0.12;

const LifeMotionAnimation = {
  track({
    viewport,
    topWindow,
    bottomWindow,
    topTrack,
    bottomTrack,
  }: TrackParams): LifeMotionController {
    const setTopWindowX = gsap.quickSetter(topWindow, "x", "px") as (
      value: number
    ) => void;

    const setBottomWindowX = gsap.quickSetter(bottomWindow, "x", "px") as (
      value: number
    ) => void;

    let viewportWidth = 0;

    let currentTopX = 0;
    let targetTopX = 0;

    let currentBottomX = 0;
    let targetBottomX = 0;

    const refresh = () => {
      viewportWidth = viewport.clientWidth;

      currentTopX = -viewportWidth;
      targetTopX = -viewportWidth;

      currentBottomX = viewportWidth;
      targetBottomX = viewportWidth;

      gsap.set([topTrack, bottomTrack], {
        x: 0,
      });

      setTopWindowX(currentTopX);
      setBottomWindowX(currentBottomX);
    };

    const setProgress = (progress: number) => {
      const easedProgress = Math.pow(progress, EASE_POWER);

      targetTopX = -viewportWidth + viewportWidth * easedProgress;
      targetBottomX = viewportWidth - viewportWidth * easedProgress;
    };

    const tick = () => {
      currentTopX += (targetTopX - currentTopX) * LERP_SPEED;
      currentBottomX += (targetBottomX - currentBottomX) * LERP_SPEED;

      setTopWindowX(currentTopX);
      setBottomWindowX(currentBottomX);
    };

    refresh();
    gsap.ticker.add(tick);

    return {
      refresh,
      setProgress,
      destroy() {
        gsap.ticker.remove(tick);

        setTopWindowX(0);
        setBottomWindowX(0);

        gsap.set([topTrack, bottomTrack], {
          x: 0,
        });
      },
    };
  },
};

export default LifeMotionAnimation;
