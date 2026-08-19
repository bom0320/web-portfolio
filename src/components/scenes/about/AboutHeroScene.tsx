"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, type MouseEvent } from "react";
import { FileText } from "lucide-react";

import { CtaButton } from "@/components/features/about";
import { GradientText } from "@/components/shared/ui";
import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";

type ActiveCta = "portfolio" | "resume";

export default function AboutHeroScene() {
  const [active, setActive] = useState<ActiveCta>("portfolio");

  const handleMobileSwapClick =
    (key: ActiveCta) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === "undefined") return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile && active !== key) {
        event.preventDefault();
        setActive(key);
        return;
      }

      trackAmplitudeEvent(ANALYTICS_EVENT.CTA_CLICKED, {
        cta_name: "github_profile",
        source_section: "about",
        destination_type: "external_link",
      });
    };

  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile && active !== "resume") {
      event.preventDefault();
      setActive("resume");
      return;
    }

    trackAmplitudeEvent(ANALYTICS_EVENT.CTA_CLICKED, {
      cta_name: "resume",
      source_section: "about",
      destination_type: "document",
    });
  };

  return (
    <section className="about-hero js-about-hero">
      <div className="about-hero__layout js-about-hero-inner">
        <div
          className="about-hero__visual js-about-hero-visual"
          aria-hidden="true"
        >
          <div className="about-character js-about-character">
            <img
              className="about-hero__character about-character__body"
              src="/images/about-character-base_01.svg"
              alt=""
            />

            <div className="about-character__eye about-character__eye--left">
              <div className="about-character__pupil-mover js-about-character-pupil">
                <span className="about-character__pupil" />
              </div>

              <span className="about-character__lid js-about-character-lid" />
            </div>

            <div className="about-character__eye about-character__eye--right">
              <div className="about-character__pupil-mover js-about-character-pupil">
                <span className="about-character__pupil" />
              </div>

              <span className="about-character__lid js-about-character-lid" />
            </div>

            <span className="about-character__mouth js-about-character-mouth" />
          </div>
        </div>

        <div className="about-hero__content">
          <span className="about-hero__eyebrow js-about-hero-eyebrow">
            ABOUT ME
          </span>

          <h2 className="about-hero__title js-about-hero-title">
            안녕하세요.
            <br />
            보이는 화면 너머까지 고민하는
            <br />
            <GradientText>프론트엔드 개발자</GradientText>입니다.
          </h2>

          <div className="about-hero__meta js-about-hero-meta">
            <div className="about-hero__meta-row">
              <span className="about-hero__meta-label">Role</span>
              <span className="about-hero__meta-value">Frontend Engineer</span>
            </div>

            <div className="about-hero__meta-row">
              <span className="about-hero__meta-label">Focus</span>
              <span className="about-hero__meta-value">
                UI · Interaction · Performance
              </span>
            </div>
          </div>

          <p className="about-hero__desc js-about-hero-desc">
            왜 이렇게 보여야 하고, 왜 이렇게 동작해야 하는지 질문하며
            <br className="about-hero__desc-break--desktop" />
            디자인의 의도와 기술적인 구조가 자연스럽게 이어지도록 설계합니다.
          </p>

          <div
            className="about-hero__cta about-hero__cta--swap js-about-hero-cta"
            data-active={active}
          >
            <CtaButton
              href="https://github.com/bom0320"
              label="Go GitHub"
              variant="primary"
              className="about-hero__btn about-hero__btn--portfolio"
              ariaLabel="김봄 GitHub 새 탭에서 열기"
              onClick={handleMobileSwapClick("portfolio")}
            >
              <img
                src="/icons/github-white.svg"
                alt=""
                aria-hidden="true"
                className="cta-btn__iconImg"
              />
            </CtaButton>

            <CtaButton
              href="/resume/kim-bom-resume_v3.pdf"
              target="_blank"
              label="Go Resume"
              variant="secondary"
              className="about-hero__btn about-hero__btn--resume"
              ariaLabel="김봄 이력서 새 탭에서 열기"
              onClick={handleResumeClick}
            >
              <FileText
                size={18}
                strokeWidth={2.2}
                aria-hidden="true"
                className="cta-btn__iconImg"
              />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
