import { ProjectItem } from "@/data/projects";
import ProjectShowcaseText from "./ProjectFrameText";
import ProjectShowcaseVisual from "./ProjectFrameVisual";
import ProjectShowcaseDetail from "./ProjectFrameDetail";

interface ProjectShowcaseProps {
  project: ProjectItem;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div
      className={`project-showcase project-showcase--${project.background}`}
      style={{ "--project-accent": project.themeColor } as React.CSSProperties}
    >
      <div className="project-showcase__hero">
        <ProjectShowcaseText project={project} />
        <ProjectShowcaseVisual project={project} />
      </div>

      <ProjectShowcaseDetail project={project} />
    </div>
  );
}
