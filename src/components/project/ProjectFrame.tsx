"use client";

import { ProjectItem } from "@/data/projects";
import { useLayoutEffect, useRef } from "react";
import ProjectAnimation from "../animations/project";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";
import useMediaQuery from "@/hooks/useMediaQuery";

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

  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const CurrentCard = isMobile ? ProjectCardMobile : ProjectCard;
  const NextCard = isMobile ? ProjectCardMobile : ProjectCard;

  return (
    <div className="project-frame">
      <div className="project-frame__surface">
        <div className="project-layer project-layer--current">
          <CurrentCard project={currentProject} />
        </div>

        {isTransitioning && nextProject && (
          <div ref={nextLayerRef} className="project-layer project-layer--next">
            <NextCard project={nextProject} />
          </div>
        )}
      </div>
    </div>
  );
}
