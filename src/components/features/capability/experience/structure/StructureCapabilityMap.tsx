import type { StructureCapabilityItem } from "@/data/capability/experience";

import {
  STRUCTURE_CORE_ICON,
  STRUCTURE_ICON_MAP,
} from "./structureCapabilityIconMap";

type StructureCapabilityMapProps = {
  items: StructureCapabilityItem[];
};

export default function StructureCapabilityMap({
  items,
}: StructureCapabilityMapProps) {
  const CoreIcon = STRUCTURE_CORE_ICON;

  return (
    <div className="experience-capability-structure-map">
      <div className="experience-capability-structure-map__core">
        <CoreIcon aria-hidden="true" />
      </div>

      <div className="experience-capability-structure-map__stem" />
      <div className="experience-capability-structure-map__branch" />

      <div className="experience-capability-structure-map__items">
        {items.map((item, index) => {
          const Icon = STRUCTURE_ICON_MAP[item.icon];

          return (
            <div
              key={item.id}
              className={`experience-capability-structure-map__node experience-capability-structure-map__node--${
                index + 1
              }`}
            >
              <Icon aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
