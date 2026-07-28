"use client";

import {
  IntroPinnedNarrative,
  IntroVisualProof,
} from "@/components/features/build";

export default function BuildIntroScene() {
  return (
    <section className="capability-intro-scene js-capability-intro">
      <IntroPinnedNarrative />
      <IntroVisualProof />
    </section>
  );
}
