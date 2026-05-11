import gsap from "gsap";

type LifeMotionController = {
  readonly distance: number;
  refresh: () => void;
  setProgress: (progress: number) => void;
  playIntroPull: () => void;
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

    let pullTopOffset = 0;
    let pullBottomOffset = 0;

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

      setTopX(currentTopX + pullTopOffset);
      setBottomX(currentBottomX + pullBottomOffset);
    };

    const setProgress = (progress: number) => {
      const eased = Math.pow(progress, 2.3);

      targetTopX = -distance * eased;
      targetBottomX = -distance + distance * eased;
    };

    const playIntroPull = () => {
      const pullState = {
        top: 70,
        bottom: -70,
      };

      pullTopOffset = pullState.top;
      pullBottomOffset = pullState.bottom;

      gsap.to(pullState, {
        top: 0,
        bottom: 0,
        duration: 0.75,
        ease: "power3.out",
        onUpdate: () => {
          pullTopOffset = pullState.top;
          pullBottomOffset = pullState.bottom;
        },
      });
    };

    const tick = () => {
      currentTopX += (targetTopX - currentTopX) * 0.12;
      currentBottomX += (targetBottomX - currentBottomX) * 0.12;

      setTopX(currentTopX + pullTopOffset);
      setBottomX(currentBottomX + pullBottomOffset);
    };

    refresh();
    gsap.ticker.add(tick);

    return {
      get distance() {
        return distance;
      },
      refresh,
      setProgress,
      playIntroPull,
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
