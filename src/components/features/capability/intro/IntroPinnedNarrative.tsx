import {
  CAPABILITY_INTRO_PHASES,
  CAPABILITY_INTRO_TITLE,
} from "@/data/capability";
import { GradientText } from "@/components/shared/ui";

export default function IntroPinnedNarrative() {
  return (
    <div className="capability-intro-pinned js-capability-intro-pinned">
      <div className="capability-intro-pinned__sticky js-capability-intro-sticky">
        <div className="capability-intro-visual js-capability-intro-visual">
          <div className="capability-intro-visual__field js-capability-intro-visual-field" />
        </div>

        <div className="capability-intro-title-layer js-capability-intro-title-layer">
          <p className="capability-intro-title-layer__eyebrow js-capability-intro-eyebrow">
            {CAPABILITY_INTRO_TITLE.eyebrow}
          </p>

          <h2 className="capability-intro-title-layer__title js-capability-intro-title">
            <GradientText>{CAPABILITY_INTRO_TITLE.title}</GradientText>
          </h2>

          <p className="capability-intro-title-layer__subtitle js-capability-intro-subtitle">
            <GradientText>{CAPABILITY_INTRO_TITLE.subtitle}</GradientText>
          </p>
        </div>

        <div className="capability-intro-phase-layer">
          <div className="capability-intro-phase capability-intro-phase--01 js-capability-intro-phase-01">
            <p>{CAPABILITY_INTRO_PHASES.statement.body}</p>
          </div>

          <div className="capability-intro-phase capability-intro-phase--02 js-capability-intro-phase-02">
            <h3>
              <GradientText>
                {CAPABILITY_INTRO_PHASES.philosophy.titleLines.map(
                  (line, index) => (
                    <span key={line}>
                      {line}
                      {index <
                        CAPABILITY_INTRO_PHASES.philosophy.titleLines.length -
                          1 && <br />}
                    </span>
                  )
                )}
              </GradientText>
            </h3>

            <p>{CAPABILITY_INTRO_PHASES.philosophy.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
