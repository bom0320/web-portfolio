"use client";

import {
  IntroPinnedNarrative,
  IntroVisualProofSection,
} from "@/components/features/capability";

export default function CapabilityIntroScene() {
  return (
    <section className="capability-intro-scene">
      <IntroPinnedNarrative />
      <IntroVisualProofSection />
    </section>
  );
}
