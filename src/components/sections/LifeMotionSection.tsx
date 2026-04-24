"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";
import LifeMotionAnimation from "../animations/lifeMotion";

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const topTrackRef = useRef<HTMLDivElement | null>(null);
  const bottomTrackRef = useRef<HTMLDivElement | null>(null);

  const items = [...LIFE_MOTION_ITEMS, ...LIFE_MOTION_ITEMS];

  const topItems = items.filter((_, index) => index % 2 === 0);
  const bottomItems = items.filter((_, index) => index % 2 === 1);

  const spanPattern = [6, 7, 8, 6, 7];
  const ratioPattern = [0.9, 1.15, 1.0, 1.35, 1.2];

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const topTrack = topTrackRef.current;
    const bottomTrack = bottomTrackRef.current;

    if (!viewport || !topTrack || !bottomTrack) return;

    const controller = LifeMotionAnimation.track(
      topTrack,
      bottomTrack,
      viewport
    );

    const st = ScrollTrigger.create({
      trigger: viewport,
      start: "top bottom",
      end: () => `+=${controller.distance * 2.5}`,
      scrub: 1.5,
      onUpdate: (self) => controller.setProgress(self.progress),
      invalidateOnRefresh: true,
      onRefresh: () => controller.refresh(),
    });

    ScrollTrigger.refresh();

    return () => {
      st.kill();
      controller.destroy();
    };
  }, []);

  const renderItem = (
    item: (typeof LIFE_MOTION_ITEMS)[number],
    index: number
  ) => {
    const span = spanPattern[index % spanPattern.length];
    const ratio = ratioPattern[index % ratioPattern.length];

    return (
      <figure
        key={`${item.id}-${index}`}
        className="life-motion__item"
        style={
          {
            "--span": span,
            "--mobile-span": Math.max(5, span - 2),
            "--ratio": ratio,
          } as React.CSSProperties
        }
      >
        <p className="life-motion__title">{item.title}</p>
        <div className="life-motion__image-wrap">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="life-motion__image"
            sizes="(max-width: 768px) 70vw, 260px"
          />
        </div>
      </figure>
    );
  };

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__viewport" ref={viewportRef}>
        <div className="life-motion__track">
          <div
            className="life-motion__row life-motion__row--top"
            ref={topTrackRef}
          >
            {topItems.map(renderItem)}
          </div>

          <div
            className="life-motion__row life-motion__row--bottom"
            ref={bottomTrackRef}
          >
            {bottomItems.map(renderItem)}
          </div>
        </div>
      </div>
    </section>
  );
}
