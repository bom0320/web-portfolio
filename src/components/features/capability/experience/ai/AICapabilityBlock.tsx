import { AI_CAPABILITY_ITEMS } from "@/data/capability/experience";

import { AI_ICON_MAP } from "./aiCapabilityIconMap";

export default function AICapabilityBlock() {
  return (
    <article className="experience-capability-block experience-capability-block--ai">
      <div className="experience-capability-block__header">
        <p className="experience-capability-block__eyebrow">AI</p>

        <h2 className="experience-capability-block__title">
          AI와 함께
          <br />더 깊게.
        </h2>

        <p className="experience-capability-block__desc">
          저는 AI를 단순한 자동화 도구가 아니라, 더 깊게 탐구하고 빠르게
          실험하기 위해 활용합니다. 구조를 비교하고, 흐름을 탐색하고, 더 나은
          경험을 계속 고민합니다.
        </p>
      </div>

      <div className="experience-capability-grid experience-capability-grid--ai">
        {AI_CAPABILITY_ITEMS.map((item) => {
          const Icon = AI_ICON_MAP[item.icon];

          return (
            <article key={item.id} className="experience-capability-card">
              <div className="experience-capability-card__icon">
                <Icon aria-hidden="true" />
              </div>

              <div className="experience-capability-card__content">
                <span className="experience-capability-card__subtitle">
                  {item.subtitle}
                </span>

                <h3 className="experience-capability-card__title">
                  {item.title}
                </h3>

                <p className="experience-capability-card__message">
                  {item.message}
                </p>

                <p className="experience-capability-card__desc">
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
