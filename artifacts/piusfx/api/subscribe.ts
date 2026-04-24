import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'PIUSFX <support@piusfx.com>',
      to: [email],
      subject: "You're In! Here's Your Next Step to Stay Ahead of the Markets",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a;">Hi there,</h2>
          <p>Thanks for subscribing — you've just taken a smart step toward staying ahead of the markets.</p>
          <p>At Piusfx, we're committed to helping traders like you sharpen their edge with:</p>
          <ul>
            <li>Weekly market analysis</li>
            <li>Practical trading psychology insights</li>
            <li>Real-time ideas and updates you can actually use</li>
          </ul>
          <p>But here's the important part…</p>
          <p>📌 <strong>To make sure you don't miss out on timely updates and deeper insights, join our private Telegram channel below:</strong></p>
          <p style="text-align: center;">
            <a href="https://t.me/therealpiusfx" style="background-color: #f0a500; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
              👉 Join Telegram Channel
            </a>
          </p>
          <p>This is where we share more immediate market perspectives, trade setups, and valuable discussions with our growing community of traders.</p>
          <p>You're now part of a network that's focused on consistency, discipline, and smarter trading decisions — not hype.</p>
          <p>See you inside,<br/><strong>PIUSFX</strong></p>
        </div>
      `,
    });

    // Notify you at your email
    await resend.emails.send({
      from: 'PIUSFX <support@piusfx.com>',
      to: ['support@piusfx.com'],
      subject: `New Subscriber: ${email}`,
      html: `<p>New subscriber just signed up: <strong>${email}</strong></p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
