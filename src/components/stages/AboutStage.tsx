"use client";

import { AboutHeroScene, InterviewScene, SkillsScene } from "../scenes";

export default function AboutStage() {
  return (
    <section id="about" className="about">
      <AboutHeroScene />
      <InterviewScene />
      <SkillsScene />
    </section>
  );
}
