import SkillCard from "./SkillCard";
import { SKILLS } from "@/data/skills";

export default function AboutSkills() {
  return (
    <section className="about-skills">
      <div className="about-skills__inner">
        <h2 className="about-skills__title">MY SKILLS</h2>

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
