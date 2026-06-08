import { NextResponse } from "next/server";

import type { ContactFormValues } from "@/data/contacts";
import {
  hasContactFormErrors,
  validateContactForm,
} from "@/lib/contact/validateContactForm";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormValues;

    const values: ContactFormValues = {
      name: body.name ?? "",
      email: body.email ?? "",
      role: body.role ?? "",
      purpose: body.purpose ?? "",
      message: body.message ?? "",
    };

    const errors = validateContactForm(values);

    if (hasContactFormErrors(errors)) {
      return NextResponse.json(
        {
          message: "Invalid contact form values",
          errors,
        },
        {
          status: 400,
        }
      );
    }

    console.log("[CONTACT_SUBMIT]", values);

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
      },
      {
        status: 200,
      }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Failed to submit contact form",
      },
      {
        status: 500,
      }
    );
  }
}
