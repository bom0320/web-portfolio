"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import BomWaveTitle from "../hero/BomWaveTitle";
import HeroAnimation from "../animations/hero";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      HeroAnimation.intro(section);

      const exitController = HeroAnimation.exit(section);
      exitController.setProgress(0);

      const exitTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1200",
        scrub: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          exitController.setProgress(self.progress);
        },
      });

      return () => {
        exitTrigger.kill();
        exitController.destroy();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__title-group js-hero-exit-item">
            <div className="hero-title">
              <BomWaveTitle />
            </div>

            <h1 className="hero__title-line2">PORTFOLIO</h1>
          </div>

          <h2
            className="hero__role js-hero-exit-item"
            aria-label="Frontend Developer"
          >
            <span className="hero__role-track">
              <span className="hero__role-text js-hero-role-text" />
              <span className="hero__caret js-hero-caret" aria-hidden="true">
                |
              </span>
            </span>
          </h2>

          <p className="hero__description js-hero-exit-item">
            <span className="hero__desc--desktop">
              FrontEnd 개발자 김봄입니다. FrontEnd 개발자 김봄입니다. FrontEnd
              개발자 김봄입니다. FrontEnd 개발자 김봄입니다. FrontEnd 개발자
              김봄입니다.FrontEnd 개발자 김봄입니다. FrontEnd 개발자 김봄입니다.
              개발자 김봄입니다.
            </span>

            <span className="hero__desc--mobile" aria-hidden="true">
              FrontEnd 개발자 김봄입니다. FrontEnd 개발자 김봄입니다. FrontEnd
              개발자 김봄입니다. 개발자 김봄입니다.
            </span>
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
        </div>
      </div>
    </section>
  );
}
