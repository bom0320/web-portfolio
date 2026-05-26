"use client";

import {
  CapabilityClosingScene,
  CapabilityIntroScene,
  CapabilityNavigatorScene,
  CapabilityProofScene,
  ExperienceCapabilityScene,
} from "@/components/scenes/capability";

export default function CapabilityStage() {
  return (
    <section className="capability-stage">
      <div className="capability-stage__sticky">
        <CapabilityIntroScene />

        <CapabilityProofScene />

        <ExperienceCapabilityScene />

        <CapabilityNavigatorScene />

        <CapabilityClosingScene />
      </div>
    </section>
  );
}
