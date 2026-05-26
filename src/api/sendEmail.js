/**
 * Sends an email via a simple fetch to a backend endpoint.
 * Replace the URL below with your real email API if you have one.
 * For now it just logs and resolves so the form still works locally.
 */
export async function sendEmail({ to, subject, body }) {
  console.log("Email would be sent:", { to, subject, body });
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800));
  return { ok: true };
}
