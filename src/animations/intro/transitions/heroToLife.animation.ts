import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { HeroToLifeAnimationElements } from "@/components/scenes/intro/dom";

const HeroToLifeAnimation = {
  create(elements: HeroToLifeAnimationElements): AnimationController {
    const { heroItems, lifeStage, lifeTrack, topRow, bottomRow } = elements;

    if (!lifeStage || !lifeTrack) {
      return createNoopController();
    }

    gsap.set(lifeStage, {
      y: "54vh",
      scale: 0.74,
      opacity: 0.58,
      filter: "brightness(0.62)",
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

    // Hero exit
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

    // LifeMotion enter
    timeline.to(
      lifeStage,
      {
        y: "0vh",
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
      },
      0
    );

    // LifeMotion edge mask release
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
