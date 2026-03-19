"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ProjectItem } from "@/data/projects";
import ProjectFrameText from "./ProjectFrameText";
import ProjectFrameVisual from "./ProjectFrameVisual";
import ProjectFrameDetail from "./ProjectFrameDetail";

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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [displayTone, setDisplayTone] = useState<"dark" | "light">(
    currentProject.tone
  );

  useEffect(() => {
    if (isTransitioning) return;
    setDisplayTone(currentProject.tone);
  }, [currentProject.tone, isTransitioning]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    if (!isTransitioning || !nextProject) {
      gsap.set(hero, {
        backgroundColor: currentProject.background,
      });
      return;
    }

    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
      onComplete: () => {
        setDisplayTone(nextProject.tone);
      },
    });

    tl.to(hero, {
      backgroundColor: nextProject.background,
      duration: 0.45,
    });

    return () => {
      tl.kill();
    };
  }, [currentProject.background, nextProject, isTransitioning]);

  return (
    <div className="project-frame">
      <div className="project-frame__surface">
        <div
          ref={heroRef}
          className={`project-frame__hero project-frame__hero--${displayTone}`}
          style={
            {
              "--project-accent": currentProject.themeColor,
            } as React.CSSProperties
          }
        >
          <ProjectFrameText
            currentProject={currentProject}
            nextProject={nextProject}
            isTransitioning={isTransitioning}
          />

          <ProjectFrameVisual
            currentProject={currentProject}
            nextProject={nextProject}
            isTransitioning={isTransitioning}
            onTransitionComplete={onTransitionComplete}
          />
        </div>

        <ProjectFrameDetail
          currentProject={currentProject}
          nextProject={nextProject}
          isTransitioning={isTransitioning}
        />
      </div>
    </div>
  );
}
