import { ProjectsShowcase } from "@/components/features/projects";
import type { ProjectItem } from "@/data/projects";

interface ProjectsShowcaseSceneProps {
  items: ProjectItem[];
}

export default function ProjectsShowcaseScene({
  items,
}: ProjectsShowcaseSceneProps) {
  return (
    <section className="projects-showcase-scene">
      <ProjectsShowcase items={items} />
    </section>
  );
}
