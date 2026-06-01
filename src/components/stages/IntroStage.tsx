"use client";

import { AboutScenes, HeroScene, LifeMotionScene } from "@/components/scenes";
import { useIntroStageAnimation } from "./hooks/useIntroStageAnimation";

export default function IntroStage() {
  useIntroStageAnimation();

  return (
    <section className="intro-stage js-intro-stage">
      <div className="intro-stage__sticky">
        <HeroScene />
        <LifeMotionScene />
        <AboutScenes />
      </div>
    </section>
  );
}
