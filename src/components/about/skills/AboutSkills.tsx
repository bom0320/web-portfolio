import SkillCard from "./SkillCard";

const SKILLS = [
  {
    name: "Next.js",
    icon: "/images/logo/next.svg",
    value: 80,
    sub: "20080320",
  },
  { name: "React", icon: "/images/logo/react.svg", value: 75, sub: "20080320" },
  {
    name: "JavaScript",
    icon: "/images/logo/js.svg",
    value: 85,
    sub: "20080320",
  },
  {
    name: "Zustand",
    icon: "/images/logo/zustand.svg",
    value: 70,
    sub: "20080320",
  },
  {
    name: "TypeScript",
    icon: "/images/logo/ts.svg",
    value: 78,
    sub: "20080320",
  },
];

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
