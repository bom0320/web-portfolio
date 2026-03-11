"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { INTERVIEWS } from "@/data/interviews";
import InterviewAnimation from "@/components/animations/interview";

gsap.registerPlugin(ScrollTrigger);

export default function AboutInterview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector<HTMLElement>(
        ".about-interview__title"
      );
      const rows = gsap.utils.toArray<HTMLElement>(".interview-row", section);

      if (title) {
        const titleTween = InterviewAnimation.title(title);

        ScrollTrigger.create({
          trigger: title,
          start: "top 85%",
          once: true,
          animation: titleTween,
        });
      }

      rows.forEach((row) => {
        const q = row.querySelector<HTMLElement>(".interview-row__q");
        const content = row.querySelector<HTMLElement>(
          ".interview-row__content"
        );

        const rowTimeline = InterviewAnimation.row(q, content);

        ScrollTrigger.create({
          trigger: row,
          start: "top 85%",
          once: true,
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
        <h2 className="about-interview__title">INTERVIEWS</h2>

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
