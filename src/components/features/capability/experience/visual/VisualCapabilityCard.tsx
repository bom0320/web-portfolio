import Image from "next/image";
import { useId } from "react";
import type { CSSProperties } from "react";

import type { VisualCapabilityItem } from "@/data/capability/experience";

import { VISUAL_ICON_MAP } from "./visualCapabilityIconMap";

type VisualCapabilityCardProps = {
  item: VisualCapabilityItem;
};

export default function VisualCapabilityCard({
  item,
}: VisualCapabilityCardProps) {
  const rawId = useId();
  const gradientId = `visual-icon-gradient-${rawId.replace(/:/g, "")}`;

  const Icon = VISUAL_ICON_MAP[item.icon];
  const hasImage = Boolean(item.image);

  const style = item.accent
    ? ({
        "--visual-icon-gradient": `url(#${gradientId})`,
      } as CSSProperties)
    : undefined;

  return (
    <article
      style={style}
      className={`experience-capability-visual-card experience-capability-visual-card--${
        item.id
      } experience-capability-visual-card--${item.variant} ${
        item.accent ? "experience-capability-visual-card--accent" : ""
      }`}
    >
      {item.accent ? (
        <svg
          className="experience-capability-visual-card__gradient-def"
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a8fff1" />
              <stop offset="45%" stopColor="#62f3dd" />
              <stop offset="100%" stopColor="#1bb7a6" />
            </linearGradient>
          </defs>
        </svg>
      ) : null}

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
