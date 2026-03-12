import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectShowcaseVisualProps {
  project: ProjectItem;
}

export default function ProjectShowcaseVisual({
  project,
}: ProjectShowcaseVisualProps) {
  return (
    <div className="project-showcase__visual">
      <div className="project-showcase__monitor">
        <div className="project-showcase__screen">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="project-showcase__screen-image"
            sizes="(max-width: 1024px) 80vw, 50vw"
          />
        </div>

        <Image
          src="/images/projects/monitor-frame.png"
          alt=""
          fill
          className="project-showcase__monitor-frame"
          priority
        />
      </div>
    </div>
  );
}
