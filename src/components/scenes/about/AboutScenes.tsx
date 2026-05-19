import { AboutHeroScene, SkillsScene } from ".";

export default function AboutScenes() {
  return (
    <div
      className="about-scenes js-about-scenes"
      style={{
        transform: "translateY(100vh) scale(0.98)",
        visibility: "hidden",
      }}
    >
      <AboutHeroScene />
      <SkillsScene />
    </div>
  );
}
