"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import type { ContactSubmitStatus } from "@/data/contacts";
import ContactPurposeOptions from "./ContactPurposeOptions";
import { ContactSubmitModal } from "./modal";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<ContactSubmitStatus | null>(
    null
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: 실제 메일 전송 API 연결 후 success/error 분기 처리
    setSubmitStatus("success");
  };

  const handleCloseModal = () => {
    setSubmitStatus(null);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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
            required
          />
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
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-role" className="contact-form__label">
            Role | Position
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            placeholder="예: 채용 담당자, 개발자, 디자이너, 팀 리더"
            className="contact-form__input"
          />
        </div>

        <div className="contact-form__field">
          <p className="contact-form__label">
            Purpose <span>*</span>
          </p>
          <ContactPurposeOptions />
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
            required
          />
        </div>

        <div className="contact-form__submit-wrap">
          <button type="submit" className="contact-form__submit">
            <span>Submit</span>
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
