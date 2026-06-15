/**
 * Sends an email via a simple fetch to a backend endpoint.
 * Replace the URL and logic below when a real email API is available.
 * For now it logs and resolves so the form works locally.
 */
export async function sendEmail({ to, subject, body }) {
  console.log("Email would be sent:", { to, subject, body });
  await new Promise((r) => setTimeout(r, 800));
  return { ok: true };
}