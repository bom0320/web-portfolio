import type { CapabilityIntroProofPoint } from "@/data/capability";
import { GradientText } from "@/components/shared/ui";

type IntroProofPointProps = {
  point: CapabilityIntroProofPoint;
};

export default function IntroProofPoint({ point }: IntroProofPointProps) {
  return (
    <article
      className={[
        "capability-intro-proof__point",
        `capability-intro-proof__point--${point.index}`,
        `js-capability-intro-proof-point-${point.side}`,
      ].join(" ")}
    >
      <div className="capability-intro-proof__label">
        <span>
          <GradientText>{point.index}</GradientText>
        </span>
      </div>

      <h3>{point.title}</h3>
      <p>{point.description}</p>
    </article>
  );
}
