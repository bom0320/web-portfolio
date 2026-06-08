import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { CapabilityClosingAnimationElements } from "@/components/scenes/capability/dom";

const CapabilityClosingAnimation = {
  create(elements: CapabilityClosingAnimationElements): AnimationController {
    const { root, content, eyebrow, title, description, cta } = elements;

    if (!root) {
      return createNoopController();
    }

    const revealElements = [eyebrow, title, description, cta].filter(Boolean);

    gsap.set(content, {
      autoAlpha: 1,
    });

    gsap.set(revealElements, {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    gsap.set(cta, {
      scale: 0.96,
      transformOrigin: "center center",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      .to(eyebrow, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.12,
        ease: "none",
      })
      .to(
        title,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "none",
        },
        0.06
      )
      .to(
        description,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "none",
        },
        0.18
      )
      .to(
        cta,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.14,
          ease: "none",
        },
        0.34
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([content, ...revealElements].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default CapabilityClosingAnimation;
