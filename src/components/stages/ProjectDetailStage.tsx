"use client";

import { useRef } from "react";

import { ProjectDetailScene } from "@/components/scenes/projects";
import type { ProjectItem } from "@/data/projects";
import type { ProjectDetailSection } from "@/data/projects/projectDetailItems";

import { useProjectDetailStageAnimation } from "./hooks/useProjectDetailAnimation";

interface ProjectDetailStageProps {
  item: ProjectItem;
  sections: ProjectDetailSection[];
}

export default function ProjectDetailStage({
  item,
  sections,
}: ProjectDetailStageProps) {
  const stageRef = useRef<HTMLElement | null>(null);

  useProjectDetailStageAnimation(stageRef);

  return (
    <section ref={stageRef} className="project-detail-stage">
      <ProjectDetailScene item={item} sections={sections} />
    </section>
  );
}
