import Image from "next/image";
import { GradientText } from "@/components/shared/ui";

export default function IntroProof() {
  return (
    <section className="capability-intro-proof js-capability-intro-proof">
      <div className="capability-intro-proof__inner">
        <article className="capability-intro-proof__point capability-intro-proof__point--01 js-capability-intro-proof-point-left">
          <div className="capability-intro-proof__label">
            <span>
              <GradientText>01</GradientText>
            </span>
          </div>

          <h3>부담스럽지 않은 첫인상</h3>

          <p>
            사용자가 처음 화면에 들어왔을 때, 기능보다 먼저 편안함을 느끼길
            바랐습니다. 날카롭지 않은 형태와 부드러운 컬러, 단순한 표정으로
            심리적 거리를 낮추고 친근하게 다가갈 수 있도록 설계했습니다.
          </p>
        </article>

        <article className="capability-intro-proof__point capability-intro-proof__point--02 js-capability-intro-proof-point-right">
          <div className="capability-intro-proof__label">
            <span>
              <GradientText>02</GradientText>
            </span>
          </div>

          <h3>시선을 안내하는 기준점</h3>

          <p>
            이 캐릭터는 장식이 아니라 사용자의 시선과 장면의 흐름을 안정적으로
            이어주는 역할을 합니다. 중요한 순간마다 자연스럽게 등장해 사용자의
            주의를 다음 액션으로 안내합니다.
          </p>
        </article>

        <div
          className="capability-intro-proof__visual js-capability-intro-proof-visual"
          aria-hidden="true"
        >
          <Image
            className="capability-intro-proof__character-image js-capability-intro-proof-character"
            src="/images/character_1.png"
            alt=""
            width={420}
            height={470}
            priority
          />
        </div>

        <article className="capability-intro-proof__point capability-intro-proof__point--03 js-capability-intro-proof-point-left">
          <div className="capability-intro-proof__label">
            <span>
              <GradientText>03</GradientText>
            </span>
          </div>

          <h3>움직임의 감정 온도</h3>

          <p>
            과한 움직임보다 편안한 리듬을 선택했습니다. 느리고 자연스러운 반응은
            화면의 긴장을 낮추고, 사용자가 여유롭게 흐름에 집중할 수 있도록
            돕습니다.
          </p>
        </article>

        <article className="capability-intro-proof__point capability-intro-proof__point--04 js-capability-intro-proof-point-right">
          <div className="capability-intro-proof__label">
            <span>
              <GradientText>04</GradientText>
            </span>
          </div>

          <h3>흐름 안에서 존재하는 요소</h3>

          <p>
            모든 요소는 개별적으로 존재하기보다, 사용자의 행동 흐름 안에서
            자연스럽게 이어져야 한다고 생각합니다. 그래서 캐릭터 역시 특정
            장면의 일부로서 맥락에 맞게 등장하고 사라지도록 설계했습니다.
          </p>
        </article>

        <p className="capability-intro-proof__quote js-capability-intro-proof-quote">
          <span
            className="capability-intro-proof__quote-mark"
            aria-hidden="true"
          >
            “
          </span>
          <br />
          저는 인터페이스를 단순히 정보를 보여주는 화면보다,
          <br />
          <strong>
            <GradientText>
              사용자가 자연스럽게 흐름을 이어갈 수 있는 경험
            </GradientText>
          </strong>
          으로 만들고 싶었습니다.
        </p>
      </div>
    </section>
  );
}
