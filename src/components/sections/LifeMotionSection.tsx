"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import LifeMotionAnimation from "@/components/animations/lifeMotion";

const REPEAT_IN_GROUP = 8;

const fillToSameLength = <T,>(items: T[], targetLength: number) => {
  if (items.length === 0) return [];

  return Array.from(
    { length: targetLength },
    (_, index) => items[index % items.length]
  );
};

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const topWindowRef = useRef<HTMLDivElement | null>(null);
  const bottomWindowRef = useRef<HTMLDivElement | null>(null);

  const topTrackRef = useRef<HTMLDivElement | null>(null);
  const bottomTrackRef = useRef<HTMLDivElement | null>(null);

  const topBaseItems = LIFE_MOTION_ITEMS.filter((_, index) => index % 2 === 0);
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

  const topGroupItems = Array.from(
    { length: REPEAT_IN_GROUP },
    () => normalizedTopBaseItems
  ).flat();

  const bottomGroupItems = Array.from(
    { length: REPEAT_IN_GROUP },
    () => normalizedBottomBaseItems
  ).flat();

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const topWindow = topWindowRef.current;
    const bottomWindow = bottomWindowRef.current;
    const topTrack = topTrackRef.current;
    const bottomTrack = bottomTrackRef.current;

    if (!viewport || !topWindow || !bottomWindow || !topTrack || !bottomTrack) {
      return;
    }

    const controller = LifeMotionAnimation.track({
      viewport,
      topWindow,
      bottomWindow,
      topTrack,
      bottomTrack,
    });

    const st = ScrollTrigger.create({
      trigger: ".js-hero-life",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        controller.setProgress(self.progress);
      },
      onRefresh: () => {
        controller.refresh();
      },
    });

    return () => {
      st.kill();
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
              className="life-motion__row-window js-life-motion-top-window"
              ref={topWindowRef}
            >
              <div
                className="life-motion__row js-life-motion-top"
                ref={topTrackRef}
              >
                <div className="life-motion__group">
                  {topGroupItems.map(renderItem)}
                </div>
                <div className="life-motion__group" aria-hidden="true">
                  {topGroupItems.map(renderItem)}
                </div>
              </div>
            </div>

            <div
              className="life-motion__row-window js-life-motion-bottom-window"
              ref={bottomWindowRef}
            >
              <div
                className="life-motion__row js-life-motion-bottom"
                ref={bottomTrackRef}
              >
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
