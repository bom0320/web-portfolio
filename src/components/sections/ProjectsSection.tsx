"use client";

import ProjectShowcase from "@/components/project/ProjectShowcase";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const activeProject = PROJECTS[0];

  if (!activeProject) return null;

  return (
    <section id="projects" className="projects-section">
      <ProjectShowcase project={activeProject} />
    </section>
  );
}
