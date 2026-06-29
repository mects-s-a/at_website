// src/contact/sendemail.js
export async function sendEmail({ to, subject, body }) {
  console.log("sendEmail called:", { to, subject, body });
  // TODO: wire up a real email service (EmailJS, Resend, etc.)
  return { ok: true };
}