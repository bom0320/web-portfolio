"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { AboutHeroScene, InterviewScene, SkillsScene } from "../scenes";
import LifeToAboutAnimation from "../../animations/transitions/lifeToAbout";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStage() {
  const stageRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const panel = panelRef.current;

    if (!stage || !panel) return;

    const ctx = gsap.context(() => {
      const controller = LifeToAboutAnimation.create({
        aboutStage: panel,
      });

      controller.setProgress(0);

      const trigger = ScrollTrigger.create({
        trigger: stage,
        start: "top bottom",
        end: "top top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        markers: true,
        onUpdate: (self) => {
          controller.setProgress(self.progress);
        },
      });

      return () => {
        trigger.kill();
        controller.destroy();
      };
    }, stage);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stageRef} id="about" className="about js-about-stage">
      <div ref={panelRef} className="about__panel">
        <AboutHeroScene />
        <InterviewScene />
        <SkillsScene />
      </div>
    </section>
  );
}
