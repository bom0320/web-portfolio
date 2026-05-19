"use client";

import { useRef } from "react";
import { INTERVIEWS } from "@/data/interviews";
import { InterviewTitle } from "@/components/features/about";

export default function InterviewScene() {
  const outlineGroupRef = useRef<SVGGElement | null>(null);
  const fillGroupRef = useRef<SVGGElement | null>(null);

  return (
    <section
      className="about-interview js-about-interview"
      aria-label="Interview Section"
    >
      <div className="about-interview__inner">
        <div className="about-interview__title">
          <InterviewTitle
            outlineGroupRef={outlineGroupRef}
            fillGroupRef={fillGroupRef}
          />
        </div>

        <div className="about-interview__list">
          {INTERVIEWS.map((item) => (
            <article
              key={item.id}
              className="interview-row js-about-interview-row"
            >
              <div className="interview-row__reveal js-about-interview-reveal">
                <div className="interview-row__overlay js-about-interview-overlay" />

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
