"use client";

import Image from "next/image";

const LIFE_MOTION_ITEMS = [
  {
    id: 1,
    src: "/images/life/arduino.jpg",
    title: "1. Moments in Between",
    caption: "개발을 배우는 시간 사이사이에,\n카페의 조명과 노트",
  },
  {
    id: 2,
    src: "/images/life/02.jpg",
    title: "1. Moments in Between",
  },
  {
    id: 3,
    src: "/images/life/03.jpg",
    title: "1. Moments in Between",
  },
  {
    id: 4,
    src: "/images/life/04.jpg",
    title: "1. Moments in Between",
  },
  {
    id: 5,
    src: "/images/life/05.jpg",
    title: "1. Moments in Between",
  },
];

export default function LifeMotionSection() {
  return (
    <section className="life-motion" id="life">
      <div className="life-motion__inner">
        {/* 섹션 타이틀 (맨 왼쪽에 한 번만) */}
        <h2 className="life-motion__section-title">Life in Motion</h2>

        {/* 가로 스크롤 트랙 */}
        <div className="life-motion__track">
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

                {/* 첫 카드만 아래에 문장 보여주는 구조 */}
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
