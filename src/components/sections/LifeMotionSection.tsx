"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import LifeMotionAnimation from "@/components/animations/lifeMotion";
import LifeMotionItem from "@/components/lifeMotion/LifeMotionItem";
import { createLifeMotionGroups } from "@/components/lifeMotion/lifeMotion.utils";

gsap.registerPlugin(ScrollTrigger);

const REPEAT_IN_GROUP = 8;

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const topWindowRef = useRef<HTMLDivElement | null>(null);
  const bottomWindowRef = useRef<HTMLDivElement | null>(null);

  const { topGroupItems, bottomGroupItems } = useMemo(() => {
    return createLifeMotionGroups(LIFE_MOTION_ITEMS, REPEAT_IN_GROUP);
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const topWindow = topWindowRef.current;
    const bottomWindow = bottomWindowRef.current;

    if (!viewport || !topWindow || !bottomWindow) return;

    const trackController = LifeMotionAnimation.track({
      topWindow,
      bottomWindow,
    });

    trackController.setProgress(0);

    const scrollTrigger = ScrollTrigger.create({
      trigger: viewport,
      start: "bottom top",
      end: "top bottom",
      scrub: 2.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        trackController.setProgress(self.progress);
      },
    });

    return () => {
      scrollTrigger.kill();
      trackController.destroy();
    };
  }, []);

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__enter js-life-motion-enter">
        <div
          className="life-motion__viewport js-life-motion-viewport"
          ref={viewportRef}
        >
          <div className="life-motion__track">
            <div
              className="life-motion__row-window life-motion__row-window--top"
              ref={topWindowRef}
            >
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

            <div
              className="life-motion__row-window life-motion__row-window--bottom"
              ref={bottomWindowRef}
            >
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
    </section>
  );
}
