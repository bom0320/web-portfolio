import type { BuildStructureItem } from "@/data/build";

import {
  BUILD_STRUCTURE_CORE_ICON,
  BUILD_STRUCTURE_ICON_MAP,
} from "./buildStructureIconMap";

type BuildStructureMapProps = {
  items: BuildStructureItem[];
};

export default function BuildStructureMap({ items }: BuildStructureMapProps) {
  const CoreIcon = BUILD_STRUCTURE_CORE_ICON;

  return (
    <div className="build-experience-structure-map js-build-structure-map">
      <div className="build-experience-structure-map__core js-build-structure-core">
        <CoreIcon aria-hidden="true" />
      </div>

      <div className="build-experience-structure-map__stem js-build-structure-stem" />
      <div className="build-experience-structure-map__branch js-build-structure-branch" />

      <div className="build-experience-structure-map__items">
        {items.map((item, index) => {
          const Icon = BUILD_STRUCTURE_ICON_MAP[item.icon];

          return (
            <div
              key={item.id}
              className={`build-experience-structure-map__node build-experience-structure-map__node--${
                index + 1
              } js-build-structure-node`}
            >
              <Icon aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
