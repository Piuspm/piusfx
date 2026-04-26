import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const response = await resend.emails.send({
      from: 'PIUSFX <noreply@piusfx.com>',
      to: ['support@piusfx.com'],
      subject: `New Contact Message from ${firstName} ${lastName}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log("Resend response:", response);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("ERROR:", err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
