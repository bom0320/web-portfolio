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

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const handlePrevious = () => {
    if (filteredItems.length <= 1) return;

    setActiveIndex((current) =>
      current === 0 ? filteredItems.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    if (filteredItems.length <= 1) return;

    setActiveIndex((current) =>
      current === filteredItems.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="projects-showcase">
      <div className="projects-showcase__inner">
        <ProjectsShowcaseIntro />

        <ProjectsFilter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <ProjectsCarousel
          items={filteredItems}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />

        <ProjectsControls
          activeIndex={activeIndex}
          total={filteredItems.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
