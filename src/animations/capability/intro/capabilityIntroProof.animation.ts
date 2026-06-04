import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import { CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS as SELECTORS } from "./introAnimation.selectors";

const CapabilityIntroProofAnimation = {
  create(scope: HTMLElement | null): AnimationController {
    if (!scope) {
      console.warn("[CapabilityIntroProofAnimation] Missing scope");

      return createNoopController();
    }

    const character = scope.querySelector<HTMLElement>(SELECTORS.character);
    const leftPoints = scope.querySelectorAll<HTMLElement>(
      SELECTORS.leftPoints
    );
    const rightPoints = scope.querySelectorAll<HTMLElement>(
      SELECTORS.rightPoints
    );
    const quote = scope.querySelector<HTMLElement>(SELECTORS.quote);

    if (!character || !leftPoints.length || !rightPoints.length || !quote) {
      console.warn("[CapabilityIntroProofAnimation] Missing elements", {
        character,
        leftPoints,
        rightPoints,
        quote,
      });

      return createNoopController();
    }

    const animatedElements = [
      character,
      ...Array.from(leftPoints),
      ...Array.from(rightPoints),
      quote,
    ];

    // Initial
    gsap.set(character, {
      autoAlpha: 0,
      y: 40,
      scale: 0.92,
      transformOrigin: "center bottom",
    });

    gsap.set(leftPoints, {
      autoAlpha: 0,
      x: -72,
      y: 12,
    });

    gsap.set(rightPoints, {
      autoAlpha: 0,
      x: 72,
      y: 12,
    });

    gsap.set(quote, {
      autoAlpha: 0,
      y: 36,
    });

    // Timeline
    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(character, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
      })
      .to(
        leftPoints,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
        },
        "-=0.48"
      )
      .to(
        rightPoints,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
        },
        "-=0.68"
      )
      .to(
        quote,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
        },
        "-=0.24"
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(animatedElements, {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default CapabilityIntroProofAnimation;
