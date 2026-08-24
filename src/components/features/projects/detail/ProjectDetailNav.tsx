import type { ProjectDetailSection } from "@/data/projects/projectDetailItems";

interface ProjectDetailNavProps {
  sections: ProjectDetailSection[];
  activeId?: string;
}

export default function ProjectDetailNav({
  sections,
  activeId,
}: ProjectDetailNavProps) {
  return (
    <nav className="project-detail-nav" aria-label="프로젝트 상세 목차">
      {sections.map((section) => {
        const isActive = activeId === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`project-detail-nav__item ${
              isActive ? "is-active" : ""
            }`}
          >
            <span className="project-detail-nav__number">{section.number}</span>

            <span className="project-detail-nav__line" />

            <span className="project-detail-nav__label">{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
