"use client";

import { ProjectItem } from "@/data/projects";
import ProjectFrameText from "./ProjectFrameText";
import ProjectFrameVisual from "./ProjectFrameVisual";
import ProjectFrameDetail from "./ProjectFrameDetail";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={`project-card ${className ?? ""}`}>
      <div
        className={`project-frame__hero project-frame__hero--${project.tone}`}
        style={
          {
            "--project-accent": project.themeColor,
            backgroundColor: project.background,
          } as React.CSSProperties
        }
      >
        <ProjectFrameText project={project} />
        <ProjectFrameVisual project={project} />
      </div>

      <ProjectFrameDetail project={project} />
    </div>
  );
}
