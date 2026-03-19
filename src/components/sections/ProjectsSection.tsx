"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const [displayIndex, setDisplayIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const displayIndexRef = useRef(displayIndex);
  const incomingIndexRef = useRef<number | null>(incomingIndex);
  const isTransitioningRef = useRef(isTransitioning);

  useEffect(() => {
    displayIndexRef.current = displayIndex;
  }, [displayIndex]);

  useEffect(() => {
    incomingIndexRef.current = incomingIndex;
  }, [incomingIndex]);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastIndex = 0;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * (PROJECTS.length - 1)}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const nextIndex = getProjectIndex(self.progress, PROJECTS.length);

        if (nextIndex === lastIndex) return;
        lastIndex = nextIndex;

        if (isTransitioningRef.current) return;
        if (nextIndex === displayIndexRef.current) return;

        setIncomingIndex(nextIndex);
        setIsTransitioning(true);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleTransitionComplete = () => {
    if (incomingIndexRef.current === null) return;

    setDisplayIndex(incomingIndexRef.current);
    setIncomingIndex(null);
    setIsTransitioning(false);
  };

  const nextProject = incomingIndex !== null ? PROJECTS[incomingIndex] : null;

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <ProjectFrame
        currentProject={PROJECTS[displayIndex]}
        nextProject={nextProject}
        isTransitioning={isTransitioning}
        onTransitionComplete={handleTransitionComplete}
      />
    </section>
  );
}
