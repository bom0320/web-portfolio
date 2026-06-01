import { CONTACT_PURPOSE_OPTIONS } from "@/data/contacts";

export default function ContactPurposeOptions() {
  return (
    <div className="contact-purpose">
      {CONTACT_PURPOSE_OPTIONS.map((option) => (
        <label className="contact-purpose__option" key={option}>
          <input
            className="contact-purpose__input"
            type="radio"
            name="purpose"
            value={option}
          />
          <span className="contact-purpose__label">{option}</span>
        </label>
      ))}
    </div>
  );
}
