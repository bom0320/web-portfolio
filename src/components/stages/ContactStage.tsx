"use client";

import { useRef } from "react";

import { ContactScene } from "@/components/scenes/contact";
import { useSectionViewTracking } from "@/hooks/useSectionViewTracking";
import { useContactStageAnimation } from "./hooks/useContactStageAnimation";

export default function ContactStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useContactStageAnimation(stageRef);

  useSectionViewTracking(stageRef, {
    sectionName: "contact",
    sectionOrder: 3,
  });

  return (
    <section id="contact" ref={stageRef} className="contact-stage">
      <ContactScene />
    </section>
  );
}
