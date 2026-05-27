import type { StructureCapabilityItem } from "@/data/capability/experience";

import { STRUCTURE_ICON_MAP } from "./structureCapabilityIconMap";

type StructureCapabilityGridProps = {
  items: StructureCapabilityItem[];
};

export default function StructureCapabilityGrid({
  items,
}: StructureCapabilityGridProps) {
  return (
    <div className="experience-capability-structure-grid">
      {items.map((item) => {
        const Icon = STRUCTURE_ICON_MAP[item.icon];

        return (
          <article
            key={item.id}
            className="experience-capability-structure-card"
          >
            <div className="experience-capability-structure-card__icon">
              <Icon aria-hidden="true" />
            </div>

            <div className="experience-capability-structure-card__content">
              <h3 className="experience-capability-structure-card__title">
                {item.title}
              </h3>

              <p className="experience-capability-structure-card__message">
                {item.message}
              </p>

              <p className="experience-capability-structure-card__desc">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
