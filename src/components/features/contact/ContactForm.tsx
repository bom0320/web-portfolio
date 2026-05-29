"use client";

import { ArrowRight } from "lucide-react";
import ContactPurposeOptions from "./ContactPurposeOptions";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
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
  );
}
