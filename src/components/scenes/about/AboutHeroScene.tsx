"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import { CtaButton } from "@/components/features/about";
import { GradientText } from "@/components/shared/ui";

type ActiveCta = "portfolio" | "github";

export default function AboutHeroScene() {
  const [active, setActive] = useState<ActiveCta>("portfolio");

  const handleMobileSwapClick =
    (key: ActiveCta) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === "undefined") return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) return;

      if (active !== key) {
        e.preventDefault();
        setActive(key);
      }
    };

  return (
    <section className="about-hero js-about-hero">
      <div className="about-hero__layout js-about-hero-inner">
        <div
          className="about-hero__visual js-about-hero-visual"
          aria-hidden="true"
        >
          <img
            className="about-hero__character"
            src="/images/character_1.png"
            alt=""
          />
        </div>

        <div className="about-hero__content">
          <span className="about-hero__eyebrow js-about-hero-eyebrow">
            ABOUT ME
          </span>

          <h2 className="about-hero__title js-about-hero-title">
            안녕하세요.
            <br />
            고슴도치같이 예민하게
            <br />
            <GradientText>디테일을 캐치해내는 개발자</GradientText>입니다.
          </h2>

          <p className="about-hero__desc js-about-hero-desc">
            FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고 의미
            있는 경험을 만드는 것을 목표로 합니다.
          </p>

          <div
            className="about-hero__cta about-hero__cta--swap js-about-hero-cta"
            data-active={active}
          >
            <CtaButton
              href="https://app.notion.com/p/FrontEnd-Developer-2cdbf73cc5378049ad20db08f8ea554f?source=copy_link"
              label="Go Portfolio"
              variant="primary"
              className="about-hero__btn about-hero__btn--portfolio"
              ariaLabel="Go Portfolio"
              onClick={handleMobileSwapClick("portfolio")}
            >
              <img src="/icons/user.svg" alt="" className="cta-btn__iconImg" />
            </CtaButton>

            <CtaButton
              href="https://github.com/bom0320"
              label="Go Github"
              variant="secondary"
              className="about-hero__btn about-hero__btn--github"
              ariaLabel="Go Github"
              onClick={handleMobileSwapClick("github")}
            >
              <img
                src="/icons/github-white.svg"
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
