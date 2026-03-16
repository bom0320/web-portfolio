import { ProjectItem } from "@/data/projects";
import ProjectFrameText from "./ProjectFrameText";
import ProjectFrameVisual from "./ProjectFrameVisual";
import ProjectFrameDetail from "./ProjectFrameDetail";

interface ProjectFrameProps {
  project: ProjectItem;
}

export default function ProjectFrame({ project }: ProjectFrameProps) {
  return (
    <div className="project-frame">
      <div className="project-frame__surface">
        <div
          className={`project-frame__hero project-frame__hero--${project.background}`}
          style={
            { "--project-accent": project.themeColor } as React.CSSProperties
          }
        >
          <ProjectFrameText project={project} />
          <ProjectFrameVisual project={project} />
        </div>

        <ProjectFrameDetail project={project} />
      </div>
    </div>
  );
}
