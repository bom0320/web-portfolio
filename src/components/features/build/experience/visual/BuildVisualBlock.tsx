import { BUILD_VISUAL_ITEMS } from "@/data/build";

import BuildVisualGallery from "./BuildVisualGallery";

export default function BuildVisualBlock() {
  return (
    <article className="build-experience-block build-experience-block--visual js-build-visual">
      <div className="build-experience-block__header build-experience-block__header--center js-build-visual-header">
        <p className="build-experience-block__eyebrow">BEYOND</p>

        <h2 className="build-experience-block__title">
          엔지니어링을 넘어,
          <br />
          감각까지.
        </h2>

        <p className="build-experience-block__desc">
          정답이 정해져 있지 않은 디테일에서 화면의 미묘한 어색함을 살피고,
          디자인 의도와 서비스의 맥락을 기준으로 비율과 밀도, 움직임을
          조율합니다. 구현 과정에서 발견한 차이는 함께 검토하고, 더 나은 방향이
          보이면 근거와 대안을 제안합니다.
        </p>
      </div>

      <BuildVisualGallery items={BUILD_VISUAL_ITEMS} />
    </article>
  );
}
