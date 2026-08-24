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
    <div className="project-detail-content">
      <article className="project-detail-content__sections">{children}</article>

      <aside className="project-detail-content__sidebar">
        <ProjectDetailNav items={navItems} />
      </aside>
    </div>
  );
}
