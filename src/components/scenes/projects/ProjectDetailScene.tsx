import type { ReactNode } from "react";

import {
  ProjectDetailContent,
  ProjectDetailHero,
  ProjectDetailNav,
} from "@/components/features/projects/detail";
import type { ProjectDetailNavItem, ProjectItem } from "@/data/projects";

interface ProjectDetailSceneProps {
  item: ProjectItem;
  navItems: ProjectDetailNavItem[];
  children: ReactNode;
}

export default function ProjectDetailScene({
  item,
  navItems,
  children,
}: ProjectDetailSceneProps) {
  const hasContent = navItems.length > 0;

  return (
    <div className="project-detail-scene">
      {hasContent && (
        <aside className="project-detail-scene__nav">
          <ProjectDetailNav items={navItems} />
        </aside>
      )}

      <div className="project-detail-scene__hero js-project-detail-hero">
        <ProjectDetailHero item={item} />
      </div>

      {hasContent && <ProjectDetailContent>{children}</ProjectDetailContent>}
    </div>
  );
}
