"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { INTERVIEWS } from "@/data/interviews";
import InterviewAnimation from "../../../animations/interview";
import { InterviewTitle } from "@/components/features/about";

gsap.registerPlugin(ScrollTrigger);

export default function InterviewScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const outlineGroupRef = useRef<SVGGElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const outlineGroup = outlineGroupRef.current;
    const title = titleRef.current;
    const fillGroup = fillGroupRef.current;

    if (!section || !title || !outlineGroup || !fillGroup) return;

    const ctx = gsap.context(() => {
      const titleTween = InterviewAnimation.createTitleFill(
        outlineGroup,
        fillGroup
      );

      ScrollTrigger.create({
        trigger: title,
        start: "top 80%",
        end: "top 45%",
        scrub: true,
        animation: titleTween,
      });

      const rows = gsap.utils.toArray<HTMLElement>(".interview-row", section);

      rows.forEach((row) => {
        const reveal = row.querySelector<HTMLElement>(".interview-row__reveal");
        const overlay = row.querySelector<HTMLElement>(
          ".interview-row__overlay"
        );

        const rowTimeline = InterviewAnimation.row(reveal, overlay);

        ScrollTrigger.create({
          trigger: row,
          start: "top 85%",
          end: "top 65%",
          scrub: true,
          animation: rowTimeline,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-interview"
      aria-label="Interview Section"
    >
      <div className="about-interview__inner">
        <div ref={titleRef} className="about-interview__title">
          <InterviewTitle
            outlineGroupRef={outlineGroupRef}
            fillGroupRef={fillGroupRef}
          />
        </div>

        <div className="about-interview__list">
          {INTERVIEWS.map((item) => (
            <article key={item.id} className="interview-row">
              <div className="interview-row__reveal">
                <div className="interview-row__overlay" />

                <div className="interview-row__q">{item.id}</div>

                <div className="interview-row__content">
                  <h3 className="interview-row__question">{item.question}</h3>
                  <p className="interview-row__answer">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
