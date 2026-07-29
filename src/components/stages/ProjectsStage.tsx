"use client";

import { useRef, useState } from "react";

import {
  ProjectsClosingScene,
  ProjectsNavigatorScene,
} from "@/components/scenes/projects";
import { PROJECT_ITEMS } from "@/data/projects";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";

import { useProjectsStageAnimation } from "./hooks/useProjectsStageAnimation";

export default function ProjectsStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  const [previewProjectIndex, setPreviewProjectIndex] = useState<number | null>(
    null
  );

  const { activeProjectIndex, setActiveProjectIndex } =
    useProjectsStageAnimation(stageRef);

  const visibleProjectIndex = previewProjectIndex ?? activeProjectIndex;

  useSectionViewTracking(stageRef, {
    sectionName: "projects",
    sectionOrder: 3,
  });

  return (
    <section id="projects" ref={stageRef} className="content-stage">
      <ProjectsNavigatorScene
        items={PROJECT_ITEMS}
        activeIndex={activeProjectIndex}
        visibleIndex={visibleProjectIndex}
        onActiveIndexChange={setActiveProjectIndex}
        onPreviewIndexChange={setPreviewProjectIndex}
      />

      <ProjectsClosingScene />
    </section>
  );
}
