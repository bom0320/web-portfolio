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
          AI를 단순한 코드 생성 도구로 사용하기보다,
          <br className="build-experience-block__desktop-break" />
          필요한 맥락과 제약을 구성하고 작업을 탐색·구현·검증 단계로 나누어
          활용합니다.
          <br className="build-experience-block__desktop-break" />
          생성된 결과는 실제 코드와 동작을 기준으로 검증하고, 그 과정에서
          컨텍스트와 작업 흐름을 계속 개선합니다.
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
