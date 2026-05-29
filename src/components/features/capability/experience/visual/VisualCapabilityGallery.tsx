import type { VisualCapabilityItem } from "@/data/capability/experience";

import VisualCapabilityCard from "./VisualCapabilityCard";

type VisualCapabilityGalleryProps = {
  items: VisualCapabilityItem[];
};

export default function VisualCapabilityGallery({
  items,
}: VisualCapabilityGalleryProps) {
  const characterItem = items.find((item) => item.id === "character");
  const typographyItem = items.find((item) => item.id === "typography");
  const storytellingItem = items.find((item) => item.id === "storytelling");
  const motionItem = items.find((item) => item.id === "motion");

  return (
    <div className="experience-capability-visual-gallery">
      <div className="experience-capability-visual-gallery__column experience-capability-visual-gallery__column--left">
        {characterItem ? <VisualCapabilityCard item={characterItem} /> : null}
        {storytellingItem ? (
          <VisualCapabilityCard item={storytellingItem} />
        ) : null}
      </div>

      <div className="experience-capability-visual-gallery__column experience-capability-visual-gallery__column--right">
        {typographyItem ? <VisualCapabilityCard item={typographyItem} /> : null}
        {motionItem ? <VisualCapabilityCard item={motionItem} /> : null}
      </div>
    </div>
  );
}
