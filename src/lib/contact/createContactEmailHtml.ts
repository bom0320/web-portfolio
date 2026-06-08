import type { ContactFormValues } from "@/data/contacts";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function createContactEmailHtml(values: ContactFormValues) {
  const name = escapeHtml(values.name);
  const email = escapeHtml(values.email);
  const role = escapeHtml(values.role || "미입력");
  const purpose = escapeHtml(values.purpose);
  const message = escapeHtml(values.message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2>포트폴리오 Contact 문의</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">이름</th>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">이메일</th>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">역할</th>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${role}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">문의 목적</th>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${purpose}</td>
          </tr>
        </tbody>
      </table>

      <h3 style="margin-top: 24px;">메시지</h3>
      <p style="padding: 16px; background: #f6f6f6; border-radius: 12px;">${message}</p>
    </div>
  `;
}
