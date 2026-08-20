import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import type { BuildIntroProofAnimationElements } from "@/components/scenes/build/dom";

const BuildIntroProofAnimation = {
  create(elements: BuildIntroProofAnimationElements): AnimationController {
    const { character, pupils, lids, leftPoints, rightPoints, quote } =
      elements;

    if (
      !character ||
      !pupils.length ||
      !lids.length ||
      !leftPoints.length ||
      !rightPoints.length ||
      !quote
    ) {
      console.warn("[BuildIntroProofAnimation] Missing elements", elements);

      return createNoopController();
    }

    const animatedElements = [
      character,
      ...Array.from(pupils),
      ...Array.from(lids),
      ...Array.from(leftPoints),
      ...Array.from(rightPoints),
      quote,
    ];

    /* initial state */

    gsap.set(character, {
      autoAlpha: 0,
      y: 40,
      scale: 0.92,
      rotation: 0,
      transformOrigin: "center center",
    });

    gsap.set(pupils, {
      xPercent: 0,
    });

    gsap.set(lids, {
      yPercent: -105,
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

    /* scroll intro */

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

    /* character acting */

    const characterTimeline = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 1.5,
    });

    characterTimeline
      /* 정면 */
      .to({}, { duration: 0.7 })

      /* 깜빡이며 왼쪽 보기 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        pupils,
        {
          xPercent: -24,
          duration: 0.14,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      })

      /* 왼쪽 응시 */
      .to({}, { duration: 0.7 })

      /* 깜빡이며 오른쪽 보기 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        pupils,
        {
          xPercent: 24,
          duration: 0.16,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      })

      /* 오른쪽 응시 */
      .to({}, { duration: 0.7 })

      /* 깜빡이며 다시 정면 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        pupils,
        {
          xPercent: 0,
          duration: 0.14,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      })

      .to({}, { duration: 0.4 })

      /* 깜빡이며 왼쪽 갸웃 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        character,
        {
          rotation: -4,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      })

      .to({}, { duration: 0.55 })

      /* 깜빡이며 오른쪽 갸웃 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        character,
        {
          rotation: 4,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      })

      .to({}, { duration: 0.55 })

      /* 마지막 깜빡임 + 정면 */
      .to(lids, {
        yPercent: 0,
        duration: 0.09,
        ease: "power2.in",
      })
      .to(
        character,
        {
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      });

    let isCharacterAnimationPlaying = false;

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      timeline.progress(nextProgress);

      if (nextProgress > 0.15 && !isCharacterAnimationPlaying) {
        characterTimeline.play();
        isCharacterAnimationPlaying = true;
      }

      if (nextProgress <= 0.15 && isCharacterAnimationPlaying) {
        characterTimeline.pause(0);

        gsap.set(character, {
          rotation: 0,
        });

        gsap.set(pupils, {
          xPercent: 0,
        });

        gsap.set(lids, {
          yPercent: -105,
        });

        isCharacterAnimationPlaying = false;
      }
    };

    const destroy = () => {
      timeline.kill();
      characterTimeline.kill();

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

export default BuildIntroProofAnimation;
