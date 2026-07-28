"use client";

import type { Dispatch, SetStateAction } from "react";

import {
  ProjectsNavigatorIntro,
  ProjectsNavigatorList,
  ProjectsNavigatorMonitor,
} from "@/components/features/projects";
import type { ProjectItem } from "@/data/projects";

interface ProjectsNavigatorSceneProps {
  items: ProjectItem[];
  activeIndex: number;
  visibleIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
  onPreviewIndexChange: Dispatch<SetStateAction<number | null>>;
}

export default function ProjectsNavigatorScene({
  items,
  activeIndex,
  visibleIndex,
  onActiveIndexChange,
  onPreviewIndexChange,
}: ProjectsNavigatorSceneProps) {
  return (
    <section className="projects-navigator js-projects-navigator">
      <div className="projects-navigator__inner">
        <ProjectsNavigatorIntro />

        <div
          id="projects"
          className="projects-navigator__anchor"
          aria-hidden="true"
        />

        <div className="projects-navigator-pin js-projects-navigator-pin">
          <div className="projects-navigator-pin__inner">
            <div className="projects-navigator-showcase">
              <div className="projects-navigator-showcase__left">
                <ProjectsNavigatorList
                  items={items}
                  activeIndex={activeIndex}
                  visibleIndex={visibleIndex}
                  onActiveIndexChange={onActiveIndexChange}
                  onPreviewIndexChange={onPreviewIndexChange}
                />
              </div>

              <div className="projects-navigator-showcase__right">
                <ProjectsNavigatorMonitor
                  items={items}
                  activeIndex={visibleIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
