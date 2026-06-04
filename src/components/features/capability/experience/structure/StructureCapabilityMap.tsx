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
    <div className="experience-capability-structure-map js-structure-capability-map">
      <div className="experience-capability-structure-map__core js-structure-capability-core">
        <CoreIcon aria-hidden="true" />
      </div>

      <div className="experience-capability-structure-map__stem js-structure-capability-stem" />
      <div className="experience-capability-structure-map__branch js-structure-capability-branch" />

      <div className="experience-capability-structure-map__items">
        {items.map((item, index) => {
          const Icon = STRUCTURE_ICON_MAP[item.icon];

          return (
            <div
              key={item.id}
              className={`experience-capability-structure-map__node experience-capability-structure-map__node--${
                index + 1
              } js-structure-capability-node`}
            >
              <Icon aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
