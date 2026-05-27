import type { StructureCapabilityItem } from "@/data/capability/experience";

type StructureCapabilityMapProps = {
  items: StructureCapabilityItem[];
};

export default function StructureCapabilityMap({
  items,
}: StructureCapabilityMapProps) {
  return (
    <div className="experience-capability-structure-map">
      <div className="experience-capability-structure-map__glow" />

      <div className="experience-capability-structure-map__core">
        <span>Readable</span>
        <strong>Flow</strong>
      </div>

      <div className="experience-capability-structure-map__stem" />
      <div className="experience-capability-structure-map__branch" />

      <div className="experience-capability-structure-map__items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`experience-capability-structure-map__node experience-capability-structure-map__node--${
              index + 1
            }`}
          >
            <span className="experience-capability-structure-map__node-label">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
