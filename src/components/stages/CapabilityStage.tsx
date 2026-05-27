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
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  StructureCapabilityAnimation,
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

      const structureController =
        StructureCapabilityAnimation.create(structureElement);

      introController.setProgress(0);
      structureController.setProgress(0);

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

      ScrollTrigger.refresh();

      return () => {
        introTrigger.kill();
        structureTrigger.kill();

        introController.destroy();
        introProofController.destroy();
        structureController.destroy();
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
