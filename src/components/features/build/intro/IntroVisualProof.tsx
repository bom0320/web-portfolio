import Image from "next/image";

import { GradientText } from "@/components/shared/ui";
import { BUILD_INTRO_PROOF_POINTS } from "@/data/build";

import IntroProofPoint from "./visual/IntroProofPoint";

export default function IntroVisualProof() {
  const beforeVisualPoints = BUILD_INTRO_PROOF_POINTS.slice(0, 2);
  const afterVisualPoints = BUILD_INTRO_PROOF_POINTS.slice(2);

  return (
    <section className="build-intro-proof js-build-intro-proof">
      <div className="build-intro-proof__inner">
        {beforeVisualPoints.map((point) => (
          <IntroProofPoint key={point.id} point={point} />
        ))}

        <div
          className="build-intro-proof__visual js-build-intro-proof-visual"
          aria-hidden="true"
        >
          <div className="build-intro-proof__face js-build-intro-proof-character">
            <Image
              className="build-intro-proof__face-image"
              src="/images/build-character-face.svg"
              alt=""
              width={750}
              height={636}
            />

            <span className="build-intro-proof__eye build-intro-proof__eye--left">
              <span className="build-intro-proof__pupil js-build-intro-proof-pupil" />
              <span className="build-intro-proof__lid js-build-intro-proof-lid" />
            </span>

            <span className="build-intro-proof__eye build-intro-proof__eye--right">
              <span className="build-intro-proof__pupil js-build-intro-proof-pupil" />
              <span className="build-intro-proof__lid js-build-intro-proof-lid" />
            </span>
          </div>
        </div>

        {afterVisualPoints.map((point) => (
          <IntroProofPoint key={point.id} point={point} />
        ))}

        <p className="build-intro-proof__quote js-build-intro-proof-quote">
          <span className="build-intro-proof__quote-mark" aria-hidden="true">
            “
          </span>
          <br />
          보이는 경험과 내부의 구현이 자연스럽게 맞물리고,
          <br />
          <strong>
            <GradientText>
              구조와 동작까지 같은 방향으로 이어져야 한다
            </GradientText>
          </strong>
          고 생각합니다.
        </p>
      </div>
    </section>
  );
}
