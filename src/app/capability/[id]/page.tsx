import { notFound } from "next/navigation";

import { getCapabilityNavigatorItemById } from "@/data/capability";
import {
  CapabilityDetailGallery,
  CapabilityDetailHero,
} from "@/components/features/capability/navigator";

interface CapabilityDetailPageProps {
  params: {
    id: string;
  };
}

export default function CapabilityDetailPage({
  params,
}: CapabilityDetailPageProps) {
  const item = getCapabilityNavigatorItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <main className="capability-detail-page">
      <div className="capability-detail-layout">
        <CapabilityDetailHero item={item} />

        <CapabilityDetailGallery images={item.detailImages} />
      </div>
    </main>
  );
}
