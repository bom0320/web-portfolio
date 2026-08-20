import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import type { BuildIntroProofAnimationElements } from "@/components/scenes/build/dom";

const EYE_POSITION = {
  left: {
    x: -12,
    y: -10,
  },
  front: {
    x: 0,
    y: 0,
  },
  right: {
    x: 11,
    y: -10,
  },
} as const;

const CHARACTER_PROGRESS = {
  enter: 0.34,
  reset: 0.08,
} as const;

const BuildIntroProofAnimation = {
  create(elements: BuildIntroProofAnimationElements): AnimationController {
    const { character, pupils, mouth, leftPoints, rightPoints, quote } =
      elements;

    if (
      !character ||
      pupils.length === 0 ||
      !mouth ||
      leftPoints.length === 0 ||
      rightPoints.length === 0 ||
      !quote
    ) {
      console.warn("[BuildIntroProofAnimation] Missing elements", elements);

      return createNoopController();
    }

    const pupilElements = Array.from(pupils);
    const leftPointElements = Array.from(leftPoints);
    const rightPointElements = Array.from(rightPoints);

    const animatedElements = [
      character,
      ...pupilElements,
      mouth,
      ...leftPointElements,
      ...rightPointElements,
      quote,
    ];

    let hasPlayedCharacterSequence = false;

    /* initial */

    gsap.set(character, {
      autoAlpha: 0,
      y: 40,
      scale: 0.92,
    });

    gsap.set(pupilElements, {
      xPercent: EYE_POSITION.front.x,
      yPercent: EYE_POSITION.front.y,
    });

    gsap.set(mouth, {
      width: 18,
      height: 0,
      borderRadius: 0,
    });

    gsap.set(leftPointElements, {
      autoAlpha: 0,
      x: -72,
      y: 12,
    });

    gsap.set(rightPointElements, {
      autoAlpha: 0,
      x: 72,
      y: 12,
    });

    gsap.set(quote, {
      autoAlpha: 0,
      y: 36,
    });

    /* proof entrance */

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
        leftPointElements,
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
        rightPointElements,
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

      /* 테스트용 무한 반복 */
      repeat: -1,
      repeatDelay: 0.8,
    });

    characterTimeline
      /* 정면 */
      .to({}, { duration: 0.6 })

      /* 왼쪽 보기 */
      .to(pupilElements, {
        xPercent: EYE_POSITION.left.x,
        yPercent: EYE_POSITION.left.y,
        duration: 0.48,
        ease: "power3.inOut",
      })

      .to({}, { duration: 0.7 })

      /* 오른쪽 보기 */
      .to(pupilElements, {
        xPercent: EYE_POSITION.right.x,
        yPercent: EYE_POSITION.right.y,
        duration: 0.48,
        ease: "power3.inOut",
      })

      .to({}, { duration: 0.7 })

      /* 정면 복귀 */
      .to(pupilElements, {
        xPercent: EYE_POSITION.front.x,
        yPercent: EYE_POSITION.front.y,
        duration: 0.48,
        ease: "power3.inOut",
      })

      /* 미소 */
      .to(
        mouth,
        {
          width: 23,
          height: 8,
          borderRadius: "0 0 50% 50%",
          duration: 0.35,
          ease: "power3.inOut",
        },
        "-=0.18"
      )

      /* 웃는 상태 유지 */
      .to({}, { duration: 1 })

      /* 다음 반복 전에 입 원상복귀 */
      .to(mouth, {
        width: 18,
        height: 0,
        borderRadius: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });

    /* reset */

    const resetCharacter = () => {
      hasPlayedCharacterSequence = false;

      characterTimeline.pause(0);

      gsap.set(pupilElements, {
        xPercent: EYE_POSITION.front.x,
        yPercent: EYE_POSITION.front.y,
      });

      gsap.set(mouth, {
        width: 18,
        height: 0,
        borderRadius: 0,
      });
    };

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      timeline.progress(nextProgress);

      if (
        nextProgress >= CHARACTER_PROGRESS.enter &&
        !hasPlayedCharacterSequence
      ) {
        hasPlayedCharacterSequence = true;

        characterTimeline.restart();

        return;
      }

      if (
        nextProgress <= CHARACTER_PROGRESS.reset &&
        hasPlayedCharacterSequence
      ) {
        resetCharacter();
      }
    };

    const destroy = () => {
      hasPlayedCharacterSequence = false;

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
