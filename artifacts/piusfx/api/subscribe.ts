import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  const { email } = await req.json();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Piusfx <support@piusfx.com>",
    to: email,
    subject: "You're In! Here's Your Next Step to Stay Ahead of the Markets",
    html: `<!doctype html>
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
</body></html>`,
  });

  return Response.json({ ok: true });
}
