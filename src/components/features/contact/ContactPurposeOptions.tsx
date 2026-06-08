import { CONTACT_PURPOSE_OPTIONS, type ContactPurpose } from "@/data/contacts";

type ContactPurposeOptionsProps = {
  value: ContactPurpose | "";
  error?: string;
  onChange: (value: ContactPurpose) => void;
};

export default function ContactPurposeOptions({
  value,
  error,
  onChange,
}: ContactPurposeOptionsProps) {
  return (
    <div
      className="contact-purpose"
      role="radiogroup"
      aria-labelledby="contact-purpose-label"
      aria-invalid={Boolean(error)}
      aria-describedby={error ? "contact-purpose-error" : undefined}
    >
      {CONTACT_PURPOSE_OPTIONS.map((option) => (
        <label className="contact-purpose__option" key={option}>
          <input
            className="contact-purpose__input"
            type="radio"
            name="purpose"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          <span className="contact-purpose__label">{option}</span>
        </label>
      ))}
    </div>
  );
}
