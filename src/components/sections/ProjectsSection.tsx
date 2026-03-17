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

  const [displayIndex, setDisplayIndex] = useState(0); // 지금 화면에서 확장되서 보이는 프젝
  const [incomingIndex, setIncomingIndex] = useState<number | null>(0); // 다음으로 들ㄹ어올 프젝
  const [isTransitioning, setIsTransitioning] = useState(false); // 지금 전환중인지

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

            if (nextIndex === displayIndex || isTransitioning) return;

            setIncomingIndex(nextIndex);
            setIsTransitioning(true);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [displayIndex, isTransitioning]);

  const handleTransitionComplete = () => {
    if (incomingIndex === null) return;

    setDisplayIndex(incomingIndex);
    setIncomingIndex(null);
    setIsTransitioning(false);
  };

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <ProjectFrame
        currentProject={PROJECTS[displayIndex]}
        nextProject={incomingIndex !== null ? PROJECTS[incomingIndex] : null}
        isTransitioning={isTransitioning}
        onTransitionComplete={handleTransitionComplete}
      />
    </section>
  );
}
