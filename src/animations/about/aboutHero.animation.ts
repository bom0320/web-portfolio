import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { AboutHeroAnimationElements } from "@/components/scenes/about/dom";

const AboutHeroAnimation = {
  create(elements: AboutHeroAnimationElements): AnimationController {
    const { root, eyebrow, heading, desc, visual, cta } = elements;

    if (!root || !heading || !desc) {
      return createNoopController();
    }

    const targets = [eyebrow, heading, desc, visual, cta].filter(
      (target): target is HTMLElement => Boolean(target)
    );

    gsap.set([eyebrow, heading, desc, cta].filter(Boolean), {
      y: 32,
      autoAlpha: 0,
    });

    gsap.set(visual, {
      y: 36,
      scale: 0.96,
      autoAlpha: 0,
    });

    gsap.set(desc, {
      x: -16,
    });

    const timeline = gsap.timeline({ paused: true });

    timeline
      .to(
        visual,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .to(
        eyebrow,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.08
      )
      .to(
        heading,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.16
      )
      .to(
        desc,
        {
          y: 0,
          x: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.28
      )
      .to(
        cta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.42
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(targets, {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutHeroAnimation;
