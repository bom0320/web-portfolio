import { BUILD_AI_ITEMS } from "@/data/build";

import { BUILD_AI_ICON_MAP } from "./buildAIIconMap";

export default function BuildAIBlock() {
  return (
    <article className="build-experience-block build-experience-block--ai js-build-ai">
      <div className="build-experience-block__header js-build-ai-header">
        <p className="build-experience-block__eyebrow">AI</p>

        <h2 className="build-experience-block__title">
          AI와 함께
          <br />더 깊게.
        </h2>

        <p className="build-experience-block__desc">
          저는 AI를 단순한 자동화 도구가 아니라, 더 깊게 탐구하고 빠르게
          실험하기 위해 활용합니다. 구조를 비교하고, 흐름을 탐색하고, 더 나은
          경험을 계속 고민합니다.
        </p>
      </div>

      <div className="build-experience-grid build-experience-grid--ai js-build-ai-grid">
        {BUILD_AI_ITEMS.map((item) => {
          const Icon = BUILD_AI_ICON_MAP[item.icon];

          return (
            <article
              key={item.id}
              className="build-experience-card js-build-ai-card"
            >
              <div className="build-experience-card__icon js-build-ai-card-icon">
                <Icon aria-hidden="true" />
              </div>

              <div className="build-experience-card__content">
                <span className="build-experience-card__subtitle js-build-ai-card-subtitle">
                  {item.subtitle}
                </span>

                <h3 className="build-experience-card__title js-build-ai-card-title">
                  {item.title}
                </h3>

                <p className="build-experience-card__message js-build-ai-card-message">
                  {item.message}
                </p>

                <p className="build-experience-card__desc js-build-ai-card-desc">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
}
