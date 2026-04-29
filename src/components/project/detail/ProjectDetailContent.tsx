import type { ProjectItem } from "@/data/projects";

interface ProjectDetailContentProps {
  project: ProjectItem;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <section className="project-detail-content">
      <div className="project-detail-content__block">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </div>

      <div className="project-detail-content__grid">
        <div className="project-detail-content__meta">
          <h3>Period</h3>
          <p>{project.period}</p>
        </div>

        <div className="project-detail-content__meta">
          <h3>Contribution</h3>
          <p>{project.contribution}</p>
        </div>

        <div className="project-detail-content__meta">
          <h3>Role</h3>
          <p>{project.role}</p>
        </div>

        <div className="project-detail-content__meta">
          <h3>Stack</h3>
          <p>{project.stack.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}
