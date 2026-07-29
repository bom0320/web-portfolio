import type { BuildVisualItem } from "@/data/build";

import BuildVisualCard from "./BuildVisualCard";

type BuildVisualGalleryProps = {
  items: BuildVisualItem[];
};

export default function BuildVisualGallery({ items }: BuildVisualGalleryProps) {
  const characterItem = items.find((item) => item.id === "character");
  const typographyItem = items.find((item) => item.id === "typography");
  const storytellingItem = items.find((item) => item.id === "storytelling");
  const motionItem = items.find((item) => item.id === "motion");

  return (
    <div className="build-experience-visual-gallery">
      <div className="build-experience-visual-gallery__column build-experience-visual-gallery__column--left">
        {characterItem ? <BuildVisualCard item={characterItem} /> : null}

        {storytellingItem ? <BuildVisualCard item={storytellingItem} /> : null}
      </div>

      <div className="build-experience-visual-gallery__column build-experience-visual-gallery__column--right">
        {typographyItem ? <BuildVisualCard item={typographyItem} /> : null}

        {motionItem ? <BuildVisualCard item={motionItem} /> : null}
      </div>
    </div>
  );
}
