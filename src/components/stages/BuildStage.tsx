"use client";

import { useRef } from "react";

import {
  BuildExperienceScene,
  BuildIntroScene,
} from "@/components/scenes/build";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";

import { useBuildStageAnimation } from "./hooks/useBuildStageAnimation";

export default function BuildStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useBuildStageAnimation(stageRef);

  useSectionViewTracking(stageRef, {
    sectionName: "build",
    sectionOrder: 2,
  });

  return (
    <section id="build" ref={stageRef} className="capability-stage">
      <BuildIntroScene />
      <BuildExperienceScene />
    </section>
  );
}
