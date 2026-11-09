// Receives enquiry JSON from the site and forwards it to Telegram.
// Secrets come from Netlify environment variables — never hardcode them:
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
const MAX = { name: 100, email: 150, business: 150, service: 60, budget: 60, message: 2000 };
const json = (statusCode, obj) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(obj),
});

exports.handler = async (event) => {
  // Trim whitespace and stray quotes, a very common copy-paste problem in env var values.
  const envVal = (k) => (process.env[k] || "").trim().replace(/^["']|["']$/g, "").trim();
  const token = envVal("TELEGRAM_BOT_TOKEN");
  const chatId = envVal("TELEGRAM_CHAT_ID");

  // Open /.netlify/functions/send-telegram in a browser to check setup (shows yes/no only, never the values).
  if (event.httpMethod === "GET") {
    return json(200, { ok: true, function: "running", TELEGRAM_BOT_TOKEN_set: !!token, TELEGRAM_CHAT_ID_set: !!chatId, node: process.version });
  }
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "Method not allowed" });
  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set");
    return json(503, { ok: false, error: "Notifications are not configured" });
  }

  let data;
  try { data = JSON.parse(event.body || "{}"); }
  catch { return json(400, { ok: false, error: "Invalid request" }); }

  if (data["bot-field"]) return json(200, { ok: true }); // honeypot: pretend success to bots

  const clean = (k, keepNewlines) => {
    let v = String(data[k] ?? "");
    v = keepNewlines ? v.replace(/[^\S\n]+/g, " ") : v.replace(/\s+/g, " ");
    return v.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, "").trim().slice(0, MAX[k]);
  };
  const f = {
    name: clean("name"), email: clean("email"), business: clean("business"),
    service: clean("service"), budget: clean("budget"), message: clean("message", true),
  };
  if (f.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email) || f.message.length < 10) {
    return json(400, { ok: false, error: "Please check the form fields" });
  }

  // Plain text (no parse_mode) so user input can never break the message format.
  const text = [
    "New project enquiry — Sam Tech Builds", "",
    `Name: ${f.name}`, `Email: ${f.email}`,
    `Business: ${f.business || "—"}`, `Service: ${f.service || "—"}`,
    `Budget: ${f.budget || "—"}`, "", "Message:", f.message,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      let why = "";
      try { why = (await res.json()).description || ""; } catch {}
      console.error("Telegram API responded with status", res.status, why); // e.g. "Unauthorized" = bad token, "chat not found" = bad chat ID
      return json(502, { ok: false, error: "Could not deliver notification", telegram: why });
    }
    return json(200, { ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err.name, err.message);
    return json(502, { ok: false, error: "Could not deliver notification", telegram: `network error: ${err.name}` });
  }
};
