"use client";

import type { ProjectDetailNavItem } from "@/data/projects";

import { useProjectDetailNav } from "./useProjectDetailNav";

interface ProjectDetailNavProps {
  items: ProjectDetailNavItem[];
}

export default function ProjectDetailNav({ items }: ProjectDetailNavProps) {
  const {
    activeId,
    activeParentId,
    activeRailId,
    railHeadings,
    handleNavigate,
  } = useProjectDetailNav(items);

  return (
    <nav className="project-detail-nav" aria-label="프로젝트 상세 목차">
      <div className="project-detail-nav__rail" aria-hidden="true">
        {railHeadings.map((heading) => (
          <span
            key={heading.id}
            className={[
              "project-detail-nav__tick",
              `project-detail-nav__tick--h${heading.level}`,
              activeRailId === heading.id ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      <div className="project-detail-nav__panel" data-lenis-prevent>
        <div className="project-detail-nav__list">
          {items.map((item) => {
            const isParentActive = activeParentId === item.id;

            return (
              <div
                key={item.id}
                className={[
                  "project-detail-nav__group",
                  isParentActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <a
                  href={`#${item.id}`}
                  className="project-detail-nav__parent"
                  onClick={(event) => handleNavigate(event, item.id)}
                >
                  <span className="project-detail-nav__parent-number">
                    {item.number}
                  </span>

                  <span className="project-detail-nav__parent-label">
                    {item.label}
                  </span>
                </a>

                {item.children?.length ? (
                  <div className="project-detail-nav__children">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={`#${child.id}`}
                        className={[
                          "project-detail-nav__child",
                          activeId === child.id ? "is-active" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={(event) => handleNavigate(event, child.id)}
                      >
                        <span className="project-detail-nav__child-number">
                          {child.number}
                        </span>

                        <span className="project-detail-nav__child-label">
                          {child.label}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
