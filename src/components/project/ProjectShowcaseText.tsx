import { ProjectItem } from "@/data/projects";

interface ProjectShowcaseTextProps {
  project: ProjectItem;
}

export default function ProjectShowcaseText({
  project,
}: ProjectShowcaseTextProps) {
  return (
    <div className="project-showcase__info">
      <p className="project-showcase__category">{project.category}</p>

      <h2 className="project-showcase__title">{project.title}</h2>

      <dl className="project-showcase__meta">
        <div className="project-showcase__meta-row">
          <dt>작업기간</dt>
          <dd>{project.period}</dd>
        </div>

        <div className="project-showcase__meta-row">
          <dt>기여도</dt>
          <dd>{project.contribution}</dd>
        </div>

        <div className="project-showcase__meta-row">
          <dt>프레임워크</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
      </dl>

      <button type="button" className="project-showcase__button">
        View More
      </button>
    </div>
  );
}
