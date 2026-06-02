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

const TITLE_INITIAL_SCALE = 3.8;

const CapabilityIntroAnimation = {
  create(scope: HTMLElement | null): CapabilityIntroController {
    if (!scope) {
      console.warn("[CapabilityIntroAnimation] Missing scope");

      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

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
      scale: 1,
      transformOrigin: "center center",
    });

    gsap.set(titleLayer, {
      autoAlpha: 1,
      y: 0,
    });

    gsap.set(title, {
      autoAlpha: 0,
      scale: TITLE_INITIAL_SCALE,
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
     * 01. Title appears
     * FLOW. STRUCTURE. MOTION. 하나만 등장
     */
    timeline.to(
      title,
      {
        autoAlpha: 1,
        duration: 0.12,
      },
      0.08
    );

    /**
     * 02. Title zooms out
     * 타이틀 교체 없이 같은 h2가 scale만 줄어든다.
     */
    timeline.to(
      title,
      {
        scale: 1,
        duration: 0.42,
        ease: "power2.out",
      },
      0.16
    );

    /**
     * 03. Statement elements reveal
     * title은 고정, eyebrow/subtitle만 등장
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
        0.56
      )
      .to(
        subtitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.62
      );

    /**
     * 04. Phase 01 reveal
     * titleLayer는 절대 흐리게 만들지 않는다.
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
