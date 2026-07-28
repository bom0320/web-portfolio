import { BUILD_VISUAL_ITEMS } from "@/data/build";

import BuildVisualGallery from "./BuildVisualGallery";

export default function BuildVisualBlock() {
  return (
    <article className="build-experience-block build-experience-block--visual js-build-visual">
      <div className="build-experience-block__header build-experience-block__header--center js-build-visual-header">
        <p className="build-experience-block__eyebrow">BEYOND</p>

        <h2 className="build-experience-block__title">
          인터페이스 너머의
          <br />
          감각까지.
        </h2>

        <p className="build-experience-block__desc">
          저는 단순히 기능을 배치하기보다, 사용자가 화면을 어떻게 느끼게
          될지까지 함께 고민합니다. 구성과 움직임, 그리고 분위기까지 경험의 인상
          역시 중요한 요소라고 생각합니다.
        </p>
      </div>

      <BuildVisualGallery items={BUILD_VISUAL_ITEMS} />
    </article>
  );
}
