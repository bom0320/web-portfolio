"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotion";
import { createLifeMotionTween } from "@/components/animations/lifeMotion";

export default function LifeMotionSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<ReturnType<typeof createLifeMotionTween> | null>(
    null
  );

  const items = [...LIFE_MOTION_ITEMS, ...LIFE_MOTION_ITEMS];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    tweenRef.current = createLifeMotionTween(el);

    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__viewport">
        <div className="life-motion__track" ref={trackRef}>
          {items.map((item, index) => (
            <figure
              key={`${item.id}-${index}`}
              className="life-motion__item"
              onMouseEnter={pause}
              onMouseLeave={resume}
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

              <figcaption className="life-motion__meta">
                {item.caption && (
                  <p className="life-motion__caption">
                    {item.caption.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
