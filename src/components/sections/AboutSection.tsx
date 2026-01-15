"use client";

export default function AboutPage() {
  return (
    <section id="about" className="about-hero">
      <div className="about-hero__inner">
        <h2 className="about-hero__title">ABOUT ME</h2>

        <p className="about-hero__desc">
          FrontEnd 개발자 김봄입니다. 사용자가 즐길 수 있는 직관적이고의미 있는
          경험을 만드는 것을 목표로 합니다. FrontEnd 개발자 김봄입니다. 사용자가
          즐길 수 있는 직관적이고의미 있는
        </p>

        <div className="about-hero__cta">
          <a className="about-hero__btn about-hero__btn--primary" href="#">
            <span>Go Resume</span>
            <span className="about-hero__icon">→</span>
          </a>

          <a className="about-hero__btn" href="#">
            <span>Go Github</span>
            <span className="about-hero__icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
