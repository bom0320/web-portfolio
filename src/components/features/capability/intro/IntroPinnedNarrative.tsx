export default function IntroPinnedNarrative() {
  return (
    <div className="capability-intro-pinned js-capability-intro-pinned">
      <div className="capability-intro-pinned__sticky js-capability-intro-sticky">
        <div className="capability-intro-visual js-capability-intro-visual">
          <div className="capability-intro-visual__field js-capability-intro-visual-field" />
        </div>

        <div className="capability-intro-title-layer js-capability-intro-title-layer">
          <p className="capability-intro-title-layer__eyebrow js-capability-intro-eyebrow">
            CAPABILITY
          </p>

          <h2 className="capability-intro-title-layer__title js-capability-intro-title">
            Flow. Structure. Motion.
          </h2>

          <p className="capability-intro-title-layer__subtitle js-capability-intro-subtitle">
            경험을 설계하는 방식.
          </p>
        </div>

        <div className="capability-intro-phase-layer">
          <div className="capability-intro-phase capability-intro-phase--01 js-capability-intro-phase-01">
            <p>
              저는 단순히 화면을 구현하는 것보다, 사용자가 어떤 흐름으로
              이해하고 행동하는지를 더 중요하게 바라봅니다. 그래서 인터페이스,
              인터랙션, 상태 흐름, 그리고 구조까지도 하나의 연결된 경험처럼
              설계하려고 합니다.
            </p>
          </div>

          <div className="capability-intro-phase capability-intro-phase--02 js-capability-intro-phase-02">
            <h3>
              망설임은 적게
              <br />
              흐름은 조금 더 자연스럽게
            </h3>

            <p>
              좋은 경험은 흐름을 의식하지 않게 만듭니다. 사용자는 기능을 하나씩
              읽기보다, 흐름 안에서 자연스럽게 이해하고 행동한다고 생각합니다.
              설명을 늘리는 것보다, 망설임 없이 이어질 수 있는 구조를 더
              중요하게 바라봅니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
