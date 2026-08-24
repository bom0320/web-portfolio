import type { ReactNode } from "react";

interface ProjectDetailSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export default function ProjectDetailSection({
  id,
  eyebrow,
  title,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section id={id} className="project-detail-section">
      <div className="project-detail-section__heading">
        {eyebrow && (
          <p className="project-detail-section__eyebrow">{eyebrow}</p>
        )}

        <h2 className="project-detail-section__title">{title}</h2>
      </div>

      <div className="project-detail-section__body">{children}</div>
    </section>
  );
}
