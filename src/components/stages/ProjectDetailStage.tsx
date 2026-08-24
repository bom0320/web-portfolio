"use client";

import { type ReactNode, useRef } from "react";

import { ProjectDetailScene } from "@/components/scenes/projects";
import type { ProjectDetailNavItem, ProjectItem } from "@/data/projects";

import { useProjectDetailStageAnimation } from "./hooks/useProjectDetailStageAnimation";

interface ProjectDetailStageProps {
  item: ProjectItem;
  navItems: ProjectDetailNavItem[];
  children: ReactNode;
}

export default function ProjectDetailStage({
  item,
  navItems,
  children,
}: ProjectDetailStageProps) {
  const stageRef = useRef<HTMLElement | null>(null);

  useProjectDetailStageAnimation(stageRef);

  return (
    <section ref={stageRef} className="project-detail-stage">
      <ProjectDetailScene item={item} navItems={navItems}>
        {children}
      </ProjectDetailScene>
    </section>
  );
}
