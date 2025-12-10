"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import BomWaveTitle from "../hero/BomWaveTitle";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1) BOM's 타이틀 등장
      tl.from(".js-hero-bom", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 2) PORTFOLIO
      tl.from(
        ".js-hero-title",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // 3) 설명문
      tl.from(
        ".js-hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // 4) 캐릭터
      tl.from(
        ".js-hero-character",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        {/* 왼쪽 텍스트 영역 */}
        <div className="hero__content">
          <div className="hero__title-group">
            <div className="hero-title">
              <BomWaveTitle />
            </div>
            <h1 className="hero__title-line2 js-hero-title">PORTFOLIO</h1>
          </div>

          <p className="hero__subtitle js-hero-sub">構 造 ———— 設 計 者</p>

          <p className="hero__description js-hero-desc">
            안녕하세요. 사용자의 불편을 구조적으로 이해하고, 디테일한 경험을
            구현하는 프론트엔드 개발자 김봄입니다.
          </p>
        </div>

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
