import type { ReactNode } from "react";

import type { ProjectDetailNavItem } from "@/data/projects";

import ProjectDetailNav from "./ProjectDetailNav";

interface ProjectDetailContentProps {
  navItems: ProjectDetailNavItem[];
  children: ReactNode;
}

export default function ProjectDetailContent({
  navItems,
  children,
}: ProjectDetailContentProps) {
  return (
    <div className="project-detail-content js-project-detail-content">
      <aside className="project-detail-content__sidebar js-project-detail-nav">
        <ProjectDetailNav items={navItems} />
      </aside>

      <div className="project-detail-content__sections">{children}</div>
    </div>
  );
}
