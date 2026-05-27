import { VISUAL_CAPABILITY_ITEMS } from "@/data/capability/experience";

import VisualCapabilityGallery from "./VisualCapabilityGallery";

export default function VisualCapabilityBlock() {
  return (
    <article className="experience-capability-block experience-capability-block--visual js-visual-capability-block">
      <div className="experience-capability-block__header experience-capability-block__header--center js-visual-capability-header">
        <p className="experience-capability-block__eyebrow">Beyond</p>

        <h2 className="experience-capability-block__title">
          인터페이스 너머의
          <br />
          감각까지.
        </h2>

        <p className="experience-capability-block__desc">
          저는 단순히 기능을 배치하기보다, 사용자가 화면을 어떻게 느끼게
          될지까지 함께 고민합니다. 구성과 움직임, 그리고 분위기까지 경험의 인상
          역시 중요한 요소라고 생각합니다.
        </p>
      </div>

      <VisualCapabilityGallery items={VISUAL_CAPABILITY_ITEMS} />
    </article>
  );
}
