import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { StructureCapabilityAnimationElements } from "@/components/scenes/capability/dom";

const STRUCTURE_MOBILE_QUERY = "(max-width: 900px)";

const StructureCapabilityAnimation = {
  create(elements: StructureCapabilityAnimationElements): AnimationController {
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
      return createNoopController();
    }

    const isMobileLayout = window.matchMedia(STRUCTURE_MOBILE_QUERY).matches;
    const branchScaleProperty = isMobileLayout ? "scaleY" : "scaleX";

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
      xPercent: -50,
      scale: 0.74,
      filter: "blur(10px)",
      transformOrigin: "center center",
    });

    gsap.set(stem, {
      xPercent: -50,
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(branch, {
      xPercent: -50,
      scaleX: isMobileLayout ? 1 : 0,
      scaleY: isMobileLayout ? 0 : 1,
      transformOrigin: isMobileLayout ? "top center" : "center center",
      "--branch-end-scale": 0,
    });

    gsap.set(nodes, {
      autoAlpha: 0,
      xPercent: -50,
      scale: 0.86,
      y: 14,
      filter: "blur(8px)",
      transformOrigin: "center center",
      "--node-line-scale": 0,
      "--node-line-opacity": 0,
    });

    gsap.set(cards, {
      autoAlpha: 0,
      y: 96,
      scale: 0.97,
      filter: "blur(10px)",
      transformOrigin: "center top",
    });

    gsap.set(cardInnerElements, {
      autoAlpha: 0,
      y: 22,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    /*
      전체 timeline을 10초짜리처럼 길게 잡는다.
      실제 시간으로 재생되는 게 아니라 scroll progress에 매핑됨.
      그래서 duration 숫자는 "스크롤 구간 비율"이라고 보면 됨.
    */

    timeline
      // 0.0 ~ 1.2 : header
      .to(
        header,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "none",
        },
        0
      )

      // 1.0 ~ 2.0 : core
      .to(
        core,
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "none",
        },
        1
      )

      // 2.0 ~ 3.0 : stem
      .to(
        stem,
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
        },
        2
      )

      // 3.0 ~ 4.4 : branch
      .to(
        branch,
        {
          [branchScaleProperty]: 1,
          duration: 1.4,
          ease: "none",
        },
        3
      );

    if (!isMobileLayout) {
      timeline.to(
        branch,
        {
          "--branch-end-scale": 1,
          duration: 0.8,
          ease: "none",
        },
        4.1
      );
    }

    const nodeRevealOrder = [0, 5, 1, 4, 2, 3];

    /*
      4.4 ~ 8.2 : nodes
      각 노드가 스크롤에 따라 순서대로 연결선 -> 원 형태로 나타남
    */
    nodeRevealOrder.forEach((nodeIndex, orderIndex) => {
      const node = nodes[nodeIndex];

      if (!node) return;

      const startAt = 4.4 + orderIndex * 0.62;

      timeline
        .to(
          node,
          {
            "--node-line-opacity": 1,
            "--node-line-scale": 1,
            duration: 0.48,
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
            duration: 0.42,
            ease: "none",
          },
          startAt + 0.36
        );
    });

    /*
      8.4 ~ 11.4 : cards
      노드가 다 연결된 뒤 카드가 천천히 올라옴
    */
    timeline
      .to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: {
            each: 0.18,
            from: "start",
          },
          ease: "none",
        },
        8.4
      )

      .to(
        cardIcons,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "none",
        },
        9.1
      )

      .to(
        cardTitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "none",
        },
        9.5
      )

      .to(
        cardMessages,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "none",
        },
        9.9
      )

      .to(
        cardDescs,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "none",
        },
        10.3
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
