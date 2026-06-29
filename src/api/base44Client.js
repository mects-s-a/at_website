// src/api/base44Client.js
export const base44 = {
  auth: {
    me: async () => {
      throw new Error("Not authenticated");
    },
  },
  integrations: {
    Core: {
      SendEmail: async ({ to, subject, body }) => {
        console.log("SendEmail called:", { to, subject, body });
        // TODO: wire up a real email service (EmailJS, Resend, etc.)
        return { ok: true };
      },
      InvokeLLM: async ({ prompt }) => {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }],
          }),
        });
        const data = await response.json();
        return data.content?.[0]?.text ?? "Não foi possível obter uma resposta.";
      },
    },
  },
};