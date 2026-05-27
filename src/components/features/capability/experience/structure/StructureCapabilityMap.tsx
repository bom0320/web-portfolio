import {
  ArrowLeftRight,
  Boxes,
  Component,
  GitBranch,
  Palette,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

import type {
  StructureCapabilityIcon,
  StructureCapabilityItem,
} from "@/data/capability/experience";

type StructureCapabilityMapProps = {
  items: StructureCapabilityItem[];
};

const STRUCTURE_ICON_MAP: Record<StructureCapabilityIcon, LucideIcon> = {
  hierarchy: GitBranch,
  components: Component,
  "users-group": UsersRound,
  "arrows-exchange": ArrowLeftRight,
  ripple: Waves,
  palette: Palette,
};

export default function StructureCapabilityMap({
  items,
}: StructureCapabilityMapProps) {
  return (
    <div className="experience-capability-structure-map">
      <div className="experience-capability-structure-map__glow" />

      <div className="experience-capability-structure-map__core">
        <Boxes aria-hidden="true" />
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
