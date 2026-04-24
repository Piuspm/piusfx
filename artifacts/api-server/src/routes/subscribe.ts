import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { pool } from "../lib/db";

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

const SUBJECT = "You're In! Here's Your Next Step to Stay Ahead of the Markets";

const TEXT_BODY = `Hi there,

Thanks for subscribing — you've just taken a smart step toward staying ahead of the markets.

At Piusfx, we're committed to helping traders like you sharpen their edge with:

- Weekly market analysis
- Practical trading psychology insights
- Real-time ideas and updates you can actually use

But here's the important part…

To make sure you don't miss out on timely updates and deeper insights, join our private Telegram channel below:

https://t.me/therealpiusfx

This is where we share more immediate market perspectives, trade setups, and valuable discussions with our growing community of traders.

You're now part of a network that's focused on consistency, discipline, and smarter trading decisions — not hype.

See you inside,
PIUSFX.`;

const HTML_BODY = `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#0a0e1a; color:#e6e9ef; margin:0; padding:32px;">
  <div style="max-width:560px; margin:0 auto; background:#0f1524; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:36px;">
    <div style="font-size:24px; font-weight:800; letter-spacing:-0.02em; margin-bottom:24px;">PIUS<span style="color:#D4AF37;">FX</span></div>
    <p style="font-size:16px; line-height:1.6;">Hi there,</p>
    <p style="font-size:16px; line-height:1.6;">Thanks for subscribing — you've just taken a smart step toward staying ahead of the markets.</p>
    <p style="font-size:16px; line-height:1.6;">At Piusfx, we're committed to helping traders like you sharpen their edge with:</p>
    <ul style="font-size:16px; line-height:1.8; padding-left:20px;">
      <li>Weekly market analysis</li>
      <li>Practical trading psychology insights</li>
      <li>Real-time ideas and updates you can actually use</li>
    </ul>
    <p style="font-size:16px; line-height:1.6;">But here's the important part…</p>
    <p style="font-size:16px; line-height:1.6;">📌 To make sure you don't miss out on timely updates and deeper insights, join our private Telegram channel below:</p>
    <p style="text-align:center; margin:28px 0;">
      <a href="https://t.me/therealpiusfx" style="display:inline-block; background:#D4AF37; color:#0a0e1a; text-decoration:none; font-weight:700; padding:14px 28px; border-radius:10px;">👉 Join the Telegram Channel</a>
    </p>
    <p style="font-size:16px; line-height:1.6;">This is where we share more immediate market perspectives, trade setups, and valuable discussions with our growing community of traders.</p>
    <p style="font-size:16px; line-height:1.6;">You're now part of a network that's focused on consistency, discipline, and smarter trading decisions — not hype.</p>
    <p style="font-size:16px; line-height:1.6; margin-top:28px;">See you inside,<br/><strong style="color:#D4AF37;">PIUSFX.</strong></p>
  </div>
</body></html>`;

router.post("/subscribe", async (req, res) => {
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    await pool.query(
      "INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING",
      [email],
    );

    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Piusfx" <${GMAIL_USER}>`,
      to: email,
      subject: SUBJECT,
      text: TEXT_BODY,
      html: HTML_BODY,
    });
    return res.json({ ok: true });
  } catch (err) {
    req.log?.error({ err }, "Failed to send subscription email");
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

export default router;
