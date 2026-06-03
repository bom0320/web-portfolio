import Image from "next/image";

import {
  CAPABILITY_INTRO_PROOF_IMAGE,
  CAPABILITY_INTRO_PROOF_POINTS,
  CAPABILITY_INTRO_PROOF_QUOTE,
} from "@/data/capability";
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
            src={CAPABILITY_INTRO_PROOF_IMAGE.src}
            alt={CAPABILITY_INTRO_PROOF_IMAGE.alt}
            width={CAPABILITY_INTRO_PROOF_IMAGE.width}
            height={CAPABILITY_INTRO_PROOF_IMAGE.height}
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
          {CAPABILITY_INTRO_PROOF_QUOTE.lead}
          <br />
          <strong>
            <GradientText>{CAPABILITY_INTRO_PROOF_QUOTE.emphasis}</GradientText>
          </strong>
          {CAPABILITY_INTRO_PROOF_QUOTE.suffix}
        </p>
      </div>
    </section>
  );
}
