import { AboutHeroScene, InterviewScene, SkillsScene } from ".";

export default function AboutScenes() {
  return (
    <div className="about-scenes js-about-scenes">
      <AboutHeroScene />
      <InterviewScene />
      <SkillsScene />
    </div>
  );
}
