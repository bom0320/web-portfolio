import gsap from "gsap";

import type { StructureCapabilityAnimationElements } from "@/components/scenes/capability/dom";

type StructureCapabilityAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const StructureCapabilityAnimation = {
  create(
    elements: StructureCapabilityAnimationElements
  ): StructureCapabilityAnimationController {
    const {
      root,
      header,
      core,
      stem,
      branch,
      nodes,
      cards,
      cardIcons,
      cardTitles,
      cardMessages,
      cardDescs,
    } = elements;

    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const cardInnerElements = [
      ...cardIcons,
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
      .to(header, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.13,
        ease: "none",
      })

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

      .to(
        stem,
        {
          scaleY: 1,
          duration: 0.08,
          ease: "none",
        },
        "-=0.01"
      )

      .to(branch, {
        scaleX: 1,
        duration: 0.14,
        ease: "none",
      })

      .to(
        branch,
        {
          "--branch-end-scale": 1,
          duration: 0.08,
          ease: "none",
        },
        "-=0.04"
      )

      .add("nodeDraw", "-=0.06");

    const nodeRevealOrder = [0, 5, 1, 4, 2, 3];

    nodeRevealOrder.forEach((nodeIndex, orderIndex) => {
      const node = nodes[nodeIndex];

      if (!node) return;

      const startAt = `nodeDraw+=${orderIndex * 0.035}`;

      timeline
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
