"use client";

import {
  CapabilityClosingScene,
  CapabilityIntroScene,
  CapabilityNavigatorScene,
  ExperienceCapabilityScene,
} from "@/components/scenes/capability";

export default function CapabilityStage() {
  return (
    <section className="capability-stage">
      <div className="capability-stage__sticky">
        <CapabilityIntroScene />

        <ExperienceCapabilityScene />

        <CapabilityNavigatorScene />

        <CapabilityClosingScene />
      </div>
    </section>
  );
}
