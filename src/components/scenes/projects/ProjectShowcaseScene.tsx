"use client";

import type { ProjectItem } from "@/data/projects";
import ProjectIntro from "../../features/projects/ProjectIntro";
import ProjectList from "../../features/projects/ProjectList";
import ProjectMonitor from "../../features/projects/ProjectMonitor";

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function ProjectShowcaseScene({
  projects,
  activeIndex,
  onActiveIndexChange,
}: ProjectShowcaseProps) {
  return (
    <div className="project-showcase">
      <div className="project-showcase__left">
        <ProjectIntro />

        <ProjectList
          projects={projects}
          activeIndex={activeIndex}
          onActiveIndexChange={onActiveIndexChange}
        />
      </div>

      <div className="project-showcase__right">
        <ProjectMonitor projects={projects} activeIndex={activeIndex} />
      </div>
    </div>
  );
}
