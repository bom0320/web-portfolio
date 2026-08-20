import Image from "next/image";
import { useId } from "react";
import type { CSSProperties } from "react";

import type { BuildVisualItem } from "@/data/build";

import { BUILD_VISUAL_ICON_MAP } from "./buildVisualIconMap";

type BuildVisualCardProps = {
  item: BuildVisualItem;
};

export default function BuildVisualCard({ item }: BuildVisualCardProps) {
  const rawId = useId();
  const gradientId = `visual-icon-gradient-${rawId.replace(/:/g, "")}`;

  const Icon = BUILD_VISUAL_ICON_MAP[item.icon];
  const hasImage = Boolean(item.image);

  const style = item.accent
    ? ({
        "--visual-icon-gradient": `url(#${gradientId})`,
      } as CSSProperties)
    : undefined;

  return (
    <article
      style={style}
      className={`build-experience-visual-card build-experience-visual-card--${
        item.id
      } build-experience-visual-card--${item.variant} ${
        item.accent ? "build-experience-visual-card--accent" : ""
      }`}
    >
      {item.accent ? (
        <svg
          className="build-experience-visual-card__gradient-def"
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
        <div className="build-experience-visual-card__media">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="
              (max-width: 640px) calc(100vw - 48px),
              (max-width: 900px) calc(100vw - 64px),
              (max-width: 1180px) calc(50vw - 62px),
              506px
            "
            className="build-experience-visual-card__image"
          />
        </div>
      ) : null}

      <div className="build-experience-visual-card__overlay" />

      <div className="build-experience-visual-card__content">
        <div className="build-experience-visual-card__icon">
          <Icon aria-hidden="true" />
        </div>

        <h3 className="build-experience-visual-card__title">{item.title}</h3>

        {item.description ? (
          <p className="build-experience-visual-card__desc">
            {item.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
