import { ProjectItem } from "@/data/projects";

interface ProjectFrameTextProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
}

export default function ProjectFrameText({
  currentProject,
}: ProjectFrameTextProps) {
  return (
    <div className="project-frame__info">
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

      <button type="button" className="project-frame__button">
        View More
      </button>
    </div>
  );
}
