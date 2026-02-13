"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutTitle from "./AboutTitle";
import AboutAnimation from "@/components/animations/about";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fillGroup = fillGroupRef.current;
    if (!section || !fillGroup) return;

    const ctx = gsap.context(() => {
      // 이제 opacity 애니메이션 트윈이 나옴
      const tween = AboutAnimation.aboutTitleFill(fillGroup);
      // fillGroup을 어떻게 움직일지(애니메이션 계획)를 만들고, 그 계획(tween)을 저장해둔다.
      ScrollTrigger.create({
        trigger: section,
        // section
        start: "top 70%",
        end: "bottom top",
        onEnter: () => tween.play(),
        onLeaveBack: () => tween.pause(0),
        markers: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-hero">
      <div className="about-hero__inner">
        <AboutTitle fillGroupRef={fillGroupRef} />

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
