"use client";

import type { Dispatch, SetStateAction } from "react";

import type { CapabilityNavigatorItem } from "@/data/capability";

import {
  CapabilityNavigatorIntro,
  CapabilityNavigatorList,
  CapabilityNavigatorMonitor,
} from "@/components/features/capability/navigator";

interface CapabilityNavigatorSceneProps {
  items: CapabilityNavigatorItem[];
  activeIndex: number;
  visibleIndex: number;
  onPreviewIndexChange: Dispatch<SetStateAction<number | null>>;
}

export default function CapabilityNavigatorScene({
  items,
  activeIndex,
  visibleIndex,
  onPreviewIndexChange,
}: CapabilityNavigatorSceneProps) {
  return (
    <section className="capability-navigator js-capability-navigator">
      <div className="capability-navigator__inner">
        <CapabilityNavigatorIntro />

        <div
          id="capability-navigator"
          className="capability-navigator__anchor"
          aria-hidden="true"
        />

        <div className="capability-navigator-pin js-capability-navigator-pin">
          <div className="capability-navigator-pin__inner">
            <div className="capability-navigator-showcase">
              <div className="capability-navigator-showcase__left">
                <CapabilityNavigatorList
                  items={items}
                  activeIndex={activeIndex}
                  visibleIndex={visibleIndex}
                  onPreviewIndexChange={onPreviewIndexChange}
                />
              </div>

              <div className="capability-navigator-showcase__right">
                <CapabilityNavigatorMonitor
                  items={items}
                  activeIndex={visibleIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
