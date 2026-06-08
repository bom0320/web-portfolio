import { type ChangeEvent, type FormEvent, useState } from "react";

import {
  type ContactFormValues,
  type ContactPurpose,
  type ContactSubmitStatus,
} from "@/data/contacts";
import { sendContactForm } from "@/lib/contact/sendContactForm";
import {
  hasContactFormErrors,
  validateContactForm,
  type ContactFormErrors,
} from "@/lib/contact/validateContactForm";

const INITIAL_CONTACT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  role: "",
  purpose: "",
  message: "",
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(
    INITIAL_CONTACT_FORM_VALUES
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<ContactSubmitStatus | null>(
    null
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handlePurposeChange = (purpose: ContactPurpose) => {
    setValues((prevValues) => ({
      ...prevValues,
      purpose,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      purpose: undefined,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const nextErrors = validateContactForm(values);

    if (hasContactFormErrors(nextErrors)) {
      setErrors(nextErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await sendContactForm(values);

      setValues(INITIAL_CONTACT_FORM_VALUES);
      setErrors({});
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setSubmitStatus(null);
  };

  return {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handlePurposeChange,
    handleSubmit,
    handleCloseModal,
  };
}
