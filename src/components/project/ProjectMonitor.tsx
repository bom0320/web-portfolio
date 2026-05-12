"use client";

import Image from "next/image";
import type { ProjectItem } from "@/data/projects";

interface ProjectMonitorProps {
  projects: ProjectItem[];
  activeIndex: number;
}

export default function ProjectMonitor({
  projects,
  activeIndex,
}: ProjectMonitorProps) {
  return (
    <div className="project-monitor">
      <div className="project-monitor__stage">
        <div className="project-monitor__screen">
          {projects.map((project, index) => (
            <Image
              key={project.id}
              src={project.monitorImage}
              alt={`${project.title} preview`}
              fill
              className={`project-monitor__screen-image ${
                index === activeIndex ? "is-active" : ""
              }`}
              sizes="(max-width: 1024px) 70vw, 680px"
              priority={index === 0}
            />
          ))}
        </div>

        <Image
          src="/images/projects/project-monitor-mockup01.png"
          alt=""
          width={900}
          height={700}
          className="project-monitor__mockup"
          priority
        />
      </div>
    </div>
  );
}
