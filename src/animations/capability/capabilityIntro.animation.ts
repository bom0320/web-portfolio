import gsap from "gsap";

type CapabilityIntroController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const SELECTOR = {
  visualField: ".js-capability-intro-visual-field",
  maskTitle: ".js-capability-intro-mask-title",

  fixed: ".js-capability-intro-fixed",
  eyebrow: ".js-capability-intro-eyebrow",
  title: ".js-capability-intro-title",
  subtitle: ".js-capability-intro-subtitle",

  phase01: ".js-capability-intro-phase-01",
  phase02: ".js-capability-intro-phase-02",
} as const;

const CapabilityIntroAnimation = {
  create(scope: HTMLElement): CapabilityIntroController {
    const visualField = scope.querySelector<HTMLElement>(SELECTOR.visualField);
    const maskTitle = scope.querySelector<HTMLElement>(SELECTOR.maskTitle);

    const fixed = scope.querySelector<HTMLElement>(SELECTOR.fixed);
    const eyebrow = scope.querySelector<HTMLElement>(SELECTOR.eyebrow);
    const title = scope.querySelector<HTMLElement>(SELECTOR.title);
    const subtitle = scope.querySelector<HTMLElement>(SELECTOR.subtitle);

    const phase01 = scope.querySelector<HTMLElement>(SELECTOR.phase01);
    const phase02 = scope.querySelector<HTMLElement>(SELECTOR.phase02);

    if (
      !visualField ||
      !maskTitle ||
      !fixed ||
      !eyebrow ||
      !title ||
      !subtitle ||
      !phase01 ||
      !phase02
    ) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
      },
    });

    /**
     * Initial state
     * 첫 화면은 반드시 full visual만 보여야 한다.
     */
    gsap.set(visualField, {
      autoAlpha: 1,
      scale: 1.08,
      transformOrigin: "center center",
    });

    gsap.set(maskTitle, {
      autoAlpha: 0,
      scale: 5.4,
      transformOrigin: "center center",
    });

    gsap.set(fixed, {
      autoAlpha: 0,
    });

    gsap.set([eyebrow, title, subtitle], {
      autoAlpha: 0,
      y: 18,
    });

    gsap.set([phase01, phase02], {
      autoAlpha: 0,
      y: 28,
    });

    /**
     * 00. Full visual hold
     */
    timeline.to(
      visualField,
      {
        scale: 1.16,
        duration: 0.18,
      },
      0
    );

    /**
     * 01. Full visual -> typography mask
     */
    timeline
      .to(
        visualField,
        {
          autoAlpha: 0,
          duration: 0.12,
        },
        0.16
      )
      .to(
        maskTitle,
        {
          autoAlpha: 1,
          duration: 0.12,
        },
        0.16
      );

    /**
     * 02. Oversized typography converges to readable size
     */
    timeline.to(
      maskTitle,
      {
        scale: 1,
        duration: 0.34,
        ease: "power2.out",
      },
      0.24
    );

    /**
     * 03. Mask title hands off to fixed statement
     */
    timeline
      .to(
        maskTitle,
        {
          autoAlpha: 0,
          duration: 0.08,
        },
        0.58
      )
      .to(
        fixed,
        {
          autoAlpha: 1,
          duration: 0.01,
        },
        0.58
      )
      .to(
        eyebrow,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.6
      )
      .to(
        title,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.63
      )
      .to(
        subtitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.68
      );

    /**
     * 04. Phase 01 body reveal
     */
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

    /**
     * 05. Phase 01 -> Phase 02
     */
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
        [
          visualField,
          maskTitle,
          fixed,
          eyebrow,
          title,
          subtitle,
          phase01,
          phase02,
        ],
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
