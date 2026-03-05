"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SkillTitle from "./SkillTitle";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/data/skills";

export default function AboutSkills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    const fillGroup = fillGroupRef.current;
    if (!root || !fillGroup) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillGroup,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, ease: "none" }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-skills" ref={sectionRef}>
      <div className="about-skills__inner">
        <SkillTitle fillGroupRef={fillGroupRef} />

        <div className="about-skills__grid">
          {SKILLS.map((s) => (
            <SkillCard
              key={s.name}
              name={s.name}
              icon={s.icon}
              value={s.value}
              sub={s.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
