"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  CapabilityClosingScene,
  CapabilityIntroScene,
  CapabilityNavigatorScene,
  ExperienceCapabilityScene,
} from "@/components/scenes/capability";

import { CAPABILITY_NAVIGATOR_ITEMS } from "@/data/capability";

import {
  AICapabilityAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  CapabilityNavigatorAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";

gsap.registerPlugin(ScrollTrigger);

function getCapabilityNavigatorIndex(progress: number, total: number) {
  return Math.round(progress * (total - 1));
}

export default function CapabilityStage() {
  const stageRef = useRef<HTMLElement | null>(null);
  const previousNavigatorIndexRef = useRef(0);
  const [activeNavigatorIndex, setActiveNavigatorIndex] = useState(0);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const introController = CapabilityIntroAnimation.create(stage);
      const introProofController = CapabilityIntroProofAnimation.create(stage);

      const structureElement = stage.querySelector<HTMLElement>(
        ".js-structure-capability-block"
      );

      const aiElement = stage.querySelector<HTMLElement>(
        ".js-ai-capability-block"
      );

      const visualElement = stage.querySelector<HTMLElement>(
        ".js-visual-capability-block"
      );

      const navigatorElement = stage.querySelector<HTMLElement>(
        ".js-capability-navigator"
      );

      const structureController =
        StructureCapabilityAnimation.create(structureElement);

      const aiController = AICapabilityAnimation.create(aiElement);

      const visualController = VisualCapabilityAnimation.create(visualElement);

      introController.setProgress(0);
      structureController.setProgress(0);
      aiController.setProgress(0);
      visualController.setProgress(0);

      const introTrigger = ScrollTrigger.create({
        trigger: ".js-capability-intro-pinned",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
        markers: true,
        onUpdate: (self) => {
          introController.setProgress(self.progress);
        },
      });

      let structureMaxProgress = 0;

      const structureTrigger = ScrollTrigger.create({
        trigger: structureElement,
        start: "top 78%",
        end: "bottom 62%",
        scrub: 1.1,
        invalidateOnRefresh: true,
        markers: true,

        onUpdate: (self) => {
          structureMaxProgress = Math.max(structureMaxProgress, self.progress);
          structureController.setProgress(structureMaxProgress);
        },

        onLeaveBack: () => {
          structureMaxProgress = 0;
          structureController.setProgress(0);
        },
      });

      let aiMaxProgress = 0;

      const aiTrigger = ScrollTrigger.create({
        trigger: aiElement,
        start: "top 78%",
        end: "bottom 64%",
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,

        onUpdate: (self) => {
          aiMaxProgress = Math.max(aiMaxProgress, self.progress);
          aiController.setProgress(aiMaxProgress);
        },

        onLeaveBack: () => {
          aiMaxProgress = 0;
          aiController.setProgress(0);
        },
      });

      let visualMaxProgress = 0;

      const visualTrigger = ScrollTrigger.create({
        trigger: visualElement,
        start: "top 78%",
        end: "top 42%",
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,

        onUpdate: (self) => {
          visualMaxProgress = Math.max(visualMaxProgress, self.progress);
          visualController.setProgress(visualMaxProgress);
        },

        onLeaveBack: () => {
          visualMaxProgress = 0;
          visualController.setProgress(0);
        },
      });

      const navigatorTrigger = ScrollTrigger.create({
        trigger: navigatorElement,
        start: "top top",
        end: () =>
          `+=${
            window.innerHeight * (CAPABILITY_NAVIGATOR_ITEMS.length - 1) * 1.8
          }`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,

        onUpdate: (self) => {
          const nextIndex = getCapabilityNavigatorIndex(
            self.progress,
            CAPABILITY_NAVIGATOR_ITEMS.length
          );

          if (nextIndex === previousNavigatorIndexRef.current) return;

          previousNavigatorIndexRef.current = nextIndex;
          setActiveNavigatorIndex(nextIndex);

          const nextLayer = stage.querySelector<HTMLElement>(
            `.js-capability-navigator-layer[data-index="${nextIndex}"]`
          );

          if (!nextLayer) return;

          CapabilityNavigatorAnimation.createLayerTransition({
            nextLayer,
          });
        },
      });

      ScrollTrigger.refresh();

      return () => {
        introTrigger.kill();
        structureTrigger.kill();
        aiTrigger.kill();
        visualTrigger.kill();
        navigatorTrigger.kill();

        introController.destroy();
        introProofController.destroy();
        structureController.destroy();
        aiController.destroy();
        visualController.destroy();
      };
    }, stage);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stageRef} className="capability-stage">
      <CapabilityIntroScene />

      <ExperienceCapabilityScene />

      <CapabilityNavigatorScene
        items={CAPABILITY_NAVIGATOR_ITEMS}
        activeIndex={activeNavigatorIndex}
        onActiveIndexChange={setActiveNavigatorIndex}
      />

      <CapabilityClosingScene />
    </section>
  );
}
