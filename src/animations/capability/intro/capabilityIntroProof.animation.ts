import gsap from "gsap";

type IntroProofController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const SELECTOR = {
  character: ".js-capability-intro-proof-character",
  leftPoints: ".js-capability-intro-proof-point-left",
  rightPoints: ".js-capability-intro-proof-point-right",
  quote: ".js-capability-intro-proof-quote",
} as const;

const CapabilityIntroProofAnimation = {
  create(scope: HTMLElement | null): IntroProofController {
    if (!scope) {
      console.warn("[CapabilityIntroProofAnimation] Missing scope");

      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const section = scope;

    const character = section.querySelector<HTMLElement>(SELECTOR.character);
    const leftPoints = section.querySelectorAll<HTMLElement>(
      SELECTOR.leftPoints
    );
    const rightPoints = section.querySelectorAll<HTMLElement>(
      SELECTOR.rightPoints
    );
    const quote = section.querySelector<HTMLElement>(SELECTOR.quote);

    if (!character || !leftPoints.length || !rightPoints.length || !quote) {
      console.warn("[CapabilityIntroProofAnimation] Missing elements", {
        character,
        leftPoints,
        rightPoints,
        quote,
      });

      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const animatedElements = [
      character,
      ...Array.from(leftPoints),
      ...Array.from(rightPoints),
      quote,
    ];

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
