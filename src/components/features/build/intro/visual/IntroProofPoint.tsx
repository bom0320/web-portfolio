import type { BuildIntroProofPoint } from "@/data/build";

import { GradientText } from "@/components/shared/ui";

type IntroProofPointProps = {
  point: BuildIntroProofPoint;
};

export default function IntroProofPoint({ point }: IntroProofPointProps) {
  return (
    <article
      className={[
        "build-intro-proof__point",
        `build-intro-proof__point--${point.index}`,
        `js-build-intro-proof-point-${point.side}`,
      ].join(" ")}
    >
      <div className="build-intro-proof__label">
        <span>
          <GradientText>{point.index}</GradientText>
        </span>
      </div>

      <h3>{point.title}</h3>
      <p>{point.description}</p>
    </article>
  );
}
