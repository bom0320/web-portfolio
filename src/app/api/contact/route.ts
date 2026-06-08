import { NextResponse } from "next/server";
import { Resend } from "resend";

import type { ContactFormValues } from "@/data/contacts";
import { createContactEmailHtml } from "@/lib/contact/createContactEmailHtml";
import {
  hasContactFormErrors,
  validateContactForm,
} from "@/lib/contact/validateContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormValues>;

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

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const senderEmail = process.env.CONTACT_SENDER_EMAIL;

    if (!receiverEmail || !senderEmail) {
      return NextResponse.json(
        {
          message: "Missing contact email environment variables",
        },
        {
          status: 500,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      replyTo: values.email,
      subject: `[Portfolio] ${values.purpose} - ${values.name}`,
      html: createContactEmailHtml(values),
    });

    if (error) {
      console.error("[CONTACT_EMAIL_ERROR]", error);

      return NextResponse.json(
        {
          message: "Failed to send contact email",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Contact email sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("[CONTACT_SUBMIT_ERROR]", error);

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
