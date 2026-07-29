"use client";

import { BUILD_STRUCTURE_ITEMS } from "@/data/build";

import BuildStructureGrid from "./BuildStructureGrid";
import BuildStructureMap from "./BuildStructureMap";

export default function BuildStructureBlock() {
  return (
    <article className="build-experience-block build-experience-block--structure js-build-structure">
      <div className="build-experience-block__header build-experience-block__header--center js-build-structure-header">
        <p className="build-experience-block__eyebrow">Structure</p>

        <h2 className="build-experience-block__title">
          복잡함은 줄이고,
          <br />
          흐름은 더 자연스럽게.
        </h2>

        <p className="build-experience-block__desc">
          혼자만 이해할 수 있는 구조보다, 함께 유지하고 개선할 수 있는 구조를 더
          중요하게 생각합니다. 복잡한 문제일수록 누구나 흐름을 이해할 수 있도록,
          읽기 쉬운 구조 역시 좋은 경험의 일부라고 생각합니다. 화면 밖의 구조가
          단단할수록, 화면 안의 흐름도 더 자연스러워진다고 믿습니다.
        </p>
      </div>

      <div className="build-experience-visual build-experience-visual--structure">
        <BuildStructureMap items={BUILD_STRUCTURE_ITEMS} />
      </div>

      <BuildStructureGrid items={BUILD_STRUCTURE_ITEMS} />
    </article>
  );
}
