import { ProjectItem } from "@/data/projects";
import ProjectShowcaseText from "./ProjectShowcaseText";
import ProjectShowcaseVisual from "./ProjectShowcaseVisual";
import ProjectShowcaseThumbs from "./ProjectShowcaseThumbs";

interface ProjectShowcaseProps {
  project: ProjectItem;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <section
      className={`project-showcase project-showcase--${project.background}`}
      style={{ "--project-accent": project.themeColor } as React.CSSProperties}
    >
      <div className="project-showcase__hero">
        <ProjectShowcaseText project={project} />
        <ProjectShowcaseVisual project={project} />
      </div>

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
    </section>
  );
}
