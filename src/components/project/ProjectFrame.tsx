"use client";

import { ProjectItem } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
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

    gsap.set(nextLayer, { opacity: 0 });

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.out",
      },
      onComplete: onTransitionComplete,
    });

    tl.to(nextLayer, { opacity: 1 }, 0);

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

        {isTransitioning && nextProject && (
          <div ref={nextLayerRef} className="project-layer project-layer--next">
            <ProjectCard project={nextProject} />
          </div>
        )}
      </div>
    </div>
  );
}
