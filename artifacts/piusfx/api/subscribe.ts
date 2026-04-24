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
    html: `<!-- your existing HTML_BODY here -->`,
  });

  return Response.json({ ok: true });
}