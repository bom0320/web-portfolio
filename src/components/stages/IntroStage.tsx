"use client";

import { useRef } from "react";

import { AboutScenes, HeroScene, LifeMotionScene } from "@/components/scenes";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";
import { useIntroStageAnimation } from "./hooks/useIntroStageAnimation";

export default function IntroStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useIntroStageAnimation(stageRef);

  useSectionViewTracking(stageRef, {
    sectionName: "intro",
    sectionOrder: 1,
  });

  return (
    <section id="hero" ref={stageRef} className="intro-stage">
      <div
        id="about"
        className="intro-stage__anchor intro-stage__anchor--about"
        aria-hidden="true"
      />

      <div className="intro-stage__sticky">
        <HeroScene />
        <LifeMotionScene />
        <AboutScenes />
      </div>
    </section>
  );
}
