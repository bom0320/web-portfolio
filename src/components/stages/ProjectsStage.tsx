"use client";

import { useRef } from "react";

import {
  ProjectsClosingScene,
  ProjectsShowcaseScene,
} from "@/components/scenes/projects";
import { PROJECT_ITEMS } from "@/data/projects";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";

import { useProjectsStageAnimation } from "./hooks/useProjectsStageAnimation";

export default function ProjectsStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useProjectsStageAnimation(stageRef);

  useSectionViewTracking(stageRef, {
    sectionName: "projects",
    sectionOrder: 3,
  });

  return (
    <section id="projects" ref={stageRef} className="content-stage">
      <ProjectsShowcaseScene items={PROJECT_ITEMS} />

      <ProjectsClosingScene />
    </section>
  );
}
