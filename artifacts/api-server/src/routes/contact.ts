import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const GMAIL_USER = "piusfxke@gmail.com";

function getTransporter() {
  const pass = process.env["GMAIL_APP_PASSWORD"];
  if (!pass) {
    throw new Error("GMAIL_APP_PASSWORD environment variable is not set");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass },
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

router.post("/contact", async (req, res) => {
  const firstName = String(req.body?.firstName ?? "").trim().slice(0, 80);
  const lastName = String(req.body?.lastName ?? "").trim().slice(0, 80);
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  const message = String(req.body?.message ?? "").trim().slice(0, 5000);

  if (!firstName || !lastName || !message) {
    return res.status(400).json({ ok: false, error: "All fields are required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `New contact form message from ${fullName}`;

  const text = `You received a new message from the Piusfx contact form.

Name: ${fullName}
Email: ${email}

Message:
${message}
`;

  const html = `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#0a0e1a; color:#e6e9ef; margin:0; padding:32px;">
  <div style="max-width:600px; margin:0 auto; background:#0f1524; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:32px;">
    <div style="font-size:22px; font-weight:800; letter-spacing:-0.02em; margin-bottom:20px;">PIUS<span style="color:#D4AF37;">FX</span> &middot; New Contact Message</div>
    <table style="width:100%; font-size:15px; line-height:1.6; border-collapse:collapse;">
      <tr><td style="color:#8b93a7; padding:6px 0; width:90px;">Name</td><td style="padding:6px 0;"><strong>${escapeHtml(fullName)}</strong></td></tr>
      <tr><td style="color:#8b93a7; padding:6px 0;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#D4AF37; text-decoration:none;">${escapeHtml(email)}</a></td></tr>
    </table>
    <hr style="border:none; border-top:1px solid rgba(255,255,255,0.08); margin:20px 0;" />
    <div style="white-space:pre-wrap; font-size:15px; line-height:1.7;">${escapeHtml(message)}</div>
    <p style="font-size:12px; color:#6b7488; margin-top:28px;">Reply directly to this email to respond to ${escapeHtml(fullName)}.</p>
  </div>
</body></html>`;

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Piusfx Contact" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: `"${fullName}" <${email}>`,
      subject,
      text,
      html,
    });
    return res.json({ ok: true });
  } catch (err) {
    req.log?.error({ err }, "Failed to send contact email");
    return res.status(500).json({ ok: false, error: "Failed to send message" });
  }
});

export default router;
