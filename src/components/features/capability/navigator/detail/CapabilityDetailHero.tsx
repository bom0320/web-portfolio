import Link from "next/link";
import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityDetailHeroProps {
  item: CapabilityNavigatorItem;
}

export default function CapabilityDetailHero({
  item,
}: CapabilityDetailHeroProps) {
  return (
    <aside className="capability-detail-hero">
      <Link
        href="/#capability-navigator"
        className="capability-detail-hero__back"
        aria-label="프로젝트 목록으로 돌아가기"
      >
        <span className="capability-detail-hero__back-icon">←</span>
      </Link>

      <div className="capability-detail-hero__text">
        <p className="capability-detail-hero__category">{item.category}</p>

        <h1 className="capability-detail-hero__title">{item.title}</h1>

        <p className="capability-detail-hero__overview">{item.overview}</p>
      </div>
    </aside>
  );
}
