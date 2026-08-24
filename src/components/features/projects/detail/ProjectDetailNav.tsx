import type { ProjectDetailNavItem } from "@/data/projects";

interface ProjectDetailNavProps {
  items: ProjectDetailNavItem[];
  activeId?: string;
}

export default function ProjectDetailNav({
  items,
  activeId,
}: ProjectDetailNavProps) {
  return (
    <nav className="project-detail-nav" aria-label="프로젝트 상세 목차">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`project-detail-nav__item ${
              isActive ? "is-active" : ""
            }`}
          >
            <span className="project-detail-nav__number">{item.number}</span>

            <span className="project-detail-nav__line" />

            <span className="project-detail-nav__label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
