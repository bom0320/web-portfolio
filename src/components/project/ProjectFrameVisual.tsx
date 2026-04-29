"use client";

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
            alt={`${project.title} hero image`}
            fill
            className="project-frame__screen-image"
            sizes="(max-width: 1024px) 60vw, 620px"
            priority
          />
        </div>

        <Image
          src="/images/projects/project-monitor-mockup.png"
          alt=""
          width={660}
          height={524}
          className="project-frame__monitor-frame"
          priority
        />
      </div>
    </div>
  );
}
