"use client";

import { useRef } from "react";

import { ContactScene } from "@/components/scenes/contact";
import { useContactStageAnimation } from "./hooks/useContactStageAnimation";

export default function ContactStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useContactStageAnimation(stageRef);

  return (
    <section ref={stageRef} className="contact-stage">
      <ContactScene />
    </section>
  );
}
