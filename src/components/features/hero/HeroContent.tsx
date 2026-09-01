import { HERO_DESCRIPTION } from "./hero.constants";

export default function HeroContent() {
  return (
    <div className="hero__content">
      <p className="hero__description js-hero-exit-item">
        <span className="hero__desc--desktop">
          {HERO_DESCRIPTION.desktop.split("\n").map((line, index) => (
            <span key={`desktop-${line}-${index}`}>
              {line}
              <br />
            </span>
          ))}
        </span>

        <span className="hero__desc--mobile">
          {HERO_DESCRIPTION.mobile.split("\n").map((line, index) => (
            <span key={`mobile-${line}-${index}`}>
              {line}
              <br />
            </span>
          ))}
        </span>
      </p>

      <div
        className="hero__meta js-hero-exit-item"
        aria-label="kimbom.dev 정보"
      >
        <span>01</span>
        <span>PERSONAL WEBSITE</span>
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
