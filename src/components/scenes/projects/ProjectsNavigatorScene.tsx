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
    <section className="capability-navigator js-capability-navigator">
      <div className="capability-navigator__inner">
        <ProjectsNavigatorIntro />

        <div
          id="projects"
          className="capability-navigator__anchor"
          aria-hidden="true"
        />

        <div className="capability-navigator-pin js-capability-navigator-pin">
          <div className="capability-navigator-pin__inner">
            <div className="capability-navigator-showcase">
              <div className="capability-navigator-showcase__left">
                <ProjectsNavigatorList
                  items={items}
                  activeIndex={activeIndex}
                  visibleIndex={visibleIndex}
                  onActiveIndexChange={onActiveIndexChange}
                  onPreviewIndexChange={onPreviewIndexChange}
                />
              </div>

              <div className="capability-navigator-showcase__right">
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
