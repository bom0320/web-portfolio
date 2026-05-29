"use client";

import { STRUCTURE_CAPABILITY_ITEMS } from "@/data/capability/experience";

import StructureCapabilityGrid from "./StructureCapabilityGrid";
import StructureCapabilityMap from "./StructureCapabilityMap";

export default function StructureCapabilityBlock() {
  return (
    <article className="experience-capability-block experience-capability-block--structure js-structure-capability-block">
      <div className="experience-capability-block__header experience-capability-block__header--center js-structure-capability-header">
        <p className="experience-capability-block__eyebrow">Structure</p>

        <h2 className="experience-capability-block__title">
          복잡함은 줄이고,
          <br />
          흐름은 더 자연스럽게.
        </h2>

        <p className="experience-capability-block__desc">
          혼자만 이해할 수 있는 구조보다, 함께 유지하고 개선할 수 있는 구조를 더
          중요하게 생각합니다. 복잡한 문제일수록 누구나 흐름을 이해할 수 있도록,
          읽기 쉬운 구조 역시 좋은 경험의 일부라고 생각합니다. 화면 밖의 구조가
          단단할수록, 화면 안의 흐름도 더 자연스러워진다고 믿습니다.
        </p>
      </div>

      <div className="experience-capability-visual experience-capability-visual--structure">
        <StructureCapabilityMap items={STRUCTURE_CAPABILITY_ITEMS} />
      </div>

      <StructureCapabilityGrid items={STRUCTURE_CAPABILITY_ITEMS} />
    </article>
  );
}
