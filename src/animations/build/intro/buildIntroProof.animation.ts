import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import type { BuildIntroProofAnimationElements } from "@/components/scenes/build/dom";

const EYE_POSITION = {
  left: -26,
  front: 0,
  right: 22,
} as const;

const HEAD_ROTATION = {
  left: -4,
  front: 0,
  right: 4,
} as const;

const LID_POSITION = {
  open: -115,
  closed: 0,
} as const;

const BLINK_TIMING = {
  close: 0.2,
  hold: 0.12,
  open: 0.24,
} as const;

const CHARACTER_PROGRESS = {
  enter: 0.34,
  reset: 0.08,
} as const;

const BuildIntroProofAnimation = {
  create(elements: BuildIntroProofAnimationElements): AnimationController {
    const { character, pupils, lids, mouth, leftPoints, rightPoints, quote } =
      elements;

    if (
      !character ||
      pupils.length === 0 ||
      lids.length === 0 ||
      !mouth ||
      leftPoints.length === 0 ||
      rightPoints.length === 0 ||
      !quote
    ) {
      console.warn("[BuildIntroProofAnimation] Missing elements", elements);

      return createNoopController();
    }

    const animatedElements = [
      character,
      ...Array.from(pupils),
      ...Array.from(lids),
      mouth,
      ...Array.from(leftPoints),
      ...Array.from(rightPoints),
      quote,
    ];

    let isCharacterActive = false;
    let hasPlayedCharacterSequence = false;

    /* initial state */

    gsap.set(character, {
      autoAlpha: 0,
      y: 40,
      scale: 0.92,
      rotation: HEAD_ROTATION.front,
      transformOrigin: "50% 60%",
    });

    gsap.set(pupils, {
      xPercent: EYE_POSITION.front,
      yPercent: 0,
    });

    gsap.set(lids, {
      yPercent: LID_POSITION.open,
      borderBottomLeftRadius: "38%",
      borderBottomRightRadius: "38%",
    });

    gsap.set(mouth, {
      width: 18,
      height: 0,
      borderRadius: 0,
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

    /*
     * Character acting
     *
     * 테스트 중에는 무한 반복.
     */

    const characterTimeline = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 1.2,
    });

    characterTimeline
      /* 정면 */
      .to({}, { duration: 0.6 })

      /* 왼쪽 보기 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        pupils,
        {
          xPercent: EYE_POSITION.left,
          duration: 0.18,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })

      .to({}, { duration: 0.8 })

      /* 오른쪽 보기 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        pupils,
        {
          xPercent: EYE_POSITION.right,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })

      .to({}, { duration: 0.8 })

      /* 정면 복귀 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        pupils,
        {
          xPercent: EYE_POSITION.front,
          duration: 0.18,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })

      /* 눈 뜨며 미소 */
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })
      .to(
        mouth,
        {
          width: 24,
          height: 8,
          borderRadius: "0 0 50% 50%",
          duration: 0.35,
          ease: "power3.inOut",
        },
        "<"
      )

      .to({}, { duration: 0.5 })

      /* 왼쪽 갸웃 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        character,
        {
          rotation: HEAD_ROTATION.left,
          duration: 0.32,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })

      .to({}, { duration: 0.6 })

      /* 오른쪽 갸웃 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        character,
        {
          rotation: HEAD_ROTATION.right,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })

      .to({}, { duration: 0.6 })

      /* 마지막 정면 */
      .to(lids, {
        yPercent: LID_POSITION.closed,
        borderBottomLeftRadius: "52%",
        borderBottomRightRadius: "52%",
        duration: BLINK_TIMING.close,
        ease: "power2.inOut",
      })
      .to(
        character,
        {
          rotation: HEAD_ROTATION.front,
          duration: 0.32,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        pupils,
        {
          xPercent: EYE_POSITION.front,
          duration: 0.18,
          ease: "power2.inOut",
        },
        "<"
      )
      .to({}, { duration: BLINK_TIMING.hold })
      .to(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
        duration: BLINK_TIMING.open,
        ease: "power2.inOut",
      })

      /* 반복 테스트용 표정 초기화 */
      .to(
        mouth,
        {
          width: 18,
          height: 0,
          borderRadius: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "+=0.5"
      );

    /* reset */

    const resetCharacter = () => {
      isCharacterActive = false;
      hasPlayedCharacterSequence = false;

      characterTimeline.pause(0);

      gsap.set(character, {
        rotation: HEAD_ROTATION.front,
      });

      gsap.set(pupils, {
        xPercent: EYE_POSITION.front,
        yPercent: 0,
      });

      gsap.set(lids, {
        yPercent: LID_POSITION.open,
        borderBottomLeftRadius: "38%",
        borderBottomRightRadius: "38%",
      });

      gsap.set(mouth, {
        width: 18,
        height: 0,
        borderRadius: 0,
      });
    };

    /* scroll progress */

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      timeline.progress(nextProgress);

      if (
        nextProgress >= CHARACTER_PROGRESS.enter &&
        !hasPlayedCharacterSequence
      ) {
        isCharacterActive = true;
        hasPlayedCharacterSequence = true;

        characterTimeline.restart();

        return;
      }

      if (hasPlayedCharacterSequence) {
        isCharacterActive = true;
      }

      if (
        nextProgress <= CHARACTER_PROGRESS.reset &&
        hasPlayedCharacterSequence
      ) {
        resetCharacter();
      }
    };

    const destroy = () => {
      isCharacterActive = false;
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
