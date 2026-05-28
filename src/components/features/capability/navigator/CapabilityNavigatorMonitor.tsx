"use client";

import Image from "next/image";
import { CAPABILITY_NAVIGATOR_MONITOR_FRAME } from "@/assets/capabilityImages";
import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityNavigatorMonitorProps {
  items: CapabilityNavigatorItem[];
  activeIndex: number;
}

export default function CapabilityNavigatorMonitor({
  items,
  activeIndex,
}: CapabilityNavigatorMonitorProps) {
  return (
    <div className="capability-navigator-monitor">
      <div className="capability-navigator-monitor__stage">
        <Image
          src={CAPABILITY_NAVIGATOR_MONITOR_FRAME}
          alt=""
          width={900}
          height={700}
          className="capability-navigator-monitor__mockup"
          priority
        />

        <div className="capability-navigator-monitor__screen">
          <div className="capability-navigator-monitor__viewport">
            {items.map((item, index) => (
              <Image
                key={item.id}
                src={item.heroImage}
                alt={`${item.title} preview`}
                fill
                className={`capability-navigator-monitor__screen-image ${
                  index === activeIndex ? "is-active" : ""
                }`}
                sizes="(max-width: 1024px) 42vw, 520px"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
