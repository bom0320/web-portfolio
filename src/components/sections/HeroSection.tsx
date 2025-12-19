"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import BomWaveTitle from "../hero/BomWaveTitle";
import HeroAnimation from "../animations/hero";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HeroAnimation.intro();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__title-group">
            <div className="hero-title">
              <BomWaveTitle />
            </div>
            <h1 className="hero__title-line2 js-hero-title">PORTFOLIO</h1>
          </div>

          <div className="hero__subtitle js-hero-sub">
            <span className="text">構 造</span>
            <span className="line"></span>
            <span className="text">設 計 者</span>
          </div>

          <p className="hero__description js-hero-desc">
            안녕하세요. 사용자의 불편을 구조적으로 이해하고, <br />
            디테일한 경험을 구현하는 프론트엔드 개발자 김봄입니다.
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
