import type { ProjectItem } from "@/data/projects";

interface ProjectDetailMetaProps {
  item: ProjectItem;
}

export default function ProjectDetailMeta({ item }: ProjectDetailMetaProps) {
  return (
    <dl className="project-detail-hero__meta">
      <div className="project-detail-hero__meta-row">
        <dt className="project-detail-hero__meta-label">Period</dt>
        <dd className="project-detail-hero__meta-value">{item.period}</dd>
      </div>

      <div className="project-detail-hero__meta-row">
        <dt className="project-detail-hero__meta-label">Role</dt>
        <dd className="project-detail-hero__meta-value">{item.role}</dd>
      </div>

      {item.team && (
        <div className="project-detail-hero__meta-row">
          <dt className="project-detail-hero__meta-label">Team</dt>
          <dd className="project-detail-hero__meta-value">{item.team}</dd>
        </div>
      )}

      <div className="project-detail-hero__meta-row">
        <dt className="project-detail-hero__meta-label">Stack</dt>
        <dd className="project-detail-hero__meta-value">
          {item.stack.join(" · ")}
        </dd>
      </div>
    </dl>
  );
}
