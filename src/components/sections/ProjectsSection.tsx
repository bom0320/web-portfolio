"use client";

import { useState } from "react";
import ProjectShowcase from "@/components/project/ProjectShowcase";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0); //TODO: 스크롤 연결
  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div
        className="projects-section__scroll-space"
        style={{ height: `${PROJECTS.length * 100}vh` }}
      >
        <div className="projects-section__stage">
          <ProjectShowcase project={currentProject} />
        </div>
      </div>
    </section>
  );
}
