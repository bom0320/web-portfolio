import { CONTACT_INTRO } from "@/data/contacts";

export default function ContactIntro() {
  return (
    <div className="contact-intro">
      <p className="contact-intro__eyebrow">{CONTACT_INTRO.eyebrow}</p>

      <h2 className="contact-intro__title">{CONTACT_INTRO.title}</h2>

      <p className="contact-intro__description">
        {CONTACT_INTRO.description.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </div>
  );
}
