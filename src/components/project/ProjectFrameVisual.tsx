import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectFrameVisualProps {
  currentProject: ProjectItem;
  nextProject: ProjectItem | null;
  isTransitioning: boolean;
}

export default function ProjectFrameVisual({
  currentProject,
}: ProjectFrameVisualProps) {
  return (
    <div className="project-frame__visual">
      <div className="project-frame__monitor">
        <div className="project-frame__screen">
          <Image
            src={currentProject.heroImage}
            alt={currentProject.title}
            fill
            className="project-frame__screen-image"
          />
        </div>

        <Image
          src="/images/projects/monitor-frame.png"
          alt=""
          fill
          className="project-frame__monitor-frame"
        />
      </div>
    </div>
  );
}
