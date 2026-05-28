import Image from "next/image";

import type { VisualCapabilityItem } from "@/data/capability/experience";

import { VISUAL_ICON_MAP } from "./visualCapabilityIconMap";

type VisualCapabilityCardProps = {
  item: VisualCapabilityItem;
};

export default function VisualCapabilityCard({
  item,
}: VisualCapabilityCardProps) {
  const Icon = VISUAL_ICON_MAP[item.icon];
  const hasImage = Boolean(item.image);

  return (
    <article
      className={`experience-capability-visual-card experience-capability-visual-card--${item.id} experience-capability-visual-card--${item.variant}`}
    >
      {hasImage && item.image ? (
        <div className="experience-capability-visual-card__media">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="experience-capability-visual-card__image"
          />
        </div>
      ) : null}

      <div className="experience-capability-visual-card__overlay" />

      <div className="experience-capability-visual-card__content">
        <div className="experience-capability-visual-card__icon">
          <Icon aria-hidden="true" />
        </div>

        <h3 className="experience-capability-visual-card__title">
          {item.title}
        </h3>

        {item.description ? (
          <p className="experience-capability-visual-card__desc">
            {item.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
