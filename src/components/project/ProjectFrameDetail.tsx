"use client";

import { useLayoutEffect, useRef } from "react";
import { ProjectItem } from "@/data/projects";
import ProjectFrameThumbs from "./ProjectFrameThumbs";
import ProjectAnimation from "../animations/project";
interface ProjectFrameDetailProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export default function ProjectFrameDetail({
  currentProject,
  nextProject,
  isTransitioning,
  onTransitionComplete,
}: ProjectFrameDetailProps) {
  const currentKeywordRef = useRef<HTMLDivElement | null>(null);
  const nextKeywordRef = useRef<HTMLDivElement | null>(null);

  const currentOverviewRef = useRef<HTMLDivElement | null>(null);
  const nextOverviewRef = useRef<HTMLDivElement | null>(null);

  const currentThumbsRef = useRef<HTMLDivElement | null>(null);
  const nextThumbsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isTransitioning || !nextProject) return;

    const currentKeyword = currentKeywordRef.current;
    const nextKeyword = nextKeywordRef.current;
    const currentOverview = currentOverviewRef.current;
    const nextOverview = nextOverviewRef.current;
    const currentThumbs = currentThumbsRef.current;
    const nextThumbs = nextThumbsRef.current;

    if (
      !currentKeyword ||
      !nextKeyword ||
      !currentOverview ||
      !nextOverview ||
      !currentThumbs ||
      !nextThumbs
    ) {
      return;
    }

    const tl = ProjectAnimation.createProjectDetailTransition({
      currentKeyword,
      nextKeyword,
      currentOverview,
      nextOverview,
      currentThumbs,
      nextThumbs,
      onComplete: onTransitionComplete,
    });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, nextProject, onTransitionComplete]);

  return (
    <div className="project-frame__detail">
      <div className="project-frame__detail-left">
        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">KEYWORD</h3>

          <div className="project-frame__detail-content-stack">
            <div
              key={`keyword-current-${currentProject.id}`}
              ref={currentKeywordRef}
              className="project-frame__detail-content project-frame__detail-content--current"
            >
              <p className="project-frame__detail-text">
                {currentProject.keywords.join(", ")}
              </p>
            </div>

            {isTransitioning && nextProject && (
              <div
                key={`keyword-next-${nextProject.id}`}
                ref={nextKeywordRef}
                className="project-frame__detail-content project-frame__detail-content--next"
              >
                <p className="project-frame__detail-text">
                  {nextProject.keywords.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">OVERVIEW</h3>

          <div className="project-frame__detail-content-stack">
            <div
              ref={currentOverviewRef}
              className="project-frame__detail-content project-frame__detail-content--current"
            >
              <p className="project-frame__detail-text project-frame__detail-text--overview">
                {currentProject.overview}
              </p>
            </div>

            {isTransitioning && nextProject && (
              <div
                ref={nextOverviewRef}
                className="project-frame__detail-content project-frame__detail-content--next"
              >
                <p className="project-frame__detail-text project-frame__detail-text--overview">
                  {nextProject.overview}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="project-frame__thumbs-shell">
        <div className="project-frame__thumbs-stack">
          <div
            ref={currentThumbsRef}
            className="project-frame__thumbs-layer project-frame__thumbs-layer--current"
          >
            <ProjectFrameThumbs
              id={currentProject.id}
              title={currentProject.title}
              thumbnails={currentProject.thumbnails}
            />
          </div>

          {isTransitioning && nextProject && (
            <div
              ref={nextThumbsRef}
              className="project-frame__thumbs-layer project-frame__thumbs-layer--next"
            >
              <ProjectFrameThumbs
                id={nextProject.id}
                title={nextProject.title}
                thumbnails={nextProject.thumbnails}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
