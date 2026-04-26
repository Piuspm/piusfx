import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const email = String(req.body?.email ?? '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }

  try {
    await resend.emails.send({
      from: 'PIUSFX <noreply@piusfx.com>',
      to: [email],
      replyTo: email,
      subject: "You're In! Here's Your Next Step to Stay Ahead of the Markets",
      html: `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#0a0e1a;color:#e6e9ef;margin:0;padding:32px;">
  <div style="max-width:560px;margin:0 auto;background:#0f1524;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:36px;">
    <div style="font-size:24px;font-weight:800;margin-bottom:24px;">PIUS<span style="color:#D4AF37;">FX</span></div>
    <p style="font-size:16px;line-height:1.6;">Hi there,</p>
    <p style="font-size:16px;line-height:1.6;">Thanks for subscribing — you've just taken a smart step toward staying ahead of the markets.</p>
    <p style="font-size:16px;line-height:1.6;">At Piusfx, we're committed to helping traders like you sharpen their edge with:</p>
    <ul style="font-size:16px;line-height:1.8;padding-left:20px;">
      <li>Weekly market analysis</li>
      <li>Practical trading psychology insights</li>
      <li>Real-time ideas and updates you can actually use</li>
    </ul>
    <p style="font-size:16px;line-height:1.6;">But here's the important part…</p>
    <p style="font-size:16px;line-height:1.6;">📌 <strong>To make sure you don't miss out on timely updates and deeper insights, join our private Telegram channel below:</strong></p>
    <p style="text-align:center;margin:28px 0;">
      <a href="https://t.me/therealpiusfx" style="display:inline-block;background:#D4AF37;color:#0a0e1a;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:10px;">👉 Join the Telegram Channel</a>
    </p>
    <p style="font-size:16px;line-height:1.6;">You're now part of a network focused on consistency, discipline, and smarter trading — not hype.</p>
    <p style="font-size:16px;line-height:1.6;margin-top:28px;">See you inside,<br/><strong style="color:#D4AF37;">PIUSFX.</strong></p>
  </div>
</body></html>`,
    });

    await resend.emails.send({
      from: 'PIUSFX <noreply@piusfx.com>',
      to: ['support@piusfx.com'],
      replyTo: email,
      subject: `New Subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}
