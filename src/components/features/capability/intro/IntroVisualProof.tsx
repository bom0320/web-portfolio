import Image from "next/image";

import { CAPABILITY_INTRO_PROOF_POINTS } from "@/data/capability";
import { GradientText } from "@/components/shared/ui";

import IntroProofPoint from "./visual/IntroProofPoint";

export default function IntroVisualProof() {
  const beforeVisualPoints = CAPABILITY_INTRO_PROOF_POINTS.slice(0, 2);
  const afterVisualPoints = CAPABILITY_INTRO_PROOF_POINTS.slice(2);

  return (
    <section className="capability-intro-proof js-capability-intro-proof">
      <div className="capability-intro-proof__inner">
        {beforeVisualPoints.map((point) => (
          <IntroProofPoint key={point.id} point={point} />
        ))}

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

        {afterVisualPoints.map((point) => (
          <IntroProofPoint key={point.id} point={point} />
        ))}

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
