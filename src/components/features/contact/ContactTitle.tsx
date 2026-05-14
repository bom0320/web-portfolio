"use client";

import { CONTACT_TITLE_FILL_PATHS } from "@/assets/svg/contactTitlePath";

type ContactTitleProps = {
  fillGroupRef: React.RefObject<SVGGElement | null>;
};

export default function ContactTitle({ fillGroupRef }: ContactTitleProps) {
  return (
    <svg
      className="contact-title__svg"
      viewBox="0 0 678 83"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.45}>
        {CONTACT_TITLE_FILL_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth={2}
          />
        ))}
      </g>

      <g ref={fillGroupRef} opacity={0}>
        {CONTACT_TITLE_FILL_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgb(255, 255, 255)" />
        ))}
      </g>
    </svg>
  );
}
