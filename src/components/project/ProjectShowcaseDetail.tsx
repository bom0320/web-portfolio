import { ProjectItem } from "@/data/projects";
import ProjectShowcaseThumbs from "./ProjectShowcaseThumbs";

interface ProjectShowcaseDetailProps {
  project: ProjectItem;
}

export default function ProjectShowcaseDetail({
  project,
}: ProjectShowcaseDetailProps) {
  return (
    <div className="project-showcase__detail">
      <div className="project-showcase__detail-left">
        <div className="project-showcase__text-block">
          <h3 className="project-showcase__detail-title">KEYWORD</h3>
          <p className="project-showcase__detail-text">
            {project.keywords.join(", ")}
          </p>
        </div>

        <div className="project-showcase__text-block">
          <h3 className="project-showcase__detail-title">OVERVIEW</h3>
          <p className="project-showcase__detail-text">{project.overview}</p>
        </div>
      </div>

      <ProjectShowcaseThumbs
        id={project.id}
        title={project.title}
        thumbnails={project.thumbnails}
      />
    </div>
  );
}
