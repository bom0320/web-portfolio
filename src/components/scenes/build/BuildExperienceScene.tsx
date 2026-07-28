"use client";

import {
  BuildAIBlock,
  BuildStructureBlock,
  BuildVisualBlock,
} from "@/components/features/build";

export default function BuildExperienceScene() {
  return (
    <section className="experience-capability-scene js-capability-experience">
      <div className="experience-capability-scene__inner">
        <BuildStructureBlock />
        <BuildAIBlock />
        <BuildVisualBlock />
      </div>
    </section>
  );
}
