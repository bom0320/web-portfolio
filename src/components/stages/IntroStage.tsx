"use client";

import { useRef } from "react";

import { AboutScenes, HeroScene, LifeMotionScene } from "@/components/scenes";
import { useIntroStageAnimation } from "./hooks/useIntroStageAnimation";

export default function IntroStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useIntroStageAnimation(stageRef);

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
