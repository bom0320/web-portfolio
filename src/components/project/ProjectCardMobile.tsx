"use client";

import { ProjectItem } from "@/data/projects";
import ProjectFrameText from "./ProjectFrameText";
import ProjectFrameVisual from "./ProjectFrameVisual";
import ProjectFrameThumbs from "./ProjectFrameThumbs";

interface ProjectCardMobileProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCardMobile({
  project,
  className,
}: ProjectCardMobileProps) {
  return (
    <div
      className={`project-mobile-card project-mobile-card--${project.tone} ${
        className ?? ""
      }`}
      style={
        {
          "--project-accent": project.themeColor,
          backgroundColor: project.background,
        } as React.CSSProperties
      }
    >
      <div className="project-mobile-card__hero">
        <ProjectFrameText project={project} showButton={false} />
        <ProjectFrameVisual project={project} />
      </div>

      <div className="project-mobile-card__body">
        <div className="project-mobile-card__section">
          <h3 className="project-mobile-card__section-title">KEYWORD</h3>
          <p className="project-mobile-card__section-text">
            {project.keywords.join(", ")}
          </p>
        </div>

        <div className="project-mobile-card__section">
          <h3 className="project-mobile-card__section-title">OVERVIEW</h3>
          <p className="project-mobile-card__section-text project-mobile-card__section-text--overview">
            {project.overview}
          </p>
        </div>

        <div className="project-mobile-card__thumbs">
          <ProjectFrameThumbs
            id={project.id}
            title={project.title}
            thumbnails={project.thumbnails}
          />
        </div>

        <button className="project-mobile-card__button">View More</button>
      </div>
    </div>
  );
}
