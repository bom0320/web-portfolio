import type { VisualCapabilityItem } from "@/data/capability/experience";

import { VISUAL_ICON_MAP } from "./visualCapabilityIconMap";
type VisualCapabilityCardProps = {
  item: VisualCapabilityItem;
  index: number;
};

export default function VisualCapabilityCard({
  item,
  index,
}: VisualCapabilityCardProps) {
  const Icon = VISUAL_ICON_MAP[item.icon];

  return (
    <article className="experience-capability-visual-card">
      <div className="experience-capability-visual-card__media">
        <div className="experience-capability-visual-card__media-grid" />

        <div className="experience-capability-visual-card__badge">
          <Icon aria-hidden="true" />
        </div>

        <span className="experience-capability-visual-card__type">
          {item.imageType}
        </span>
      </div>

      <div className="experience-capability-visual-card__body">
        <span className="experience-capability-visual-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="experience-capability-visual-card__subtitle">
          {item.subtitle}
        </span>

        <h3 className="experience-capability-visual-card__title">
          {item.title}
        </h3>

        <p className="experience-capability-visual-card__message">
          {item.message}
        </p>

        <p className="experience-capability-visual-card__desc">
          {item.description}
        </p>
      </div>
    </article>
  );
}
