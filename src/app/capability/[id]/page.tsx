import { notFound } from "next/navigation";
import { getCapabilityNavigatorItemById } from "@/data/capability";
import {
  CapabilityDetailContent,
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
      <CapabilityDetailHero item={item} />

      <div className="capability-detail-page__body">
        <CapabilityDetailGallery images={item.detailImages} />

        <CapabilityDetailContent item={item} />
      </div>
    </main>
  );
}
