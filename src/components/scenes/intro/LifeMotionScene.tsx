"use client";

import { useMemo } from "react";

import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import {
  LifeMotionItem,
  createLifeMotionGroups,
} from "@/components/features/lifeMotion";

const REPEAT_IN_GROUP = 8;

export default function LifeMotionScene() {
  const { topGroupItems, bottomGroupItems } = useMemo(() => {
    return createLifeMotionGroups(LIFE_MOTION_ITEMS, REPEAT_IN_GROUP);
  }, []);

  return (
    <section className="life-motion js-intro-life-motion" id="life">
      <div className="life-motion__enter js-life-motion-enter">
        <div className="life-motion__viewport js-life-motion-viewport">
          <div className="life-motion__canvas js-life-motion-canvas">
            <div className="life-motion__track js-life-motion-track">
              <div className="life-motion__row-window life-motion__row-window--top js-life-motion-top">
                <div className="life-motion__row">
                  <div className="life-motion__group">
                    {topGroupItems.map((item, index) => (
                      <LifeMotionItem key={`${item.id}-${index}`} item={item} />
                    ))}
                  </div>

                  <div className="life-motion__group" aria-hidden="true">
                    {topGroupItems.map((item, index) => (
                      <LifeMotionItem
                        key={`clone-${item.id}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="life-motion__row-window life-motion__row-window--bottom js-life-motion-bottom">
                <div className="life-motion__row">
                  <div className="life-motion__group">
                    {bottomGroupItems.map((item, index) => (
                      <LifeMotionItem key={`${item.id}-${index}`} item={item} />
                    ))}
                  </div>

                  <div className="life-motion__group" aria-hidden="true">
                    {bottomGroupItems.map((item, index) => (
                      <LifeMotionItem
                        key={`clone-${item.id}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
