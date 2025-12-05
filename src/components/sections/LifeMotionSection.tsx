"use client";

import Image from "next/image";
import { useRef } from "react";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotion";

export default function LifeMotionSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="life-motion" id="life">
      <div className="life-motion__inner">
        <h2 className="life-motion__section-title">Life in Motion</h2>

        <div className="life-motion__track" ref={trackRef}>
          {LIFE_MOTION_ITEMS.map((item, index) => (
            <figure className="life-motion__item" key={item.id}>
              <div className="life-motion__image-wrap">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 280px"
                />
              </div>
              <figcaption className="life-motion__meta">
                <p className="life-motion__title">{item.title}</p>
                {index === 1 && item.caption && (
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
