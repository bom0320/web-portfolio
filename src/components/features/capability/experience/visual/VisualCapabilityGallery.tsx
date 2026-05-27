import type { VisualCapabilityItem } from "@/data/capability/experience";

import VisualCapabilityCard from "./VisualCapabilityCard";

type VisualCapabilityGalleryProps = {
  items: VisualCapabilityItem[];
};

export default function VisualCapabilityGallery({
  items,
}: VisualCapabilityGalleryProps) {
  return (
    <div className="experience-capability-visual-gallery">
      {items.map((item, index) => (
        <VisualCapabilityCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
