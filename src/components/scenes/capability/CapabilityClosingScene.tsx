import {
  CapabilityClosingScrollCue,
  CapabilityClosingStatement,
} from "@/components/features/capability";

export default function CapabilityClosingScene() {
  return (
    <section className="capability-closing js-capability-closing">
      <div className="capability-closing__inner">
        <CapabilityClosingStatement />
      </div>
      <CapabilityClosingScrollCue />
    </section>
  );
}
