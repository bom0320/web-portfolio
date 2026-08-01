import { type ChangeEvent, type FormEvent, useRef, useState } from "react";

import {
  type ContactFormValues,
  type ContactPurpose,
  type ContactSubmitStatus,
} from "@/data/contacts";
import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";
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

const getMessageLengthBucket = (
  length: number
): "short" | "medium" | "long" => {
  if (length < 50) return "short";
  if (length < 200) return "medium";

  return "long";
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

  const hasTrackedFormStart = useRef(false);

  const trackFormStarted = (): void => {
    if (hasTrackedFormStart.current) return;

    hasTrackedFormStart.current = true;

    trackAmplitudeEvent(ANALYTICS_EVENT.CONTACT_FORM_STARTED, {
      source_section: "contact",
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    trackFormStarted();

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
    trackFormStarted();

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

      trackAmplitudeEvent(ANALYTICS_EVENT.CONTACT_FORM_SUBMITTED, {
        purpose: values.purpose,
        has_role: Boolean(values.role.trim()),
        message_length_bucket: getMessageLengthBucket(values.message.length),
      });

      setValues(INITIAL_CONTACT_FORM_VALUES);
      setErrors({});
      setSubmitStatus("success");
      hasTrackedFormStart.current = false;
    } catch {
      trackAmplitudeEvent(ANALYTICS_EVENT.CONTACT_FORM_FAILED, {
        purpose: values.purpose,
      });

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
