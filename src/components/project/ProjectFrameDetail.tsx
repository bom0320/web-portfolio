import { ProjectItem } from "@/data/projects";
import ProjectFrameThumbs from "./ProjectFrameThumbs";
interface ProjectFrameDetailProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export default function ProjectFrameDetail({
  currentProject,
}: ProjectFrameDetailProps) {
  return (
    <div className="project-frame__detail">
      <div className="project-frame__detail-left">
        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">KEYWORD</h3>
          <p className="project-frame__detail-text">
            {currentProject.keywords.join(", ")}
          </p>
        </div>

        <div className="project-frame__text-block">
          <h3 className="project-frame__detail-title">OVERVIEW</h3>
          <p className="project-frame__detail-text project-frame__detail-text--overview">
            {currentProject.overview}
          </p>
        </div>
      </div>

      <ProjectFrameThumbs
        id={currentProject.id}
        title={currentProject.title}
        thumbnails={currentProject.thumbnails}
      />
    </div>
  );
}
