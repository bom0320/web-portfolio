"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectFrame from "../project/ProojectFrame";
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
      <div
        className="projects-section__scroll-space"
        style={{ "--project-count": PROJECTS.length } as React.CSSProperties}
      >
        <div className="projects-section__stage">
          <ProjectFrame project={PROJECTS[currentIndex]} />
        </div>
      </div>
    </section>
  );
}
