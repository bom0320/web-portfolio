import type { ProjectItem } from "@/data/projects";
import type { ProjectDetailSection } from "@/data/projects/projectDetailItems";

import ProjectDetailSectionView from "./ProjectDetailSection";

interface ProjectDetailContentProps {
  item: ProjectItem;
  sections: ProjectDetailSection[];
}

export default function ProjectDetailContent({
  item,
  sections,
}: ProjectDetailContentProps) {
  return (
    <div className="project-detail-content">
      <div className="project-detail-content__sections">
        {sections.map((section) => (
          <ProjectDetailSectionView
            key={section.id}
            item={item}
            section={section}
          />
        ))}
      </div>
    </div>
  );
}
