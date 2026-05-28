import gsap from "gsap";

type AICapabilityAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const AICapabilityAnimation = {
  create(root: HTMLElement | null): AICapabilityAnimationController {
    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const header = root.querySelector<HTMLElement>(".js-ai-capability-header");

    const grid = root.querySelector<HTMLElement>(
      ".experience-capability-grid--ai"
    );

    const cards = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card")
    );

    const cardIcons = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card__icon")
    );

    const cardSubtitles = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card__subtitle")
    );

    const cardTitles = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card__title")
    );

    const cardMessages = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card__message")
    );

    const cardDescs = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-card__desc")
    );

    const cardInnerElements = [
      ...cardIcons,
      ...cardSubtitles,
      ...cardTitles,
      ...cardMessages,
      ...cardDescs,
    ];

    gsap.set(header, {
      autoAlpha: 0,
      y: 32,
      filter: "blur(10px)",
    });

    gsap.set(grid, {
      autoAlpha: 0,
      y: 72,
      scale: 0.98,
      filter: "blur(10px)",
      transformOrigin: "center top",
    });

    gsap.set(cards, {
      autoAlpha: 0,
      y: 52,
      scale: 0.98,
      filter: "blur(8px)",
      transformOrigin: "center top",
    });

    gsap.set(cardInnerElements, {
      autoAlpha: 0,
      y: 20,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      .to(header, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.18,
        ease: "none",
      })

      .to(
        grid,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "none",
        },
        0.2
      )

      .to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.18,
          stagger: {
            each: 0.035,
            from: "start",
          },
          ease: "none",
        },
        0.28
      )

      .to(
        cardIcons,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.018,
          ease: "none",
        },
        0.4
      )

      .to(
        cardSubtitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.018,
          ease: "none",
        },
        0.44
      )

      .to(
        cardTitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.018,
          ease: "none",
        },
        0.48
      )

      .to(
        cardMessages,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.018,
          ease: "none",
        },
        0.52
      )

      .to(
        cardDescs,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.018,
          ease: "none",
        },
        0.56
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([header, grid, ...cards, ...cardInnerElements].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AICapabilityAnimation;
