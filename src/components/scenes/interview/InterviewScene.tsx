"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { INTERVIEWS } from "@/data/interviews";
import { InterviewTitle } from "@/components/features/about";
import { InterviewSceneAnimation } from "@/animations/interview";

gsap.registerPlugin(ScrollTrigger);

export default function InterviewScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const outlineGroupRef = useRef<SVGGElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const outlineGroup = outlineGroupRef.current;
    const fillGroup = fillGroupRef.current;

    if (!section || !outlineGroup || !fillGroup) return;

    const ctx = gsap.context(() => {
      const titleTimeline = InterviewSceneAnimation.createTitleFill(
        outlineGroup,
        fillGroup
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        animation: titleTimeline,
      });

      const rows = gsap.utils.toArray<HTMLElement>(
        ".js-interview-row",
        section
      );

      rows.forEach((row) => {
        const reveal = row.querySelector<HTMLElement>(".js-interview-reveal");

        const overlay = row.querySelector<HTMLElement>(".js-interview-overlay");

        const rowTimeline = InterviewSceneAnimation.row(reveal, overlay);

        ScrollTrigger.create({
          trigger: row,
          start: "top 85%",
          end: "top 55%",
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
      className="interview js-interview"
      aria-label="Interview Section"
    >
      <div className="interview__inner js-interview-inner">
        <div className="interview__title">
          <InterviewTitle
            outlineGroupRef={outlineGroupRef}
            fillGroupRef={fillGroupRef}
          />
        </div>

        <div className="interview__list">
          {INTERVIEWS.map((item) => (
            <article key={item.id} className="interview-row js-interview-row">
              <div className="interview-row__reveal js-interview-reveal">
                <div className="interview-row__overlay js-interview-overlay" />

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
