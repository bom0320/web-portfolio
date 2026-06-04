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

const getLifeCanvasInitialState = () => {
  const viewportHeight =
    typeof window === "undefined" ? 900 : window.innerHeight;

  if (isViewport("(max-width: 430px)")) {
    return {
      y: clampValue(210, viewportHeight * 0.3, 260),
      scale: 0.78,
      opacity: 0.54,
      filter: "brightness(0.62)",
    };
  }

  if (isViewport("(max-width: 640px)")) {
    return {
      y: clampValue(240, viewportHeight * 0.34, 320),
      scale: 0.78,
      opacity: 0.55,
      filter: "brightness(0.62)",
    };
  }

  if (isViewport("(max-width: 1024px)")) {
    return {
      y: clampValue(360, viewportHeight * 0.42, 520),
      scale: 0.78,
      opacity: 0.57,
      filter: "brightness(0.62)",
    };
  }

  if (isViewport("(max-width: 1180px)")) {
    return {
      y: clampValue(420, viewportHeight * 0.48, 580),
      scale: 0.76,
      opacity: 0.58,
      filter: "brightness(0.62)",
    };
  }

  return {
    y: clampValue(620, viewportHeight * 0.74, 820),
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
      y: clampValue(24, viewportHeight * 0.04, 44),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 640px)")) {
    return {
      y: clampValue(28, viewportHeight * 0.045, 56),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 1024px)")) {
    return {
      y: clampValue(120, viewportHeight * 0.1, 160),
      scale: 1,
    };
  }

  if (isViewport("(max-width: 1180px)")) {
    return {
      y: clampValue(72, viewportHeight * 0.07, 116),
      scale: 1,
    };
  }

  return {
    y: clampValue(36, viewportHeight * 0.04, 72),
    scale: 1,
  };
};

const HeroToLifeAnimation = {
  create(elements: HeroToLifeAnimationElements): AnimationController {
    const { heroItems, lifeCanvas, lifeTrack, topRow, bottomRow } = elements;

    if (!lifeCanvas || !lifeTrack) {
      return createNoopController();
    }

    gsap.set(lifeCanvas, {
      ...getLifeCanvasInitialState(),
      transformOrigin: "center center",
    });

    gsap.set(lifeTrack, {
      "--life-edge-start": 0,
      "--life-edge-soft": 0.45,
      "--life-edge-strong": 0.9,
    });

    if (topRow) {
      gsap.set(topRow, {
        xPercent: -3,
      });
    }

    if (bottomRow) {
      gsap.set(bottomRow, {
        xPercent: -12,
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
        y: -90,
        autoAlpha: 0,
        stagger: {
          each: 0.035,
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
        filter: "brightness(1)",
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
          xPercent: -15,
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

      gsap.set([lifeCanvas, lifeTrack, topRow, bottomRow].filter(Boolean), {
        clearProps:
          "transform,opacity,visibility,filter,--life-edge-start,--life-edge-soft,--life-edge-strong",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default HeroToLifeAnimation;
