"use client";

import { useState } from "react";
import ProjectShowcase from "@/components/project/ProjectShowcase";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [activeIndex] = useState(0);

  const activeProject = PROJECTS[activeIndex];

  if (!activeProject) return null;

  return (
    <section id="projects" className="projects-section">
      <ProjectShowcase project={activeProject} />
    </section>
  );
}
