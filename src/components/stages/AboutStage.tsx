"use client";

import AboutHeroScene from "../scenes/about/AboutHeroScene";
import InterviewScene from "../scenes/about/InterviewScene";
import SkillsScene from "../scenes/about/SkillsScene";

export default function AboutStage() {
  return (
    <section id="about" className="about">
      <AboutHeroScene />
      <InterviewScene />
      <SkillsScene />
    </section>
  );
}
