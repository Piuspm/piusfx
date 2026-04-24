import nodemailer from "nodemailer";
import cron from "node-cron";
import { pool } from "./db";
import { logger } from "./logger";

const GMAIL_USER = "piusfxke@gmail.com";
const ADMIN_EMAIL = "piusfxke@gmail.com";

function getTransporter() {
  const pass = process.env["GMAIL_APP_PASSWORD"];
  if (!pass) throw new Error("GMAIL_APP_PASSWORD is not set");
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass },
  });
}

export async function sendDailyDigest() {
  const { rows } = await pool.query<{
    id: number;
    email: string;
    created_at: Date;
  }>(
    `SELECT id, email, created_at
       FROM subscribers
      WHERE notified_at IS NULL
      ORDER BY created_at ASC`,
  );

  if (rows.length === 0) {
    logger.info("Daily digest: no new subscribers, skipping email");
    return { sent: false, count: 0 };
  }

  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateLabel = fmt.format(new Date());

  const textRows = rows
    .map((r, i) => `${i + 1}. ${r.email}  —  ${fmt.format(r.created_at)}`)
    .join("\n");

  const htmlRows = rows
    .map(
      (r, i) => `
      <tr>
        <td style="padding:10px 14px; border-bottom:1px solid rgba(255,255,255,0.06); color:#9aa4b2;">${i + 1}</td>
        <td style="padding:10px 14px; border-bottom:1px solid rgba(255,255,255,0.06); color:#fff; font-weight:500;">${r.email}</td>
        <td style="padding:10px 14px; border-bottom:1px solid rgba(255,255,255,0.06); color:#9aa4b2; font-size:13px;">${fmt.format(r.created_at)}</td>
      </tr>`,
    )
    .join("");

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Piusfx Website" <${GMAIL_USER}>`,
    to: ADMIN_EMAIL,
    subject: `Piusfx Daily Digest — ${rows.length} new subscriber${rows.length === 1 ? "" : "s"}`,
    text: `Piusfx Daily Subscriber Digest
Reporting day: ${dateLabel} (Africa/Nairobi, GMT+3)

You have ${rows.length} new subscriber${rows.length === 1 ? "" : "s"} since the last digest:

${textRows}

— Piusfx Website`,
    html: `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#0a0e1a; color:#e6e9ef; margin:0; padding:32px;">
  <div style="max-width:640px; margin:0 auto; background:#0f1524; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:32px;">
    <div style="font-size:22px; font-weight:800; letter-spacing:-0.02em; margin-bottom:6px;">PIUS<span style="color:#D4AF37;">FX</span> · Daily Digest</div>
    <p style="color:#9aa4b2; margin:0 0 24px 0;">Reporting day: ${dateLabel} (GMT+3)</p>
    <p style="font-size:16px; line-height:1.6;">You have <strong style="color:#D4AF37;">${rows.length}</strong> new newsletter subscriber${rows.length === 1 ? "" : "s"} since the last digest.</p>
    <table style="width:100%; border-collapse:collapse; margin-top:16px; background:#0a0e1a; border:1px solid rgba(255,255,255,0.06); border-radius:10px; overflow:hidden;">
      <thead>
        <tr style="background:rgba(212,175,55,0.08);">
          <th style="text-align:left; padding:12px 14px; font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:#D4AF37;">#</th>
          <th style="text-align:left; padding:12px 14px; font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:#D4AF37;">Email</th>
          <th style="text-align:left; padding:12px 14px; font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:#D4AF37;">Subscribed at</th>
        </tr>
      </thead>
      <tbody>${htmlRows}</tbody>
    </table>
    <p style="color:#6b7280; font-size:12px; margin-top:24px;">Sent automatically by your Piusfx website.</p>
  </div>
</body></html>`,
  });

  const ids = rows.map((r) => r.id);
  await pool.query(
    "UPDATE subscribers SET notified_at = now() WHERE id = ANY($1::int[])",
    [ids],
  );

  logger.info({ count: rows.length }, "Daily digest sent");
  return { sent: true, count: rows.length };
}

export function startDigestScheduler() {
  // 00:00 in Africa/Nairobi (GMT+3) every day
  cron.schedule(
    "0 0 * * *",
    () => {
      sendDailyDigest().catch((err) => {
        logger.error({ err }, "Daily digest failed");
      });
    },
    { timezone: "Africa/Nairobi" },
  );
  logger.info("Daily subscriber digest scheduled for 00:00 Africa/Nairobi");
}
