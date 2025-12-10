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
        {/* 왼쪽 텍스트 영역 */}
        <div className="hero__content">
          {/* 타이틀 그룹 */}
          <div className="hero__title-group">
            {/* 메인 텍스트 2줄 */}
            <h1 className="hero-title">
              <span className="hero-title__outline">BOM’s</span>
              <span className="hero-title__fill">BOM’s</span>
            </h1>
            <h1 className="hero__title-line2 js-hero-title">PORTFOLIO</h1>
          </div>

          {/* 얇은 서브텍스트 */}
          <p className="hero__subtitle js-hero-sub">構 造 ———— 設 計 者</p>

          {/* 설명 */}
          <p className="hero__description js-hero-desc">
            안녕하세요. 사용자의 불편을 구조적으로 이해하고, 디테일한 경험을
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
