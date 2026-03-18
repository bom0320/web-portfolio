"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import ProjectAnimation from "../animations/project";
interface ProjectFrameVisualProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
}

export default function ProjectFrameVisual({
  currentProject,
  nextProject,
  isTransitioning,
}: ProjectFrameVisualProps) {
  const currentImageRef = useRef<HTMLDivElement | null>(null);
  const nextImageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isTransitioning || !nextProject) return;

    const currentImage = currentImageRef.current;
    const nextImage = nextImageRef.current;

    if (!currentImage || !nextImage) return;

    const tl = ProjectAnimation.createProjectHeroVisualTransition({
      currentImage,
      nextImage,
    });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, nextProject]);

  return (
    <div className="project-frame__visual">
      <div className="project-frame__monitor">
        <div className="project-frame__screen">
          <div
            key={`current-${currentProject.id}`}
            ref={currentImageRef}
            className="project-frame__screen-layer project-frame__screen-layer--current"
          >
            <Image
              src={currentProject.heroImage}
              alt={`${currentProject.title} hero image`}
              fill
              className="project-frame__screen-image"
              sizes="(max-width: 1024px) 60vw, 620px"
              priority
            />
          </div>

          {isTransitioning && nextProject && (
            <div
              key={`next-${nextProject.id}`}
              ref={nextImageRef}
              className="project-frame__screen-layer project-frame__screen-layer--next"
            >
              <Image
                src={nextProject.heroImage}
                alt={`${nextProject.title} hero image`}
                fill
                className="project-frame__screen-image"
                sizes="(max-width: 1024px) 60vw, 620px"
                priority
              />
            </div>
          )}
        </div>

        <Image
          src="/images/projects/monitor-frame.png"
          alt=""
          width={689}
          height={529}
          className="project-frame__monitor-frame"
          priority
        />
      </div>
    </div>
  );
}
