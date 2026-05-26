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

import { CapabilityIntroAnimation } from "@/animations/capability";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilityStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const introController = CapabilityIntroAnimation.create(stage);

      introController.setProgress(0);

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

      ScrollTrigger.refresh();

      return () => {
        introTrigger.kill();
        introController.destroy();
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
