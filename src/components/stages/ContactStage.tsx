"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ContactScene } from "@/components/scenes/contact";
import { createContactFooterAnimation } from "@/animations/contact";

gsap.registerPlugin(ScrollTrigger);

function refreshScrollTrigger() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
}

export default function ContactStage() {
  const stageRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const footer = stage.querySelector<HTMLElement>(".js-contact-footer");

      if (!footer) {
        refreshScrollTrigger();
        return;
      }

      const footerTimeline = createContactFooterAnimation({ footer });

      const footerTrigger = ScrollTrigger.create({
        trigger: footer,
        start: "top 100%",
        end: "top 72%",
        scrub: 1,
        animation: footerTimeline,
        invalidateOnRefresh: true,
        markers: true,
      });

      refreshScrollTrigger();

      return () => {
        footerTrigger.kill();
        footerTimeline.kill();
      };
    }, stage);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stageRef} className="contact-stage">
      <ContactScene />
    </section>
  );
}
