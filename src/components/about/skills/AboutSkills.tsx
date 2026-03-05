"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SkillTitle from "./SkillTitle";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/data/skills";
import SkillAnimation from "@/components/animations/skill";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSkills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fillGroup = fillGroupRef.current;
    if (!section || !fillGroup) return;

    const ctx = gsap.context(() => {
      const titleTween = SkillAnimation.createSkillTitleFill(fillGroup);
      const introTween = SkillAnimation.intro(section);

      ScrollTrigger.create({
        trigger: section,
        start: "top 74%",
        end: "bottom top",
        onEnter: () => {
          titleTween.play();
          introTween.play();
        },
        onLeaveBack: () => {
          titleTween.pause(0);
          introTween.pause(0);
        },
      });
    }, section);

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
              bg={s.bg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
