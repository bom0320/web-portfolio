"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import AboutAnimation from "../../../animations/about";
import { CtaButton } from "@/components/features/about";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeroScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const [active, setActive] = useState<"resume" | "github">("resume");

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;

    if (!section || !heading || !desc) return;

    const ctx = gsap.context(() => {
      const AboutHeroController = AboutAnimation.hero({
        heading,
        desc,
      });

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        end: "top 36%",
        scrub: 1.2,
        markers: true,
        onUpdate: (self) => {
          AboutHeroController.setProgress(self.progress);
        },
      });

      AboutHeroController.setProgress(0);

      return () => {
        trigger.kill();
        AboutHeroController.destroy();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  const handleMobileSwapClick =
    (key: "resume" | "github") => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === "undefined") return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) return;

      if (active !== key) {
        e.preventDefault();
        setActive(key);
      }
    };

  return (
    <section ref={sectionRef} className="about-hero">
      <div className="about-hero__layout">
        <div className="about-hero__visual" aria-hidden="true">
          <img
            className="about-hero__character"
            src="/images/character_1.png"
            alt=""
          />
        </div>

        <div className="about-hero__content">
          <span className="about-hero__eyebrow">ABOUT ME</span>

          <h2 ref={headingRef} className="about-hero__title">
            안녕하세요.
            <br />
            고슴도치같이 예민하게
            <br />
            <span>디테일을 캐치해내는</span> 개발자입니다.
          </h2>

          <p ref={descRef} className="about-hero__desc">
            FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고 의미
            있는 경험을 만드는 것을 목표로 합니다.
          </p>

          <div
            className="about-hero__cta about-hero__cta--swap"
            data-active={active}
          >
            <CtaButton
              href="https://..."
              label="Go Resume"
              variant="primary"
              className="about-hero__btn about-hero__btn--resume"
              ariaLabel="Go Resume"
              onClick={handleMobileSwapClick("resume")}
            >
              <img src="/icons/User.svg" alt="" className="cta-btn__iconImg" />
            </CtaButton>

            <CtaButton
              href="https://github.com/..."
              label="Go Github"
              variant="secondary"
              className="about-hero__btn about-hero__btn--github"
              ariaLabel="Go Github"
              onClick={handleMobileSwapClick("github")}
            >
              <img
                src="/icons/GitHub.svg"
                alt=""
                className="cta-btn__iconImg"
              />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
