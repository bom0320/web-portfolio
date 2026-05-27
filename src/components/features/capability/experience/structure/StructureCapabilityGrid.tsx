import type { StructureCapabilityItem } from "@/data/capability/experience";

type StructureCapabilityGridProps = {
  items: StructureCapabilityItem[];
};

export default function StructureCapabilityGrid({
  items,
}: StructureCapabilityGridProps) {
  return (
    <div className="experience-capability-structure-grid">
      {items.map((item) => (
        <article key={item.id} className="experience-capability-structure-card">
          <div className="experience-capability-structure-card__top">
            <span className="experience-capability-structure-card__index">
              {item.index}
            </span>

            <span className="experience-capability-structure-card__line" />
          </div>

          <h3 className="experience-capability-structure-card__title">
            {item.title}
          </h3>

          <p className="experience-capability-structure-card__message">
            {item.message}
          </p>

          <p className="experience-capability-structure-card__desc">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
