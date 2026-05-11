"use client";

import Image from "next/image";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotions";

export default function LifeMotionSection() {
  const items = Array.from({ length: 5 }, () => LIFE_MOTION_ITEMS).flat();

  const topItems = items.filter((_, index) => index % 2 === 0);
  const bottomItems = items.filter((_, index) => index % 2 === 1);

  const renderItem = (
    item: (typeof LIFE_MOTION_ITEMS)[number],
    index: number
  ) => {
    return (
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
  };

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__enter js-life-motion-enter">
        <div className="life-motion__viewport js-life-motion-viewport">
          <div className="life-motion__track">
            <div className="life-motion__row life-motion__row--top js-life-motion-top">
              {topItems.map(renderItem)}
            </div>

            <div className="life-motion__row life-motion__row--bottom js-life-motion-bottom">
              {bottomItems.map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
