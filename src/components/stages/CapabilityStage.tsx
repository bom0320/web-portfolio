"use client";

import { useRef, useState } from "react";

import {
  BuildExperienceScene,
  BuildIntroScene,
} from "@/components/scenes/build";

import {
  ProjectsClosingScene,
  ProjectsNavigatorScene,
} from "@/components/scenes/projects";

import { PROJECT_ITEMS } from "@/data/projects";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";
import { useCapabilityStageAnimation } from "./hooks/useCapabilityStageAnimation";

export default function CapabilityStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  const [previewNavigatorIndex, setPreviewNavigatorIndex] = useState<
    number | null
  >(null);

  const { activeNavigatorIndex, setActiveNavigatorIndex } =
    useCapabilityStageAnimation(stageRef);

  useSectionViewTracking(stageRef, {
    sectionName: "capability",
    sectionOrder: 2,
  });

  const visibleNavigatorIndex = previewNavigatorIndex ?? activeNavigatorIndex;

  return (
    <section ref={stageRef} className="capability-stage">
      <div
        id="capability"
        className="capability-stage__anchor capability-stage__anchor--intro"
        aria-hidden="true"
      />

      <BuildIntroScene />
      <BuildExperienceScene />

      <ProjectsNavigatorScene
        items={PROJECT_ITEMS}
        activeIndex={activeNavigatorIndex}
        visibleIndex={visibleNavigatorIndex}
        onActiveIndexChange={setActiveNavigatorIndex}
        onPreviewIndexChange={setPreviewNavigatorIndex}
      />

      <ProjectsClosingScene />
    </section>
  );
}
