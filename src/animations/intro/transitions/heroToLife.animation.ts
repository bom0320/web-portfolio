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

const getLifeStageInitialState = () => {
  const viewportHeight =
    typeof window === "undefined" ? 900 : window.innerHeight;

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 430px)").matches
  ) {
    return {
      y: clampValue(220, viewportHeight * 0.27, 240),
      scale: 0.78,
      opacity: 0.54,
      filter: "brightness(0.62)",
    };
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches
  ) {
    return {
      y: clampValue(220, viewportHeight * 0.34, 300),
      scale: 0.76,
      opacity: 0.55,
      filter: "brightness(0.62)",
    };
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 900px)").matches
  ) {
    return {
      y: clampValue(300, viewportHeight * 0.42, 400),
      scale: 0.7,
      opacity: 0.56,
      filter: "brightness(0.62)",
    };
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1180px)").matches
  ) {
    return {
      y: clampValue(390, viewportHeight * 0.5, 520),
      scale: 0.72,
      opacity: 0.57,
      filter: "brightness(0.62)",
    };
  }

  return {
    y: clampValue(470, viewportHeight * 0.58, 620),
    scale: 0.74,
    opacity: 0.58,
    filter: "brightness(0.62)",
  };
};

const HeroToLifeAnimation = {
  create(elements: HeroToLifeAnimationElements): AnimationController {
    const { heroItems, lifeStage, lifeTrack, topRow, bottomRow } = elements;

    if (!lifeStage || !lifeTrack) {
      return createNoopController();
    }

    gsap.set(lifeStage, {
      ...getLifeStageInitialState(),
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
      lifeStage,
      {
        y: 0,
        scale: 1,
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

      gsap.set([lifeStage, lifeTrack, topRow, bottomRow].filter(Boolean), {
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
