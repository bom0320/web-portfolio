"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { INTERVIEWS } from "@/data/interviews";
import InterviewAnimation from "@/components/animations/interview";
import InterviewTitle from "./InterviewTitle";

gsap.registerPlugin(ScrollTrigger);

export default function AboutInterview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const fillGroup = fillGroupRef.current;

    if (!section || !title || !fillGroup) return;

    const ctx = gsap.context(() => {
      const titleTween = InterviewAnimation.createTitleFill(fillGroup);
      const rows = gsap.utils.toArray<HTMLElement>(".interview-row", section);

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 35%",
        },
      });

      master.add(titleTween, 0);

      rows.forEach((row) => {
        const q = row.querySelector<HTMLElement>(".interview-row__q");
        const content = row.querySelector<HTMLElement>(
          ".interview-row__content"
        );

        const rowTimeline = InterviewAnimation.row(q, content);

        ScrollTrigger.create({
          trigger: row,
          start: "top 85%",
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
          <InterviewTitle fillGroupRef={fillGroupRef} />
        </div>

        <div className="about-interview__list">
          {INTERVIEWS.map((item) => (
            <article key={item.id} className="interview-row">
              <div className="interview-row__q">{item.id}</div>

              <div className="interview-row__content">
                <h3 className="interview-row__question">{item.question}</h3>
                <p className="interview-row__answer">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
