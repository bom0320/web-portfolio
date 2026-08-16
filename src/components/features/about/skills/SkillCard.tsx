import Image from "next/image";

import type { Skill } from "@/data/skills";

type Props = {
  skill: Skill;
  index: number;
  isActive: boolean;
  onActivate: () => void;
};

export default function SkillCard({
  skill,
  index,
  isActive,
  onActivate,
}: Props) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      className={`skill-card ${isActive ? "is-active" : ""}`}
      aria-expanded={isActive}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <div className="skill-card__collapsed">
        <span className="skill-card__number">{number}</span>
        <span className="skill-card__vertical-name">{skill.name}</span>
      </div>

      <div className="skill-card__expanded">
        <div className="skill-card__head">
          <div
            className="skill-card__icon-wrap"
            style={{ backgroundColor: skill.bg }}
          >
            <Image
              src={skill.icon}
              alt=""
              width={30}
              height={30}
              className="skill-card__icon"
            />
          </div>

          <span className="skill-card__number">{number}</span>
        </div>

        <div className="skill-card__content">
          <p className="skill-card__category">{skill.category}</p>
          <h3 className="skill-card__name">{skill.name}</h3>

          <p className="skill-card__description">{skill.description}</p>
        </div>

        <div className="skill-card__projects">
          <span>USED IN</span>
          <p>{skill.projects.join(" · ")}</p>
        </div>
      </div>
    </button>
  );
}
