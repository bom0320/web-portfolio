import type { BuildStructureItem } from "@/data/build";

import { BUILD_STRUCTURE_ICON_MAP } from "./buildStructureIconMap";

type BuildStructureGridProps = {
  items: BuildStructureItem[];
};

export default function BuildStructureGrid({ items }: BuildStructureGridProps) {
  return (
    <div className="experience-capability-grid experience-capability-grid--structure js-structure-capability-grid">
      {items.map((item) => {
        const Icon = BUILD_STRUCTURE_ICON_MAP[item.icon];

        return (
          <article
            key={item.id}
            className="experience-capability-card js-structure-capability-card"
          >
            <div className="experience-capability-card__icon js-structure-capability-card-icon">
              <Icon aria-hidden="true" />
            </div>

            <div className="experience-capability-card__content">
              <h3 className="experience-capability-card__title js-structure-capability-card-title">
                {item.title}
              </h3>

              <p className="experience-capability-card__message js-structure-capability-card-message">
                {item.message}
              </p>

              <p className="experience-capability-card__desc js-structure-capability-card-desc">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
