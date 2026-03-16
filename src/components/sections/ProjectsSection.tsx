"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectFrame from "../project/ProjectFrame";
import { PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function getProjectIndex(progress: number, total: number) {
  return Math.min(total - 1, Math.floor(progress * total));
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      let lastIndex = 0;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (PROJECTS.length - 1)}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextIndex = getProjectIndex(self.progress, PROJECTS.length);

          if (nextIndex !== lastIndex) {
            lastIndex = nextIndex;
            setCurrentIndex(nextIndex);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <ProjectFrame project={PROJECTS[currentIndex]} />
    </section>
  );
}
