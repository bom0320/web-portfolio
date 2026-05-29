import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityDetailContentProps {
  item: CapabilityNavigatorItem;
}

export default function CapabilityDetailContent({
  item,
}: CapabilityDetailContentProps) {
  return (
    <section className="capability-detail-content">
      <div className="capability-detail-content__block">
        <h2>Overview</h2>
        <p>{item.overview}</p>
      </div>

      <div className="capability-detail-content__grid">
        <div className="capability-detail-content__meta">
          <h3>Period</h3>
          <p>{item.period}</p>
        </div>

        <div className="capability-detail-content__meta">
          <h3>Contribution</h3>
          <p>{item.contribution}</p>
        </div>

        <div className="capability-detail-content__meta">
          <h3>Role</h3>
          <p>{item.role}</p>
        </div>

        <div className="capability-detail-content__meta">
          <h3>Keywords</h3>
          <p>{item.stack.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}
