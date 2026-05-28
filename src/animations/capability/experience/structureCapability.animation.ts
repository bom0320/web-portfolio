import gsap from "gsap";

type StructureCapabilityAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const StructureCapabilityAnimation = {
  create(root: HTMLElement | null): StructureCapabilityAnimationController {
    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const header = root.querySelector<HTMLElement>(
      ".js-structure-capability-header"
    );

    const core = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__core"
    );

    const stem = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__stem"
    );

    const branch = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__branch"
    );

    const nodes = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-map__node")
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

    gsap.set(core, {
      autoAlpha: 0,
      scale: 0.74,
      filter: "blur(10px)",
      transformOrigin: "center center",
    });

    gsap.set(stem, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(branch, {
      scaleX: 0,
      transformOrigin: "center center",
      "--branch-end-scale": 0,
    });

    gsap.set(nodes, {
      autoAlpha: 0,
      scale: 0.88,
      y: 10,
      filter: "blur(6px)",
      transformOrigin: "center center",
      "--node-line-scale": 0,
      "--node-line-opacity": 0,
    });

    gsap.set(cards, {
      autoAlpha: 0,
      y: 120,
      scale: 0.96,
      filter: "blur(10px)",
      transformOrigin: "center top",
    });

    gsap.set(cardInnerElements, {
      autoAlpha: 0,
      y: 24,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      /**
       * 01. Header
       */
      .to(header, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.13,
        ease: "none",
      })

      /**
       * 02. Core
       */
      .to(
        core,
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.1,
          ease: "none",
        },
        "-=0.03"
      )

      /**
       * 03. Stem
       */
      .to(
        stem,
        {
          scaleY: 1,
          duration: 0.08,
          ease: "none",
        },
        "-=0.01"
      )

      /**
       * 04. Branch
       */
      .to(branch, {
        scaleX: 1,
        duration: 0.14,
        ease: "none",
      })

      /**
       * 05. Branch edge
       */
      .to(
        branch,
        {
          "--branch-end-scale": 1,
          duration: 0.08,
          ease: "none",
        },
        "-=0.04"
      )

      /**
       * 06. Node branches start
       */
      .add("nodeDraw", "-=0.06");

    const nodeRevealOrder = [0, 5, 1, 4, 2, 3];

    nodeRevealOrder.forEach((nodeIndex, orderIndex) => {
      const node = nodes[nodeIndex];

      if (!node) return;

      const startAt = `nodeDraw+=${orderIndex * 0.035}`;

      timeline
        /**
         * 가지가 위에서 아래로 자라남
         */
        .to(
          node,
          {
            "--node-line-opacity": 1,
            "--node-line-scale": 1,
            duration: 0.08,
            ease: "none",
          },
          startAt
        )

        /**
         * 가지 끝에 노드가 맺히듯 등장
         */
        .to(
          node,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.07,
            ease: "none",
          },
          `${startAt}+=0.055`
        );
    });

    timeline
      /**
       * 07. Cards pull up
       */
      .to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.16,
          stagger: {
            each: 0.018,
            from: "start",
          },
          ease: "none",
        },
        "nodeDraw+=0.2"
      )

      /**
       * 08. Card contents
       */
      .to(
        cardIcons,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.012,
          ease: "none",
        },
        "nodeDraw+=0.25"
      )

      .to(
        cardSubtitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.012,
          ease: "none",
        },
        "nodeDraw+=0.265"
      )

      .to(
        cardTitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.012,
          ease: "none",
        },
        "nodeDraw+=0.28"
      )

      .to(
        cardMessages,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.012,
          ease: "none",
        },
        "nodeDraw+=0.31"
      )

      .to(
        cardDescs,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.012,
          ease: "none",
        },
        "nodeDraw+=0.34"
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(
        [
          header,
          core,
          stem,
          branch,
          ...nodes,
          ...cards,
          ...cardInnerElements,
        ].filter(Boolean),
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

export default StructureCapabilityAnimation;
