"use client";

import {
  AICapabilityBlock,
  StructureCapabilityBlock,
  VisualCapabilityBlock,
} from "@/components/features/build";

export default function BuildExperienceScene() {
  return (
    <section className="experience-capability-scene js-capability-experience">
      <div className="experience-capability-scene__inner">
        <StructureCapabilityBlock />
        <AICapabilityBlock />
        <VisualCapabilityBlock />
      </div>
    </section>
  );
}
