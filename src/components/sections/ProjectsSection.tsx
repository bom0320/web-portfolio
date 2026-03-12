"use client";

import ProjectShowcase from "@/components/project/ProjectShowcase";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      {PROJECTS.map((project) => (
        <ProjectShowcase key={project.id} project={project} />
      ))}
    </section>
  );
}
