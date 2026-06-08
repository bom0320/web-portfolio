import type { ContactFormValues } from "@/data/contacts";

export async function sendContactForm(values: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
      purpose: values.purpose.trim(),
      message: values.message.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return response.json();
}
