"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef } from "react";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotion";
import { createLifeMotionTween } from "@/components/animations/lifeMotion";
import ScrollTrigger from "gsap/ScrollTrigger";

function hash01(input: string) {
  let h = 2166136261;

  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  return (h >>> 0) / 4294967295;
}

export default function LifeMotionSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => [...LIFE_MOTION_ITEMS, ...LIFE_MOTION_ITEMS], []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const controller = createLifeMotionTween(track, viewport);
    const st = ScrollTrigger.create({
      trigger: viewport,
      start: "top bottom",
      end: () => `+=${controller.distance * 2.5}`,
      scrub: 1.5,
      onUpdate: (self) => controller.setProgress(self.progress),
      invalidateOnRefresh: true,
    });

    ScrollTrigger.refresh();
    return () => {
      st.kill();
      controller.destroy();
    };
  }, []);

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__viewport" ref={viewportRef}>
        <div className="life-motion__track" ref={trackRef}>
          {items.map((item, index) => {
            const r = hash01(`${item.id}-${index}`);

            const span = 4 + Math.floor(r * 5); // 4..8
            const ratio = (0.85 + r * 0.6).toFixed(2); // 0.85..1.45

            return (
              <figure
                key={`${item.id}-${index}`}
                className="life-motion__item"
                style={
                  {
                    ["--span"]: span,
                    ["--ratio"]: ratio,
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
          })}
        </div>
      </div>
    </section>
  );
}
