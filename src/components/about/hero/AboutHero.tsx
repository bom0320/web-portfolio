"use client";

import { useRef } from "react";
import AboutTitle from "./AboutTitle";

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  return (
    <section ref={sectionRef} className="about-hero">
      <div className="about-hero__inner">
        <AboutTitle sectionRef={sectionRef} />

        <p className="about-hero__desc">
          FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고 의미 있는
          경험을 만드는 것을 목표로 합니다. FrontEnd 개발자 김봄입니다. 사용자가
          즐길 수 있는 직관적이고 의미 있는
        </p>

        <div className="about-hero__cta">
          <a
            className="about-hero__btn about-hero__btn--primary"
            href="https://..."
            target="_blank"
            rel="noreferrer"
          >
            <span>Go Resume</span>
            <span className="about-hero__icon">→</span>
          </a>

          <a
            className="about-hero__btn"
            href="https://github.com/..."
            target="_blank"
            rel="noreferrer"
          >
            <span>Go Github</span>
            <span className="about-hero__icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
