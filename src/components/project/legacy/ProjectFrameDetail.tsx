"use client";

import { ProjectItem } from "@/data/lagacy/projects";
import ProjectFrameThumbs from "./ProjectFrameThumbs";

interface ProjectFrameDetailProps {
  project: ProjectItem;
}

export default function ProjectFrameDetail({
  project,
}: ProjectFrameDetailProps) {
  return (
    <div className="project-frame__detail">
      <div className="project-frame__detail-left">
        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">KEYWORD</h3>
          <div className="project-frame__detail-content">
            <p className="project-frame__detail-text">
              {project.keywords.join(", ")}
            </p>
          </div>
        </div>

        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">OVERVIEW</h3>
          <div className="project-frame__detail-content">
            <p className="project-frame__detail-text project-frame__detail-text--overview">
              {project.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="project-frame__thumbs-shell">
        <ProjectFrameThumbs
          id={project.id}
          title={project.title}
          thumbnails={project.thumbnails}
        />
      </div>
    </div>
  );
}
