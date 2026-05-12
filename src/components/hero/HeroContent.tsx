import BomWaveTitle from "@/components/hero/BomWaveTitle";
import { HERO_DESCRIPTION } from "./hero.constants";

export default function HeroContent() {
  return (
    <div className="hero__content">
      <div className="hero__title-group js-hero-exit-item">
        <div className="hero-title">
          <BomWaveTitle />
        </div>

        <h1 className="hero__title-line2">PORTFOLIO</h1>
      </div>

      <h2
        className="hero__role js-hero-exit-item"
        aria-label="Frontend Developer"
      >
        <span className="hero__role-track">
          <span className="hero__role-text js-hero-role-text" />
          <span className="hero__caret js-hero-caret" aria-hidden="true">
            |
          </span>
        </span>
      </h2>

      <p className="hero__description js-hero-exit-item">
        <span className="hero__desc--desktop">{HERO_DESCRIPTION.desktop}</span>

        <span className="hero__desc--mobile" aria-hidden="true">
          {HERO_DESCRIPTION.mobile}
        </span>
      </p>
    </div>
  );
}
