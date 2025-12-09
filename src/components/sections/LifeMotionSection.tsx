"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LIFE_MOTION_ITEMS } from "@/data/lifeMotion";

export default function LifeMotionSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const items = [...LIFE_MOTION_ITEMS, ...LIFE_MOTION_ITEMS];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    tweenRef.current = gsap.to(el, {
      xPercent: -100,
      repeat: -1,
      duration: 70,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    return () => {
      tweenRef.current?.kill();
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
                <p className="life-motion__title">{item.title}</p>

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
