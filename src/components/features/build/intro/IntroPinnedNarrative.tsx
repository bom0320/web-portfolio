import { GradientText } from "@/components/shared/ui";

const PHILOSOPHY_TITLE_LINES = ["망설임은 적게", "흐름은 조금 더 자연스럽게"];

export default function IntroPinnedNarrative() {
  return (
    <div className="build-intro-pinned js-build-intro-pinned">
      <div className="build-intro-pinned__sticky js-build-intro-sticky">
        <div className="build-intro-visual js-build-intro-visual">
          <div className="build-intro-visual__field js-build-intro-visual-field" />
        </div>

        <div className="build-intro-title-layer js-build-intro-title-layer">
          <p className="build-intro-title-layer__eyebrow js-build-intro-eyebrow">
            HOW I BUILD
          </p>

          <h2 className="build-intro-title-layer__title js-build-intro-title">
            <GradientText>Intent. Structure. Detail.</GradientText>
          </h2>

          <p className="build-intro-title-layer__subtitle js-build-intro-subtitle">
            <GradientText>경험을 설계하는 방식.</GradientText>
          </p>
        </div>

        <div className="build-intro-phase-layer">
          <div className="build-intro-phase build-intro-phase--01 js-build-intro-phase-01">
            <p>
              디자인의 의도와 사용자 흐름을 코드로 옮기고, 상태와 컴포넌트
              구조까지 함께 설계합니다.
              <br className="build-intro-phase__desktop-break" />
              보이는 경험과 내부 구조가 따로 놀지 않도록 구현합니다.
            </p>
          </div>

          <div className="build-intro-phase build-intro-phase--02 js-build-intro-phase-02">
            <h3>
              <GradientText>
                {PHILOSOPHY_TITLE_LINES.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < PHILOSOPHY_TITLE_LINES.length - 1 && <br />}
                  </span>
                ))}
              </GradientText>
            </h3>

            <p>
              디테일은 많이 넣기보다 필요한 곳에 정확히 둡니다.
              <br className="build-intro-phase__desktop-break" />
              정보의 위계와 상태 변화를 명확히 하고, 필요한 피드백은 남기되
              <br className="build-intro-phase__desktop-break" />
              불필요한 선택은 덜어 다음 행동이 자연스럽게 이어지는 경험을
              만듭니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
