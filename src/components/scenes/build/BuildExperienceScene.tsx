"use client";

import {
  BuildAIBlock,
  BuildStructureBlock,
  BuildVisualBlock,
} from "@/components/features/build";

export default function BuildExperienceScene() {
  return (
    <section className="build-experience-scene js-build-experience">
      <div className="build-experience-scene__inner">
        <BuildStructureBlock />
        <BuildAIBlock />
        <BuildVisualBlock />
      </div>
    </section>
  );
}
