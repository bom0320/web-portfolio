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

const LID_POSITION = {
  open: -105,
  closed: 0,
} as const;

const BLINK_TIMING = {
  close: 0.42,
  hold: 0.12,
  open: 0.48,
} as const;

const CHARACTER_PROGRESS = {
  enter: 0.58,
  reset: 0.12,
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

    const setInitialState = () => {
      gsap.set(pupils, {
        xPercent: EYE_POSITION.laptop.x,
        yPercent: EYE_POSITION.laptop.y,
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

    const killBlink = () => {
      blinkDelay?.kill();
      blinkTimeline?.kill();

      blinkDelay = null;
      blinkTimeline = null;
    };

    const blinkOnce = (onComplete?: () => void) => {
      blinkTimeline?.kill();

      blinkTimeline = gsap
        .timeline({
          onComplete: () => {
            blinkTimeline = null;
            onComplete?.();
          },
        })
        .to(lids, {
          yPercent: LID_POSITION.closed,
          borderBottomLeftRadius: "52%",
          borderBottomRightRadius: "52%",
          duration: BLINK_TIMING.close,
          ease: "power2.inOut",
        })
        .to(
          {},
          {
            duration: BLINK_TIMING.hold,
          }
        )
        .to(lids, {
          yPercent: LID_POSITION.open,
          borderBottomLeftRadius: "38%",
          borderBottomRightRadius: "38%",
          duration: BLINK_TIMING.open,
          ease: "power2.inOut",
        });
    };

    const scheduleIdleBlink = () => {
      if (!isActive) return;

      blinkDelay?.kill();

      blinkDelay = gsap.delayedCall(gsap.utils.random(2.8, 5), () => {
        blinkDelay = null;

        if (!isActive) return;

        blinkOnce(scheduleIdleBlink);
      });
    };

    const introTimeline = gsap
      .timeline({
        paused: true,

        onComplete: () => {
          if (!isActive) return;

          blinkOnce(scheduleIdleBlink);
        },
      })

      // 1. 노트북 내려다보기
      .to(
        {},
        {
          duration: 0.5,
        }
      )

      // 2. 위 보기
      .to(pupils, {
        xPercent: EYE_POSITION.up.x,
        yPercent: EYE_POSITION.up.y,
        duration: 0.48,
        ease: "power3.inOut",
      })

      .to(
        {},
        {
          duration: 0.3,
        }
      )

      // 3. 정면 보기
      .to(pupils, {
        xPercent: EYE_POSITION.front.x,
        yPercent: EYE_POSITION.front.y,
        duration: 0.5,
        ease: "power3.inOut",
      })

      .to(
        {},
        {
          duration: 0.22,
        }
      )

      // 4. 미소
      .to(mouth, {
        width: 23,
        height: 8,
        borderRadius: "0 0 50% 50%",
        duration: 0.35,
        ease: "power3.inOut",
      })

      .to(
        {},
        {
          duration: 0.2,
        }
      );

    const reset = () => {
      isActive = false;
      hasPlayedIntro = false;

      introTimeline.pause(0);

      killBlink();
      setInitialState();
    };

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      // 충분히 진입했을 때 처음 한 번만 시작
      if (nextProgress >= CHARACTER_PROGRESS.enter && !hasPlayedIntro) {
        isActive = true;
        hasPlayedIntro = true;

        introTimeline.restart();

        return;
      }

      // 이미 실행된 상태면 중간 역스크롤에서는 그대로 유지
      if (hasPlayedIntro) {
        isActive = true;
      }

      // Hero 초반까지 완전히 되돌아왔을 때만 초기화
      if (nextProgress <= CHARACTER_PROGRESS.reset && hasPlayedIntro) {
        reset();
      }
    };

    const destroy = () => {
      isActive = false;
      hasPlayedIntro = false;

      introTimeline.kill();

      killBlink();

      gsap.set([...pupils, ...lids, mouth], {
        clearProps: "all",
      });
    };

    setInitialState();

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutCharacterAnimation;
