"use client";

import { X } from "lucide-react";
import {
  CONTACT_SUBMIT_MODAL,
  type ContactSubmitStatus,
} from "@/data/contacts";
import ContactSubmitModalIcon from "./ContactSubmitModalIcon";

interface ContactSubmitModalProps {
  status: ContactSubmitStatus;
  onClose: () => void;
}

export default function ContactSubmitModal({
  status,
  onClose,
}: ContactSubmitModalProps) {
  const modal = CONTACT_SUBMIT_MODAL[status];

  return (
    <div
      className="contact-submit-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-submit-modal-title"
    >
      <button
        type="button"
        className="contact-submit-modal__backdrop"
        aria-label="모달 닫기"
        onClick={onClose}
      />

      <div className="contact-submit-modal__card">
        <button
          type="button"
          className="contact-submit-modal__close"
          aria-label="닫기"
          onClick={onClose}
        >
          <X size={24} strokeWidth={2.2} />
        </button>

        <ContactSubmitModalIcon status={status} />

        <h3
          id="contact-submit-modal-title"
          className="contact-submit-modal__title"
        >
          {modal.title}
        </h3>

        <p className="contact-submit-modal__description">
          {modal.description.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <button
          type="button"
          className="contact-submit-modal__button"
          onClick={onClose}
        >
          {modal.buttonLabel}
        </button>
      </div>
    </div>
  );
}
