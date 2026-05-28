"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  CapabilityClosingScene,
  CapabilityIntroScene,
  CapabilityNavigatorScene,
  ExperienceCapabilityScene,
} from "@/components/scenes/capability";

import {
  AICapabilityAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilityStage() {
  const stageRef = useRef<HTMLElement | null>(null);

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

      ScrollTrigger.refresh();

      return () => {
        introTrigger.kill();
        structureTrigger.kill();
        aiTrigger.kill();
        visualTrigger.kill();

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

      <CapabilityNavigatorScene />

      <CapabilityClosingScene />
    </section>
  );
}
