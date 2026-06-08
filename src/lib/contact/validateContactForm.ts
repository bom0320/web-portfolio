import type { ContactFormValues } from "@/data/contacts";

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "이름을 입력해주세요.";
  }

  if (!values.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아니에요 다시 입력해주세요.";
  }

  if (!values.purpose.trim()) {
    errors.purpose = "문의 목적을 선택해주세요.";
  }

  if (!values.message.trim()) {
    errors.message = "메시지를 입력해주세요.";
  } else if (values.message.trim().length < 10) {
    errors.message = "메시지는 10자 이상 입력해주세요.";
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
