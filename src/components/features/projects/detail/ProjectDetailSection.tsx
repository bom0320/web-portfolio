import type { ReactNode } from "react";

interface ProjectDetailSectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function ProjectDetailSection({
  id,
  label,
  title,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section
      id={id}
      className="project-detail-section"
      data-project-detail-section
    >
      <div className="project-detail-section__heading">
        <h2 className="project-detail-section__label">{label}</h2>
        <h3 className="project-detail-section__title">{title}</h3>
      </div>

      <div className="project-detail-section__body">{children}</div>
    </section>
  );
}
