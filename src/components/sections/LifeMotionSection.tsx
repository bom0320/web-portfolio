"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotion";
import { createLifeMotionTween } from "@/components/animations/lifeMotion";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const items = [...LIFE_MOTION_ITEMS, ...LIFE_MOTION_ITEMS];

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const controller = createLifeMotionTween(track);
    const st = ScrollTrigger.create({
      trigger: viewport,
      start: "top bottom",
      end: () => `+=${controller.distance * 2.5}`,
      scrub: 1.5,
      onUpdate: (self) => controller.setProgress(self.progress),
    });

    return () => {
      st.kill();
      controller.destroy();
    };
  }, []);

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__viewport" ref={viewportRef}>
        <div className="life-motion__track" ref={trackRef}>
          {items.map((item, index) => (
            <figure key={`${item.id}-${index}`} className="life-motion__item">
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
          ))}
        </div>
      </div>
    </section>
  );
}
