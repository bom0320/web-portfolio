"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, type MouseEvent } from "react";
import { Download } from "lucide-react";

import { CtaButton } from "@/components/features/about";
import { GradientText } from "@/components/shared/ui";
import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";

type ActiveCta = "portfolio" | "resume";

export default function AboutHeroScene() {
  const [active, setActive] = useState<ActiveCta>("portfolio");
  const [isResumeNoticeVisible, setIsResumeNoticeVisible] = useState(false);

  const handleMobileSwapClick =
    (key: ActiveCta) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === "undefined") return;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile && active !== key) {
        event.preventDefault();
        setActive(key);
        setIsResumeNoticeVisible(false);
        return;
      }

      trackAmplitudeEvent(ANALYTICS_EVENT.CTA_CLICKED, {
        cta_name: "github_profile",
        source_section: "about",
        destination_type: "external_link",
      });
    };

  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile && active !== "resume") {
      setActive("resume");
      setIsResumeNoticeVisible(false);
      return;
    }

    trackAmplitudeEvent(ANALYTICS_EVENT.CTA_CLICKED, {
      cta_name: "resume",
      source_section: "about",
      destination_type: "notice",
      availability_status: "preparing",
    });

    setIsResumeNoticeVisible(true);
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
            <GradientText>디테일을 캐치하는 개발자</GradientText>입니다.
          </h2>

          <p className="about-hero__desc js-about-hero-desc">
            왜 이런 흐름이 필요한지 집요하게 파고들고, 발견한 디테일을 구조와
            인터랙션으로 구현하는 프론트엔드 개발자 김봄입니다.
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
              href="#resume"
              label="Go Resume"
              variant="secondary"
              className="about-hero__btn about-hero__btn--resume"
              ariaLabel="이력서 준비 상태 확인"
              onClick={handleResumeClick}
            >
              <Download
                size={18}
                strokeWidth={2.2}
                aria-hidden="true"
                className="cta-btn__iconImg"
              />
            </CtaButton>
          </div>

          {isResumeNoticeVisible && (
            <p className="about-hero__resume-notice" role="status">
              이력서는 현재 준비 중입니다.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
