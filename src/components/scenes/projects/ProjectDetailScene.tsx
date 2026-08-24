import {
  ProjectDetailContent,
  ProjectDetailHero,
} from "@/components/features/projects/detail";
import type { ProjectItem } from "@/data/projects";
import type { ProjectDetailSection } from "@/data/projects/projectDetailItems";

interface ProjectDetailSceneProps {
  item: ProjectItem;
  sections: ProjectDetailSection[];
}

export default function ProjectDetailScene({
  item,
  sections,
}: ProjectDetailSceneProps) {
  return (
    <div className="project-detail-scene">
      <div className="project-detail-scene__hero js-project-detail-hero">
        <ProjectDetailHero item={item} />
      </div>

      {sections.length > 0 && (
        <ProjectDetailContent item={item} sections={sections} />
      )}
    </div>
  );
}
