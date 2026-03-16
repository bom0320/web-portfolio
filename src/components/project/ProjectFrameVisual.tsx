import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectFrameVisualProps {
  project: ProjectItem;
}

export default function ProjectFrameVisual({
  project,
}: ProjectFrameVisualProps) {
  return (
    <div className="project-frame__visual">
      <div className="project-frame__monitor">
        <div className="project-frame__screen">
          <Image
            src={project.heroImage}
            alt={project.title}
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
