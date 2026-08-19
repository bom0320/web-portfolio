import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { AboutHeroAnimationElements } from "@/components/scenes/about/dom";

import AboutCharacterAnimation from "./aboutCharacter.animation";

const AboutHeroAnimation = {
  create(elements: AboutHeroAnimationElements): AnimationController {
    const {
      root,
      eyebrow,
      heading,
      meta,
      desc,
      visual,
      cta,
      character,
      characterPupils,
      characterLids,
      characterMouth,
    } = elements;

    if (!root || !heading || !desc) {
      return createNoopController();
    }

    const targets = [eyebrow, heading, meta, desc, visual, cta].filter(
      (target): target is HTMLElement => Boolean(target)
    );

    gsap.set([eyebrow, heading, meta, desc, cta].filter(Boolean), {
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

    const characterAnimation = AboutCharacterAnimation.create({
      root: character,
      pupils: characterPupils,
      lids: characterLids,
      mouth: characterMouth,
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
        meta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.24
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
        0.32
      )
      .to(
        cta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.46
      );

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      timeline.progress(nextProgress);
      characterAnimation.setProgress(nextProgress);
    };

    const destroy = () => {
      timeline.kill();
      characterAnimation.destroy();

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
