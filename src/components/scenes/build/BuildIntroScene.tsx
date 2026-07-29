"use client";

import {
  IntroPinnedNarrative,
  IntroVisualProof,
} from "@/components/features/build";

export default function BuildIntroScene() {
  return (
    <section className="build-intro-scene js-build-intro">
      <IntroPinnedNarrative />
      <IntroVisualProof />
    </section>
  );
}
