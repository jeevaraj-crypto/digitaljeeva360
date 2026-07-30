import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  contact?: string;
  service?: string;
  message?: string;
  question?: string;
  source?: string;
};

// TODO: Replace this placeholder with a real email provider integration,
// e.g. Resend (https://resend.com) or Nodemailer + SMTP credentials.
// Example with Resend:
//
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Digital Kavin Website <noreply@digitalkavin.com>",
//     to: site.email,
//     subject: `New lead from ${payload.name}`,
//     text: buildLeadEmailBody(payload),
//   });
async function sendLeadEmail(payload: LeadPayload) {
  console.log(`[lead] New lead for ${site.email}:`, payload);
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const contact = (payload.email || payload.phone || payload.contact || "").trim();

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Name and email/phone are required." },
      { status: 400 }
    );
  }

  await sendLeadEmail(payload);

  return NextResponse.json({ ok: true });
}
