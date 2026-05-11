"use client";

import Image from "next/image";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";

const REPEAT_IN_GROUP = 8;

export default function LifeMotionSection() {
  const topBaseItems = LIFE_MOTION_ITEMS.filter((_, index) => index % 2 === 0);
  const bottomBaseItems = LIFE_MOTION_ITEMS.filter(
    (_, index) => index % 2 === 1
  );

  const topGroupItems = Array.from(
    { length: REPEAT_IN_GROUP },
    () => topBaseItems
  ).flat();

  const bottomGroupItems = Array.from(
    { length: REPEAT_IN_GROUP },
    () => bottomBaseItems
  ).flat();

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
        <div className="life-motion__viewport js-life-motion-viewport">
          <div className="life-motion__track">
            <div className="life-motion__row js-life-motion-top">
              <div className="life-motion__group">
                {topGroupItems.map(renderItem)}
              </div>
              <div className="life-motion__group" aria-hidden="true">
                {topGroupItems.map(renderItem)}
              </div>
            </div>

            <div className="life-motion__row js-life-motion-bottom">
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
    </section>
  );
}
