"use client";

import Image from "next/image";

import { PROJECTS_NAVIGATOR_MONITOR_FRAME } from "@/assets/projectsImages";
import type { ProjectItem } from "@/data/projects";

interface ProjectsNavigatorMonitorProps {
  items: ProjectItem[];
  activeIndex: number;
}

export default function ProjectsNavigatorMonitor({
  items,
  activeIndex,
}: ProjectsNavigatorMonitorProps) {
  return (
    <div className="projects-navigator-monitor">
      <div className="projects-navigator-monitor__stage">
        <Image
          src={PROJECTS_NAVIGATOR_MONITOR_FRAME}
          alt=""
          width={900}
          height={700}
          className="projects-navigator-monitor__mockup"
          priority
        />

        <div className="projects-navigator-monitor__screen">
          <div className="projects-navigator-monitor__viewport">
            {items.map((item, index) => (
              <Image
                key={item.id}
                src={item.heroImage}
                alt={`${item.title} preview`}
                fill
                className={`projects-navigator-monitor__screen-image ${
                  index === activeIndex ? "is-active" : ""
                }`}
                sizes="(max-width: 640px) 220vw, (max-width: 900px) 124vw, 520px"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
