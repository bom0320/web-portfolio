import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { HeroToLifeAnimationElements } from "@/components/scenes/intro/dom";

const clampValue = (min: number, value: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const isViewport = (query: string) => {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
};

const isMobileLifeMotion = () => {
  return isViewport("(max-width: 640px)");
};

const getLifeCanvasInitialState = () => {
  const viewportHeight =
    typeof window === "undefined" ? 900 : window.innerHeight;

  if (isViewport("(max-width: 430px)")) {
    return {
      y: clampValue(170, viewportHeight * 0.24, 220),
      scale: 0.94,
      opacity: 0.78,
      filter: "none",
    };
  }

  if (isViewport("(max-width: 640px)")) {
    return {
      y: clampValue(180, viewportHeight * 0.25, 240),
      scale: 0.94,
      opacity: 0.8,
      filter: "none",
    };
  }

  if (isViewport("(max-width: 1024px)")) {
    return {
      y: clampValue(320, viewportHeight * 0.38, 420),
      scale: 0.84,
      opacity: 0.66,
      filter: "brightness(0.72)",
    };
  }

  if (isViewport("(max-width: 1180px)")) {
    return {
      y: clampValue(440, viewportHeight * 0.5, 600),
      scale: 0.76,
      opacity: 0.58,
      filter: "brightness(0.62)",
    };
  }

  return {
    y: clampValue(480, viewportHeight * 0.56, 620),
    scale: 0.74,
    opacity: 0.58,
    filter: "brightness(0.62)",
  };
};

const getLifeCanvasPinnedState = () => {
  const viewportHeight =
    typeof window === "undefined" ? 900 : window.innerHeight;

  if (isViewport("(max-width: 430px)")) {
    return {
      y: clampValue(82, viewportHeight * 0.11, 128),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 640px)")) {
    return {
      y: clampValue(68, viewportHeight * 0.1, 112),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 1024px)")) {
    return {
      y: clampValue(150, viewportHeight * 0.16, 220),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 1180px)")) {
    return {
      y: clampValue(180, viewportHeight * 0.18, 240),
      scale: 1,
    };
  }

  return {
    y: clampValue(210, viewportHeight * 0.2, 270),
    scale: 1,
  };
};

const HeroToLifeAnimation = {
  create(elements: HeroToLifeAnimationElements): AnimationController {
    const { heroItems, lifeRoot, lifeCanvas, lifeTrack, topRow, bottomRow } =
      elements;

    if (!lifeRoot || !lifeCanvas || !lifeTrack) {
      return createNoopController();
    }

    const isMobile = isMobileLifeMotion();
    const lifeCanvasInitialState = getLifeCanvasInitialState();

    gsap.set(lifeCanvas, {
      ...lifeCanvasInitialState,
      transformOrigin: "center center",
      force3D: true,
      backfaceVisibility: "hidden",
    });

    gsap.set([lifeTrack, topRow, bottomRow].filter(Boolean), {
      force3D: true,
      backfaceVisibility: "hidden",
    });

    gsap.set(lifeRoot, {
      autoAlpha: 1,
    });

    gsap.set(lifeTrack, {
      "--life-edge-start": 0,
      "--life-edge-soft": 0.45,
      "--life-edge-strong": 0.9,
    });

    if (topRow) {
      gsap.set(topRow, {
        xPercent: isMobile ? -1 : -3,
      });
    }

    if (bottomRow) {
      gsap.set(bottomRow, {
        xPercent: isMobile ? -6 : -12,
      });
    }

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
      },
    });

    timeline.to(
      heroItems,
      {
        y: isMobile ? -56 : -90,
        autoAlpha: 0,
        stagger: {
          each: isMobile ? 0.02 : 0.035,
          from: "end",
        },
      },
      0
    );

    timeline.to(
      lifeCanvas,
      {
        ...getLifeCanvasPinnedState(),
        opacity: 1,
        filter: isMobile ? "none" : "brightness(1)",
      },
      0
    );

    timeline.to(
      lifeTrack,
      {
        "--life-edge-start": 1,
        "--life-edge-soft": 1,
        "--life-edge-strong": 1,
      },
      0
    );

    if (topRow) {
      timeline.to(
        topRow,
        {
          xPercent: 0,
        },
        0
      );
    }

    if (bottomRow) {
      timeline.to(
        bottomRow,
        {
          xPercent: isMobile ? -8 : -15,
        },
        0
      );
    }

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(heroItems, {
        clearProps: "transform,opacity,visibility",
      });

      gsap.set(
        [lifeRoot, lifeCanvas, lifeTrack, topRow, bottomRow].filter(Boolean),
        {
          clearProps:
            "transform,opacity,visibility,filter,backfaceVisibility,--life-edge-start,--life-edge-soft,--life-edge-strong",
        }
      );
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default HeroToLifeAnimation;
