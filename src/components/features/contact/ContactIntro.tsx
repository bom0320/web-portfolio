import { CONTACT_INTRO } from "@/data/contacts";

export default function ContactIntro() {
  return (
    <div className="contact-intro js-contact-intro">
      <p className="contact-intro__eyebrow js-contact-intro-eyebrow">
        {CONTACT_INTRO.eyebrow}
      </p>

      <h2 className="contact-intro__title js-contact-intro-title">
        {CONTACT_INTRO.title}
      </h2>

      <p className="contact-intro__description js-contact-intro-description">
        {CONTACT_INTRO.description.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </div>
  );
}
