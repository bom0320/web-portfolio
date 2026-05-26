import gsap from "gsap";

type CapabilityIntroController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const SELECTOR = {
  visualField: ".js-capability-intro-visual-field",

  titleLayer: ".js-capability-intro-title-layer",
  eyebrow: ".js-capability-intro-eyebrow",
  title: ".js-capability-intro-title",
  subtitle: ".js-capability-intro-subtitle",

  phase01: ".js-capability-intro-phase-01",
  phase02: ".js-capability-intro-phase-02",
} as const;

const CapabilityIntroAnimation = {
  create(scope: HTMLElement): CapabilityIntroController {
    const visualField = scope.querySelector<HTMLElement>(SELECTOR.visualField);

    const titleLayer = scope.querySelector<HTMLElement>(SELECTOR.titleLayer);
    const eyebrow = scope.querySelector<HTMLElement>(SELECTOR.eyebrow);
    const title = scope.querySelector<HTMLElement>(SELECTOR.title);
    const subtitle = scope.querySelector<HTMLElement>(SELECTOR.subtitle);

    const phase01 = scope.querySelector<HTMLElement>(SELECTOR.phase01);
    const phase02 = scope.querySelector<HTMLElement>(SELECTOR.phase02);

    if (
      !visualField ||
      !titleLayer ||
      !eyebrow ||
      !title ||
      !subtitle ||
      !phase01 ||
      !phase02
    ) {
      console.warn("[CapabilityIntroAnimation] Missing elements", {
        visualField,
        titleLayer,
        eyebrow,
        title,
        subtitle,
        phase01,
        phase02,
      });

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
     */
    gsap.set(visualField, {
      autoAlpha: 1,
      scale: 1.08,
      transformOrigin: "center center",
      filter: "saturate(1.12) contrast(1.05) brightness(1.02)",
    });

    gsap.set(titleLayer, {
      autoAlpha: 1,
      y: 0,
    });

    gsap.set(title, {
      autoAlpha: 0,
      scale: 5.4,
      y: 0,
      transformOrigin: "center center",
    });

    gsap.set(eyebrow, {
      autoAlpha: 0,
      y: 16,
    });

    gsap.set(subtitle, {
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
     * 01. Title appears
     */
    timeline
      .to(
        visualField,
        {
          autoAlpha: 0.72,
          duration: 0.14,
        },
        0.14
      )
      .to(
        title,
        {
          autoAlpha: 1,
          duration: 0.12,
        },
        0.14
      );

    /**
     * 02. One title zooms out + background sinks to black
     */
    timeline
      .to(
        visualField,
        {
          autoAlpha: 0.05,
          filter: "saturate(0.75) contrast(1) brightness(0.22)",
          duration: 0.36,
          ease: "power2.out",
        },
        0.22
      )
      .to(
        title,
        {
          scale: 1,
          duration: 0.36,
          ease: "power2.out",
        },
        0.22
      );

    /**
     * 03. Statement elements reveal
     * title은 이미 보이고 있으므로 eyebrow / subtitle만 등장시킨다.
     */
    timeline
      .to(
        eyebrow,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.58
      )
      .to(
        subtitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.64
      );

    /**
     * 04. Phase 01 body reveal
     * titleLayer는 건드리지 않는다.
     * FLOW. STRUCTURE. MOTION. / subtitle은 고정 유지.
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
        [visualField, titleLayer, eyebrow, title, subtitle, phase01, phase02],
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
