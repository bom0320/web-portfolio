"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import {
  CONTACT_SUBMIT_MODAL,
  type ContactSubmitStatus,
} from "@/data/contacts";

import { createContactSubmitModalAnimation } from "@/animations/contact";

import ContactSubmitModalIcon from "./ContactSubmitModalIcon";

interface ContactSubmitModalProps {
  status: ContactSubmitStatus;
  onClose: () => void;
}

export default function ContactSubmitModal({
  status,
  onClose,
}: ContactSubmitModalProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLButtonElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const animationRef = useRef<ReturnType<
    typeof createContactSubmitModalAnimation
  > | null>(null);

  const [isClosing, setIsClosing] = useState(false);

  const modal = CONTACT_SUBMIT_MODAL[status];

  useLayoutEffect(() => {
    const root = rootRef.current;
    const backdrop = backdropRef.current;
    const card = cardRef.current;

    if (!root || !backdrop || !card) return;

    const animation = createContactSubmitModalAnimation({
      root,
      backdrop,
      card,
    });

    animationRef.current = animation;
    animation.open();

    return () => {
      animation.destroy();
      animationRef.current = null;
    };
  }, []);

  const handleClose = () => {
    if (isClosing) return;

    setIsClosing(true);

    if (!animationRef.current) {
      onClose();
      return;
    }

    animationRef.current.close(onClose);
  };

  return (
    <div
      ref={rootRef}
      className="contact-submit-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-submit-modal-title"
    >
      <button
        ref={backdropRef}
        type="button"
        className="contact-submit-modal__backdrop"
        aria-label="모달 닫기"
        onClick={handleClose}
      />

      <div ref={cardRef} className="contact-submit-modal__card">
        <button
          type="button"
          className="contact-submit-modal__close"
          aria-label="닫기"
          onClick={handleClose}
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
          onClick={handleClose}
        >
          {modal.buttonLabel}
        </button>
      </div>
    </div>
  );
}
