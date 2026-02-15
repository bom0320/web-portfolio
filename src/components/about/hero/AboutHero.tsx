"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutTitle from "./AboutTitle";
import AboutAnimation from "@/components/animations/about";
import CtaButton from "./CtaButton";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fillGroup = fillGroupRef.current;
    if (!section || !fillGroup) return;

    const ctx = gsap.context(() => {
      const titleTween = AboutAnimation.aboutTitleFill(fillGroup);
      const DecorTween = AboutAnimation.aboutDecorEnter();
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom top",
        onEnter: () => {
          titleTween.play();
          DecorTween.play();
        },
        onLeaveBack: () => {
          titleTween.pause(0);
          DecorTween.pause(0);
        },
        // markers: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-hero">
      <div className="about-hero__decor">
        <img className="decor decor--sun" src="/images/about/sun.png" alt="" />

        <img
          className="decor decor--stars"
          src="/images/about/stars.png"
          alt=""
        />

        {/* ⭐ 왼쪽 하단용 stars 추가 */}
        <img
          className="decor decor--stars2"
          src="/images/about/stars.png"
          alt=""
        />

        <img
          className="decor decor--heart"
          src="/images/about/heart.png"
          alt=""
        />
      </div>

      <div className="about-hero__inner">
        <AboutTitle fillGroupRef={fillGroupRef} />

        <p className="about-hero__desc">
          FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고 의미 있는
          경험을 만드는 것을 목표로 합니다. FrontEnd 개발자 김봄입니다. 사용자가
          즐길 수 있는 직관적이고 의미 있는
        </p>

        <div className="about-hero__cta">
          <CtaButton href="https://..." label="Go Resume" variant="primary" />
          <CtaButton href="https://github.com/..." label="Go Github" />
        </div>
      </div>
    </section>
  );
}
