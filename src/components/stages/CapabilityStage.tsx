"use client";

import { useRef } from "react";

import {
  CapabilityClosingScene,
  CapabilityIntroScene,
  CapabilityNavigatorScene,
  ExperienceCapabilityScene,
} from "@/components/scenes/capability";

import { CAPABILITY_NAVIGATOR_ITEMS } from "@/data/capability";
import { useCapabilityStageAnimation } from "./hooks/useCapabilityStageAnimation";

export default function CapabilityStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  const { activeNavigatorIndex, setActiveNavigatorIndex } =
    useCapabilityStageAnimation(stageRef);

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
