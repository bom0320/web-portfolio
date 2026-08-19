import type { BuildVisualItem } from "@/data/build";

import BuildVisualCard from "./BuildVisualCard";

type BuildVisualGalleryProps = {
  items: BuildVisualItem[];
};

export default function BuildVisualGallery({ items }: BuildVisualGalleryProps) {
  const visualDirectionItem = items.find(
    (item) => item.id === "visual-direction"
  );
  const visualBalanceItem = items.find((item) => item.id === "visual-balance");
  const visualFlowItem = items.find((item) => item.id === "visual-flow");
  const motionDirectionItem = items.find(
    (item) => item.id === "motion-direction"
  );

  return (
    <div className="build-experience-visual-gallery">
      <div className="build-experience-visual-gallery__column build-experience-visual-gallery__column--left">
        {visualDirectionItem ? (
          <BuildVisualCard item={visualDirectionItem} />
        ) : null}

        {visualFlowItem ? <BuildVisualCard item={visualFlowItem} /> : null}
      </div>

      <div className="build-experience-visual-gallery__column build-experience-visual-gallery__column--right">
        {visualBalanceItem ? (
          <BuildVisualCard item={visualBalanceItem} />
        ) : null}

        {motionDirectionItem ? (
          <BuildVisualCard item={motionDirectionItem} />
        ) : null}
      </div>
    </div>
  );
}
