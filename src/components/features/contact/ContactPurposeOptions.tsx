import { CONTACT_PURPOSE_OPTIONS } from "@/data/contacts";

type ContactPurposeOptionsProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ContactPurposeOptions({
  value,
  onChange,
}: ContactPurposeOptionsProps) {
  return (
    <div className="contact-purpose">
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
