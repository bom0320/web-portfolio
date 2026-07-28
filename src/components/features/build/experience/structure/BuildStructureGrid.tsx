import type { BuildStructureItem } from "@/data/build";

import { BUILD_STRUCTURE_ICON_MAP } from "./buildStructureIconMap";

type BuildStructureGridProps = {
  items: BuildStructureItem[];
};

export default function BuildStructureGrid({ items }: BuildStructureGridProps) {
  return (
    <div className="build-experience-grid build-experience-grid--structure js-build-structure-grid">
      {items.map((item) => {
        const Icon = BUILD_STRUCTURE_ICON_MAP[item.icon];

        return (
          <article
            key={item.id}
            className="build-experience-card js-build-structure-card"
          >
            <div className="build-experience-card__icon js-build-structure-card-icon">
              <Icon aria-hidden="true" />
            </div>

            <div className="build-experience-card__content">
              <h3 className="build-experience-card__title js-build-structure-card-title">
                {item.title}
              </h3>

              <p className="build-experience-card__message js-build-structure-card-message">
                {item.message}
              </p>

              <p className="build-experience-card__desc js-build-structure-card-desc">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
