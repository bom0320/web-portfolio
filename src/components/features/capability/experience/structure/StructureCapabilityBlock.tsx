import { STRUCTURE_CAPABILITY_ITEMS } from "@/data/capability/experience";

export default function StructureCapabilityBlock() {
  return (
    <article className="experience-capability-block experience-capability-block--structure">
      <div className="experience-capability-block__header experience-capability-block__header--center">
        <p className="experience-capability-block__eyebrow">Structure</p>

        <h2 className="experience-capability-block__title">
          복잡함은 줄이고,
          <br />
          흐름은 더 자연스럽게.
        </h2>

        <p className="experience-capability-block__desc">
          혼자만 이해할 수 있는 구조보다, 함께 유지하고 개선할 수 있는 구조를 더
          중요하게 생각합니다. 복잡한 문제일수록 누구나 흐름을 이해할 수 있도록,
          읽기 쉬운 구조 역시 좋은 경험의 일부라고 생각합니다.
        </p>
      </div>

      <div className="experience-capability-visual experience-capability-visual--structure">
        <div className="experience-capability-structure-map">
          <div className="experience-capability-structure-map__core">
            Readable Flow
          </div>

          <div className="experience-capability-structure-map__line" />

          <div className="experience-capability-structure-map__items">
            {STRUCTURE_CAPABILITY_ITEMS.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-capability-structure-grid">
        {STRUCTURE_CAPABILITY_ITEMS.map((item) => (
          <article
            key={item.id}
            className="experience-capability-structure-card"
          >
            <div className="experience-capability-structure-card__top">
              <span className="experience-capability-structure-card__index">
                {item.index}
              </span>

              <span className="experience-capability-structure-card__line" />
            </div>

            <h3 className="experience-capability-structure-card__title">
              {item.title}
            </h3>

            <p className="experience-capability-structure-card__message">
              {item.message}
            </p>

            <p className="experience-capability-structure-card__desc">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </article>
  );
}
