"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import BomWaveTitle from "../hero/BomWaveTitle";
import HeroAnimation from "../animations/hero";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      HeroAnimation.intro(root);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        <div className="hero__content">
          {/* TITLE */}
          <div className="hero__title-group">
            {/* BOM's */}
            <div className="hero-title js-hero-title1">
              <BomWaveTitle />
            </div>

            {/* PORTFOLIO */}
            <h1 className="hero__title-line2 js-hero-title2">PORTFOLIO</h1>
          </div>

          {/* ROLE (typing illusion + caret) */}
          <h2 className="hero__role js-hero-role">
            <span className="hero__role-text js-hero-role-text">
              Frontend Developer
            </span>
            <span className="hero__caret js-hero-caret" aria-hidden="true">
              |
            </span>
          </h2>

          {/* DESC (라인 스태거용) */}
          <p className="hero__description js-hero-desc">
            <span className="js-hero-desc-line">
              FrontEnd 개발자 김봄입니다. FrontEnd 개발자 김봄입니다. FrontEnd
              ntEnd 개발자 김봄입니다. rontEnd 개발자 김봄입니다. FrontEnd ntEnd
              개발자 김봄입니다 FrontEnd 개발자 김봄입니다. FrontEnd
            </span>
          </p>
        </div>

        {/* VISUAL */}
        <div className="hero__visual">
          <div className="hero__character js-hero-character">
            <Image
              src="/images/hero-character.png"
              alt="hero character"
              fill
              priority
            />
          </div>
          <div className="hero__shadow js-hero-shadow" />
        </div>
      </div>
    </section>
  );
}
