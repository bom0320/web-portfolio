"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import LifeMotionAnimation from "@/components/animations/lifeMotion";

gsap.registerPlugin(ScrollTrigger);

const REPEAT_IN_GROUP = 8;

const fillToSameLength = <T,>(items: T[], targetLength: number) => {
  if (items.length === 0) return [];

  return Array.from(
    { length: targetLength },
    (_, index) => items[index % items.length]
  );
};

const repeatItems = <T,>(items: T[], repeatCount: number) => {
  return Array.from({ length: repeatCount }, () => items).flat();
};

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const topWindowRef = useRef<HTMLDivElement | null>(null);
  const bottomWindowRef = useRef<HTMLDivElement | null>(null);

  const { topGroupItems, bottomGroupItems } = useMemo(() => {
    const topBaseItems = LIFE_MOTION_ITEMS.filter(
      (_, index) => index % 2 === 0
    );

    const bottomBaseItems = LIFE_MOTION_ITEMS.filter(
      (_, index) => index % 2 === 1
    );

    const targetBaseLength = Math.max(
      topBaseItems.length,
      bottomBaseItems.length
    );

    const normalizedTopBaseItems = fillToSameLength(
      topBaseItems,
      targetBaseLength
    );

    const normalizedBottomBaseItems = fillToSameLength(
      bottomBaseItems,
      targetBaseLength
    );

    return {
      topGroupItems: repeatItems(normalizedTopBaseItems, REPEAT_IN_GROUP),
      bottomGroupItems: repeatItems(normalizedBottomBaseItems, REPEAT_IN_GROUP),
    };
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const topWindow = topWindowRef.current;
    const bottomWindow = bottomWindowRef.current;

    if (!viewport || !topWindow || !bottomWindow) return;

    const controller = LifeMotionAnimation.track({
      topWindow,
      bottomWindow,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: viewport,
      start: "bottom top",
      end: "top bottom",
      scrub: 2.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        controller.setProgress(self.progress);
      },
    });

    return () => {
      scrollTrigger.kill();
      controller.destroy();
    };
  }, []);

  const renderItem = (
    item: (typeof LIFE_MOTION_ITEMS)[number],
    index: number
  ) => (
    <figure key={`${item.id}-${index}`} className="life-motion__item">
      <p className="life-motion__title">{item.title}</p>

      <div className="life-motion__image-wrap">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="life-motion__image"
          sizes="420px"
        />
      </div>
    </figure>
  );

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
                  {topGroupItems.map(renderItem)}
                </div>

                <div className="life-motion__group" aria-hidden="true">
                  {topGroupItems.map(renderItem)}
                </div>
              </div>
            </div>

            <div
              className="life-motion__row-window life-motion__row-window--bottom"
              ref={bottomWindowRef}
            >
              <div className="life-motion__row">
                <div className="life-motion__group">
                  {bottomGroupItems.map(renderItem)}
                </div>

                <div className="life-motion__group" aria-hidden="true">
                  {bottomGroupItems.map(renderItem)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
