"use client";

import { useRef, useState } from "react";

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
  const [previewNavigatorIndex, setPreviewNavigatorIndex] = useState<
    number | null
  >(null);

  const { activeNavigatorIndex, setActiveNavigatorIndex } =
    useCapabilityStageAnimation(stageRef);

  const visibleNavigatorIndex = previewNavigatorIndex ?? activeNavigatorIndex;

  return (
    <section ref={stageRef} className="capability-stage">
      <div
        id="capability"
        className="capability-stage__anchor capability-stage__anchor--intro"
        aria-hidden="true"
      />

      <CapabilityIntroScene />

      <ExperienceCapabilityScene />

      <CapabilityNavigatorScene
        items={CAPABILITY_NAVIGATOR_ITEMS}
        activeIndex={activeNavigatorIndex}
        visibleIndex={visibleNavigatorIndex}
        onActiveIndexChange={setActiveNavigatorIndex}
        onPreviewIndexChange={setPreviewNavigatorIndex}
      />

      <CapabilityClosingScene />
    </section>
  );
}
