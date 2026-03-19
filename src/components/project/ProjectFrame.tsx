"use client";

import { ProjectItem } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useLayoutEffect, useRef } from "react";
import ProjectAnimation from "../animations/project";
interface ProjectFrameProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export default function ProjectFrame({
  currentProject,
  nextProject,
  isTransitioning,
  onTransitionComplete,
}: ProjectFrameProps) {
  const nextLayerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const nextLayer = nextLayerRef.current;

    if (!isTransitioning || !nextProject || !nextLayer) return;

    const tl = ProjectAnimation.createProjectLayerTransition({
      nextLayer,
      onComplete: onTransitionComplete,
    });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, nextProject, onTransitionComplete]);

  return (
    <div className="project-frame">
      <div className="project-frame__surface">
        <div className="project-layer project-layer--current">
          <ProjectCard project={currentProject} />
        </div>
        s
        {isTransitioning && nextProject && (
          <div ref={nextLayerRef} className="project-layer project-layer--next">
            <ProjectCard project={nextProject} />
          </div>
        )}
      </div>
    </div>
  );
}
