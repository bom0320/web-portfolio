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
    <section className="capability-navigator js-capability-navigator">
      <div className="capability-navigator__inner">
        <CapabilityNavigatorIntro />

        <div
          id="capability-navigator"
          className="capability-navigator-pin js-capability-navigator-pin"
        >
          <div className="capability-navigator-pin__inner">
            <div className="capability-navigator-showcase">
              <div className="capability-navigator-showcase__left">
                <CapabilityNavigatorList
                  items={items}
                  activeIndex={activeIndex}
                  onActiveIndexChange={onActiveIndexChange}
                />
              </div>

              <div className="capability-navigator-showcase__right">
                <CapabilityNavigatorMonitor
                  items={items}
                  activeIndex={activeIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
