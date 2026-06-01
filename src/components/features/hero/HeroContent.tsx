import { HERO_DESCRIPTION } from "./hero.constants";

export default function HeroContent() {
  return (
    <div className="hero__content">
      <p className="hero__description js-hero-exit-item">
        <span className="hero__desc--desktop">
          {HERO_DESCRIPTION.desktop.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </span>

        <span className="hero__desc--mobile" aria-hidden="true">
          {HERO_DESCRIPTION.mobile.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </span>
      </p>

      <div
        className="hero__meta js-hero-exit-item"
        aria-label="포트폴리오 정보"
      >
        <span>01</span>
        <span>FRONTEND PORTFOLIO</span>
        <span>2026</span>
        <span>
          KIM BOM
          <br />
          IDENTITY
        </span>
      </div>
    </div>
  );
}
