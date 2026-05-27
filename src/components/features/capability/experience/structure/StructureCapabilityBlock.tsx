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
            <span>React Architecture</span>
            <span>Shared Components</span>
            <span>Role-based System</span>
            <span>API & Data Flow</span>
            <span>Motion System</span>
            <span>Styling Structure</span>
          </div>
        </div>
      </div>
    </article>
  );
}
