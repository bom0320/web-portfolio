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
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fillGroup = fillGroupRef.current;
    const desc = descRef.current;

    if (!section || !fillGroup || !desc) return;

    const ctx = gsap.context(() => {
      const titleTween = AboutAnimation.createTitleFill(fillGroup);
      const DecorTween = AboutAnimation.createDecorEnter(section);
      const decsTween = AboutAnimation.createDescDiagonalReveal(desc);

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 35%",
          scrub: 1.2,
          // markers: true,
        },
      });

      master.add(DecorTween, 0.1).add(decsTween, 0.18).add(titleTween, ">");
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

        <p ref={descRef} className="about-hero__desc">
          FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고 의미 있는
          경험을 만드는 것을 목표로 합니다. FrontEnd 개발자 김봄입니다. 사용자가
          즐길 수 있는 직관적이고 의미 있는 FrontEnd 개발자 김봄입니다. 사용자가
          즐길 수 있는 직관적이고 의미 있는 경험을 만드는 것을 목표로 합니다.
          FrontEnd 개발자 김봄입니다.
        </p>

        <div className="about-hero__cta about-hero__cta--swap">
          <CtaButton
            href="https://..."
            label="Go Resume"
            variant="primary"
            className="about-hero__btn about-hero__btn--resume"
          />
          <CtaButton
            href="https://github.com/..."
            label="Go Github"
            variant="secondary"
            className="about-hero__btn about-hero__btn--github"
          />
        </div>
      </div>
    </section>
  );
}
