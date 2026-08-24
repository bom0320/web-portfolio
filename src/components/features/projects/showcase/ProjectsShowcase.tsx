"use client";

import { useMemo, useState } from "react";

import type { ProjectItem } from "@/data/projects";

import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsControls from "./ProjectsControls";
import ProjectsFilter, { type ProjectFilter } from "./ProjectsFilter";
import ProjectsShowcaseIntro from "./ProjectsShowcaseIntro";

interface ProjectsShowcaseProps {
  items: ProjectItem[];
}

export default function ProjectsShowcase({ items }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }

    return items.filter((item) => item.stack.includes(activeFilter));
  }, [items, activeFilter]);

  const total = filteredItems.length;

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const handlePrevious = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const handleNext = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  return (
    <section className="projects-showcase">
      <div className="projects-showcase__inner">
        <ProjectsShowcaseIntro />

        <div className="projects-showcase__explorer">
          <ProjectsFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <div className="projects-showcase__carousel-area">
            <ProjectsCarousel
              items={filteredItems}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
            />

            <ProjectsControls
              total={total}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
