import {
  Boxes,
  Component,
  DatabaseZap,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Type,
  type LucideIcon,
} from "lucide-react";

import type { Skill, SkillCategoryIcon } from "@/data/skills";

type Props = {
  skill: Skill;
  isActive: boolean;
  onActivate: () => void;
};

const CATEGORY_ICON_MAP: Record<SkillCategoryIcon, LucideIcon> = {
  framework: Boxes,
  ui: Component,
  typing: Type,
  "server-state": DatabaseZap,
  "client-state": SlidersHorizontal,
  mobile: Smartphone,
  interaction: Sparkles,
};

export default function SkillCard({ skill, isActive, onActivate }: Props) {
  const CategoryIcon = CATEGORY_ICON_MAP[skill.categoryIcon];

  return (
    <button
      type="button"
      className={`skill-card${isActive ? " is-active" : ""}`}
      aria-expanded={isActive}
      aria-label={`${skill.name} 활용 범위 보기`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <span className="skill-card__name">{skill.name}</span>

      <span className="skill-card__collapsed-meta" aria-hidden="true">
        <CategoryIcon size={16} strokeWidth={1.7} />
      </span>

      <div className="skill-card__expanded">
        <p className="skill-card__description">{skill.description}</p>

        <div className="skill-card__expanded-footer">
          <span className="skill-card__category-meta">
            <CategoryIcon size={16} strokeWidth={1.7} aria-hidden={true} />
            <span>{skill.category}</span>
          </span>
        </div>
      </div>
    </button>
  );
}
