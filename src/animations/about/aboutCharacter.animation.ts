import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

type AboutCharacterAnimationElements = {
  root: HTMLElement | null;
  pupils: HTMLElement[];
  lids: HTMLElement[];
  mouth: HTMLElement | null;
};

const EYE_POSITION = {
  laptop: {
    x: -5,
    y: 12,
  },
  up: {
    x: 0,
    y: -10,
  },
  front: {
    x: 4,
    y: 0,
  },
} as const;

const AboutCharacterAnimation = {
  create(elements: AboutCharacterAnimationElements): AnimationController {
    const { root, pupils, lids, mouth } = elements;

    if (!root || pupils.length === 0 || lids.length === 0 || !mouth) {
      return createNoopController();
    }

    let isActive = false;
    let hasPlayedIntro = false;

    let blinkDelay: gsap.core.Tween | null = null;
    let blinkTimeline: gsap.core.Timeline | null = null;

    // 초기 상태: 노트북을 내려다봄
    gsap.set(pupils, {
      xPercent: EYE_POSITION.laptop.x,
      yPercent: EYE_POSITION.laptop.y,
    });

    gsap.set(lids, {
      yPercent: -105,
    });

    gsap.set(mouth, {
      width: 18,
      height: 0,
      borderRadius: 0,
    });

    const scheduleIdleBlink = () => {
      if (!isActive) return;

      blinkDelay?.kill();

      blinkDelay = gsap.delayedCall(gsap.utils.random(2.5, 5), () => {
        if (!isActive) return;

        blinkTimeline?.kill();

        blinkTimeline = gsap
          .timeline({
            onComplete: scheduleIdleBlink,
          })
          .to(lids, {
            yPercent: 0,
            duration: 0.09,
            ease: "power2.in",
          })
          .to(lids, {
            yPercent: -105,
            duration: 0.13,
            ease: "power2.out",
          });
      });
    };

    const introTimeline = gsap
      .timeline({
        paused: true,
        onComplete: () => {
          if (!isActive) return;

          scheduleIdleBlink();
        },
      })

      // 1. 노트북을 잠시 내려다봄
      .to({}, { duration: 0.6 })

      // 2. 위쪽을 바라봄
      .to(pupils, {
        xPercent: EYE_POSITION.up.x,
        yPercent: EYE_POSITION.up.y,
        duration: 0.45,
        ease: "power2.inOut",
      })

      // 위를 잠시 바라봄
      .to({}, { duration: 0.3 })

      // 3. 정면을 바라봄
      .to(pupils, {
        xPercent: EYE_POSITION.front.x,
        yPercent: EYE_POSITION.front.y,
        duration: 0.45,
        ease: "power3.out",
      })

      // 정면에서 잠깐 멈춤
      .to({}, { duration: 0.2 })

      // 4. 미소
      .to(mouth, {
        width: 23,
        height: 8,
        borderRadius: "0 0 50% 50%",
        duration: 0.3,
        ease: "power2.out",
      })

      // 5. 첫 눈 깜빡임
      .to(
        lids,
        {
          yPercent: 0,
          duration: 0.09,
          ease: "power2.in",
        },
        "+=0.25"
      )
      .to(lids, {
        yPercent: -105,
        duration: 0.13,
        ease: "power2.out",
      });

    const reset = () => {
      isActive = false;
      hasPlayedIntro = false;

      introTimeline.pause(0);

      blinkDelay?.kill();
      blinkTimeline?.kill();

      blinkDelay = null;
      blinkTimeline = null;

      gsap.set(pupils, {
        xPercent: EYE_POSITION.laptop.x,
        yPercent: EYE_POSITION.laptop.y,
      });

      gsap.set(lids, {
        yPercent: -105,
      });

      gsap.set(mouth, {
        width: 18,
        height: 0,
        borderRadius: 0,
      });
    };

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      if (nextProgress >= 0.99) {
        isActive = true;

        if (!hasPlayedIntro) {
          hasPlayedIntro = true;
          introTimeline.restart();
        }

        return;
      }

      // 이미 실행된 상태에서 Hero를 벗어났을 때만 초기화
      if (isActive || hasPlayedIntro) {
        reset();
      }
    };

    const destroy = () => {
      isActive = false;

      introTimeline.kill();

      blinkDelay?.kill();
      blinkTimeline?.kill();

      gsap.set([...pupils, ...lids, mouth], {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutCharacterAnimation;
