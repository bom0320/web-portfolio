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
          변화는 예측 가능하게.
        </h2>

        <p className="build-experience-block__desc">
          복잡한 화면일수록 역할과 책임을 분리하고, 데이터와 상태, 동작의 흐름이
          서로 얽히지 않도록 구조를 나눕니다. 기능이 추가되거나 바뀌어도 수정
          범위를 예측할 수 있고, 코드의 흐름을 쉽게 따라갈 수 있도록 설계합니다.
        </p>
      </div>

      <div className="build-experience-visual build-experience-visual--structure">
        <BuildStructureMap items={BUILD_STRUCTURE_ITEMS} />
      </div>

      <BuildStructureGrid items={BUILD_STRUCTURE_ITEMS} />
    </article>
  );
}
