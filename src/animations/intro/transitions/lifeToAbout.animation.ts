import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { LifeToAboutAnimationElements } from "@/components/scenes/intro/dom";

const LifeToAboutAnimation = {
  create(elements: LifeToAboutAnimationElements): AnimationController {
    const { aboutScenes } = elements;

    if (!aboutScenes) {
      return createNoopController();
    }

    gsap.set(aboutScenes, {
      y: "100vh",
      scale: 1,
      borderRadius: "0px",
      autoAlpha: 1,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(
      aboutScenes,
      {
        y: "0vh",
        scale: 1,
        borderRadius: "0px",
        autoAlpha: 1,
        ease: "none",
      },
      0
    );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(aboutScenes, {
        clearProps: "transform,borderRadius,opacity,visibility",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeToAboutAnimation;
