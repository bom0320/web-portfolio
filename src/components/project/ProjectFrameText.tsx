"use client";

import { useLayoutEffect, useRef } from "react";
import { ProjectItem } from "@/data/projects";
import ProjectAnimation from "../animations/project";
import gsap from "gsap";
interface ProjectFrameTextProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
}

export default function ProjectFrameText({
  currentProject,
  nextProject,
  isTransitioning,
}: ProjectFrameTextProps) {
  const currentTextRef = useRef<HTMLDivElement | null>(null);
  const nextTextRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isTransitioning) {
      if (currentTextRef.current) {
        gsap.set(currentTextRef.current, { clearProps: "all" });
      }
      return;
    }

    if (!nextProject) return;

    const currentText = currentTextRef.current;
    const nextText = nextTextRef.current;

    if (!currentText || !nextText) return;

    const tl = ProjectAnimation.createProjectHeroTextTransition({
      currentText,
      nextText,
    });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, nextProject, currentProject.id]);

  return (
    <div className="project-frame__info-stack">
      <div
        key={`current-${currentProject.id}`}
        ref={currentTextRef}
        className="project-frame__info project-frame__info--current"
      >
        <p className="project-frame__category">{currentProject.category}</p>
        <h2 className="project-frame__title">{currentProject.title}</h2>

        <dl className="project-frame__meta">
          <div className="project-frame__meta-row">
            <dt>작업기간</dt>
            <dd>{currentProject.period}</dd>
          </div>
          <div className="project-frame__meta-row">
            <dt>기여도</dt>
            <dd>{currentProject.contribution}</dd>
          </div>
          <div className="project-frame__meta-row">
            <dt>프레임워크</dt>
            <dd>{currentProject.stack.join(", ")}</dd>
          </div>
        </dl>

        <button className="project-frame__button">View More</button>
      </div>

      {isTransitioning && nextProject && (
        <div
          key={`next-${nextProject.id}`}
          ref={nextTextRef}
          className="project-frame__info project-frame__info--next"
        >
          <p className="project-frame__category">{nextProject.category}</p>
          <h2 className="project-frame__title">{nextProject.title}</h2>

          <dl className="project-frame__meta">
            <div className="project-frame__meta-row">
              <dt>작업기간</dt>
              <dd>{nextProject.period}</dd>
            </div>
            <div className="project-frame__meta-row">
              <dt>기여도</dt>
              <dd>{nextProject.contribution}</dd>
            </div>
            <div className="project-frame__meta-row">
              <dt>프레임워크</dt>
              <dd>{nextProject.stack.join(", ")}</dd>
            </div>
          </dl>

          <button className="project-frame__button">View More</button>
        </div>
      )}
    </div>
  );
}
