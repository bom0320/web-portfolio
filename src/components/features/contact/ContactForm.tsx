"use client";

import { ArrowRight } from "lucide-react";

import { useContactForm } from "@/hooks/useContactForm";

import ContactPurposeOptions from "./ContactPurposeOptions";
import { ContactSubmitModal } from "./modal";

export default function ContactForm() {
  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handlePurposeChange,
    handleSubmit,
    handleCloseModal,
  } = useContactForm();

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__field">
          <label htmlFor="contact-name" className="contact-form__label">
            Name <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요."
            className="contact-form__input"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="contact-form__error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email" className="contact-form__label">
            Email <span>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="답장을 받을 이메일을 입력해주세요."
            className="contact-form__input"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="contact-form__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-role" className="contact-form__label">
            Role | Position
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            placeholder="예: 채용 담당자, 개발자, 디자이너, 팀 리더 등"
            className="contact-form__input"
            value={values.role}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form__field">
          <p className="contact-form__label">
            Purpose <span>*</span>
          </p>
          <ContactPurposeOptions
            value={values.purpose}
            onChange={handlePurposeChange}
          />
          {errors.purpose && (
            <p className="contact-form__error">{errors.purpose}</p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-message" className="contact-form__label">
            Message <span>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="함께 나누고 싶은 이야기를 자유롭게 적어주세요."
            className="contact-form__textarea"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            data-lenis-prevent
          />
          {errors.message && (
            <p id="contact-message-error" className="contact-form__error">
              {errors.message}
            </p>
          )}
        </div>

        <div className="contact-form__submit-wrap">
          <button
            type="submit"
            className="contact-form__submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Submit"}</span>
            <ArrowRight
              size={22}
              strokeWidth={2.4}
              className="contact-form__submit-icon"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>

      {submitStatus && (
        <ContactSubmitModal status={submitStatus} onClose={handleCloseModal} />
      )}
    </>
  );
}
