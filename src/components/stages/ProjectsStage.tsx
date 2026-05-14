"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/projects";
import ProjectShowcaseScene from "../scenes/projects/ProjectShowcaseScene";

gsap.registerPlugin(ScrollTrigger);

function getProjectIndex(progress: number, total: number) {
  return Math.round(progress * (total - 1));
}

export default function ProjectsStage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * (PROJECTS.length - 1) * 1.8}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const nextIndex = getProjectIndex(self.progress, PROJECTS.length);
        setActiveIndex(nextIndex);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <ProjectShowcaseScene
        projects={PROJECTS}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
      />
    </section>
  );
}
