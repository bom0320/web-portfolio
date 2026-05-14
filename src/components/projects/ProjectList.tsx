"use client";

import Link from "next/link";
import type { ProjectItem } from "@/data/projects";

interface ProjectListProps {
  projects: ProjectItem[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function ProjectList({
  projects,
  activeIndex,
  onActiveIndexChange,
}: ProjectListProps) {
  return (
    <ul className="project-list">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <li className="project-list__row" key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className={`project-list__item ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => onActiveIndexChange(index)}
              onFocus={() => onActiveIndexChange(index)}
            >
              <span className="project-list__text">
                <span className="project-list__category">
                  {project.category}
                </span>
                <span className="project-list__title">{project.title}</span>
              </span>

              <span className="project-list__icon">↗</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
