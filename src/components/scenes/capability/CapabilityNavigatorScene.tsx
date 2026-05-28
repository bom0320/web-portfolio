"use client";

import type { CapabilityNavigatorItem } from "@/data/capability";

import {
  CapabilityNavigatorIntro,
  CapabilityNavigatorList,
  CapabilityNavigatorMonitor,
} from "@/components/features/capability/navigator";

interface CapabilityNavigatorSceneProps {
  items: CapabilityNavigatorItem[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function CapabilityNavigatorScene({
  items,
  activeIndex,
  onActiveIndexChange,
}: CapabilityNavigatorSceneProps) {
  return (
    <section
      id="capability-navigator"
      className="capability-navigator js-capability-navigator"
    >
      <div className="capability-navigator-showcase">
        <div className="capability-navigator-showcase__left">
          <CapabilityNavigatorIntro />

          <CapabilityNavigatorList
            items={items}
            activeIndex={activeIndex}
            onActiveIndexChange={onActiveIndexChange}
          />
        </div>

        <div className="capability-navigator-showcase__right">
          <CapabilityNavigatorMonitor items={items} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}
