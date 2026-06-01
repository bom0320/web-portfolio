import type { ContactSubmitStatus } from "@/data/contacts";

interface ContactSubmitModalIconProps {
  status: ContactSubmitStatus;
}

export default function ContactSubmitModalIcon({
  status,
}: ContactSubmitModalIconProps) {
  return (
    <div
      className={`contact-submit-modal__icon contact-submit-modal__icon--${status}`}
      aria-hidden="true"
    >
      {status === "success" ? "✓" : "!"}
    </div>
  );
}
