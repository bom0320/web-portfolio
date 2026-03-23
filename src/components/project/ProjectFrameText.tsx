"use client";

import { ProjectItem } from "@/data/projects";

interface ProjectFrameTextProps {
  project: ProjectItem;
  showButton?: boolean;
}

export default function ProjectFrameText({
  project,
  showButton = true,
}: ProjectFrameTextProps) {
  return (
    <div className="project-frame__info">
      <p className="project-frame__category">{project.category}</p>
      <h2 className="project-frame__title">{project.title}</h2>

      <dl className="project-frame__meta">
        <div className="project-frame__meta-row">
          <dt>작업기간</dt>
          <dd>{project.period}</dd>
        </div>
        <div className="project-frame__meta-row">
          <dt>기여도</dt>
          <dd>{project.contribution}</dd>
        </div>
        <div className="project-frame__meta-row">
          <dt>프레임워크</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
      </dl>

      {showButton && (
        <button className="project-frame__button">View More</button>
      )}
    </div>
  );
}
