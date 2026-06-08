import type { StructureCapabilityItem } from "@/data/capability/experience";

import { STRUCTURE_ICON_MAP } from "./structureCapabilityIconMap";

type StructureCapabilityGridProps = {
  items: StructureCapabilityItem[];
};

export default function StructureCapabilityGrid({
  items,
}: StructureCapabilityGridProps) {
  return (
    <div className="experience-capability-grid experience-capability-grid--structure js-structure-capability-grid">
      {items.map((item) => {
        const Icon = STRUCTURE_ICON_MAP[item.icon];

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
