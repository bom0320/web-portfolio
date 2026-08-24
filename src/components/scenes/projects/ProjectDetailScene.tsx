import {
  ProjectDetailContent,
  ProjectDetailHero,
  ProjectDetailNav,
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
  const hasSections = sections.length > 0;

  return (
    <div className="project-detail-scene">
      {hasSections && (
        <aside className="project-detail-scene__nav">
          <ProjectDetailNav sections={sections} />
        </aside>
      )}

      <div className="project-detail-scene__hero js-project-detail-hero">
        <ProjectDetailHero item={item} />
      </div>

      {hasSections && <ProjectDetailContent item={item} sections={sections} />}
    </div>
  );
}
