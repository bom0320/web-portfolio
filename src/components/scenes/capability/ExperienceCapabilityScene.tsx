"use client";

import {
  AICapabilityBlock,
  StructureCapabilityBlock,
  VisualCapabilityBlock,
} from "@/components/features/capability";

export default function ExperienceCapabilityScene() {
  return (
    <section className="experience-capability-scene">
      <div className="experience-capability-scene__inner">
        <StructureCapabilityBlock />

        <AICapabilityBlock />

        <VisualCapabilityBlock />
      </div>
    </section>
  );
}
