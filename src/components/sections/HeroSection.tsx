"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import HeroAnimation from "@/components/animations/hero";

export default function HeroSection() {
  useLayoutEffect(() => {
    HeroAnimation.play();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        {/* 왼쪽 텍스트 */}
        <div className="hero__content">
          <div className="hero__title-wrap">
            <h1 className="hero__title js-hero-title">PORTFOLIO</h1>
            <span className="hero__year js-hero-year">2026</span>
          </div>

          <p className="hero__description js-hero-desc">
            안녕하세요 사용자의 불편을 구조적으로 이해하고, 디테일한 경험을
            구현하는 프론트엔드 개발자 김봄입니다.
          </p>
        </div>

        {/* 오른쪽 캐릭터 */}
        <div className="hero__visual">
          <div className="hero__character js-hero-character">
            <Image
              src="/images/hero-character.png"
              alt="hero character"
              fill
              priority
            />
          </div>
          <div className="hero__shadow" />
        </div>
      </div>
    </section>
  );
}
