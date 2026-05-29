import { notFound } from "next/navigation";

import { getCapabilityNavigatorItemById } from "@/data/capability";
import {
  CapabilityDetailGallery,
  CapabilityDetailHero,
} from "@/components/features/capability/navigator";

interface CapabilityDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CapabilityDetailPage({
  params,
}: CapabilityDetailPageProps) {
  const { id } = await params;
  const item = getCapabilityNavigatorItemById(id);
  return (
    <main className="capability-detail-page">
      <div className="capability-detail-layout">
        <CapabilityDetailHero item={item} />

        <CapabilityDetailGallery images={item.detailImages} />
      </div>
    </main>
  );
}
