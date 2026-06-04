import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import type { CapabilityIntroAnimationElements } from "@/components/scenes/capability/dom";

const TITLE_INITIAL_SCALE = 3.8;

const CapabilityIntroAnimation = {
  create(elements: CapabilityIntroAnimationElements): AnimationController {
    const {
      visualField,
      titleLayer,
      eyebrow,
      title,
      subtitle,
      phase01,
      phase02,
    } = elements;

    if (
      !visualField ||
      !titleLayer ||
      !eyebrow ||
      !title ||
      !subtitle ||
      !phase01 ||
      !phase02
    ) {
      console.warn("[CapabilityIntroAnimation] Missing elements", elements);

      return createNoopController();
    }

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
      },
    });

    // Initial
    gsap.set(visualField, {
      autoAlpha: 1,
      scale: 1,
      transformOrigin: "center center",
    });

    gsap.set(titleLayer, {
      autoAlpha: 1,
      y: 0,
    });

    gsap.set(title, {
      autoAlpha: 0,
      scale: TITLE_INITIAL_SCALE,
      y: 0,
      transformOrigin: "center center",
    });

    gsap.set(eyebrow, {
      autoAlpha: 0,
      y: 16,
    });

    gsap.set(subtitle, {
      autoAlpha: 0,
      y: 18,
    });

    gsap.set([phase01, phase02], {
      autoAlpha: 0,
      y: 28,
    });

    // Title reveal
    timeline.to(
      title,
      {
        autoAlpha: 1,
        duration: 0.12,
      },
      0.08
    );

    // Title scale
    timeline.to(
      title,
      {
        scale: 1,
        duration: 0.42,
        ease: "power2.out",
      },
      0.16
    );

    // Header reveal
    timeline
      .to(
        eyebrow,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.56
      )
      .to(
        subtitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.62
      );

    // Phase 01
    timeline.to(
      phase01,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.14,
        ease: "power2.out",
      },
      0.74
    );

    // Phase transition
    timeline
      .to(
        phase01,
        {
          autoAlpha: 0,
          y: -24,
          duration: 0.12,
          ease: "power2.inOut",
        },
        0.86
      )
      .to(
        phase02,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
        },
        0.9
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(
        [visualField, titleLayer, eyebrow, title, subtitle, phase01, phase02],
        {
          clearProps: "all",
        }
      );
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default CapabilityIntroAnimation;
