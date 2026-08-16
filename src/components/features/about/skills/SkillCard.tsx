import type { ComponentType } from "react";
import {
  Boxes,
  Component,
  DatabaseZap,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Type,
} from "lucide-react";

import type { Skill, SkillCategoryIcon } from "@/data/skills";

type Props = {
  skill: Skill;
  isActive: boolean;
  onActivate: () => void;
};

type CategoryIconComponent = ComponentType<{
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  "aria-hidden"?: boolean;
}>;

const CATEGORY_ICON_MAP: Record<SkillCategoryIcon, CategoryIconComponent> = {
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
      <span className="skill-card__collapsed-name">{skill.name}</span>

      <span className="skill-card__collapsed-meta" aria-hidden="true">
        <CategoryIcon size={14} strokeWidth={1.7} />
      </span>

      <div className="skill-card__expanded">
        <div className="skill-card__expanded-copy">
          <h3 className="skill-card__expanded-title">{skill.name}</h3>

          <p className="skill-card__expanded-desc">{skill.description}</p>
        </div>

        <div className="skill-card__expanded-footer">
          <span className="skill-card__category-meta">
            <CategoryIcon size={14} strokeWidth={1.7} aria-hidden={true} />
            <span>{skill.category}</span>
          </span>
        </div>
      </div>
    </button>
  );
}
