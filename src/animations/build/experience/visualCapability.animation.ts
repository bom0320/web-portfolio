import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { VisualCapabilityAnimationElements } from "@/components/scenes/capability/dom";

const VisualCapabilityAnimation = {
  create(elements: VisualCapabilityAnimationElements): AnimationController {
    const { root, header } = elements;

    if (!root) {
      return createNoopController();
    }

    gsap.set(header, {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(header, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.22,
      ease: "none",
    });

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([header].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default VisualCapabilityAnimation;
