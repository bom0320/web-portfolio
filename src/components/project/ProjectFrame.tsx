import { ProjectItem } from "@/data/projects";
import ProjectFrameText from "./ProjectFrameText";
import ProjectFrameVisual from "./ProjectFrameVisual";
import ProjectFrameDetail from "./ProjectFrameDetail";

interface ProjectFrameProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export default function ProjectFrame({
  currentProject,
  nextProject,
  isTransitioning,
  onTransitionComplete,
}: ProjectFrameProps) {
  return (
    <div className="project-frame">
      <div className="project-frame__surface">
        <div
          className={`project-frame__hero project-frame__hero--${currentProject.background}`}
          style={
            {
              "--project-accent": currentProject.themeColor,
            } as React.CSSProperties
          }
        >
          <ProjectFrameText
            currentProject={currentProject}
            nextProject={nextProject}
            isTransitioning={isTransitioning}
          />

          <ProjectFrameVisual
            currentProject={currentProject}
            nextProject={nextProject}
            isTransitioning={isTransitioning}
          />
        </div>

        <ProjectFrameDetail
          currentProject={currentProject}
          nextProject={nextProject}
          isTransitioning={isTransitioning}
          onTransitionComplete={onTransitionComplete}
        />
      </div>
    </div>
  );
}
