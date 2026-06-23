import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "שם והודעה הם שדות חובה" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Nanosh Hair Style <onboarding@resend.dev>",
    to: "ilanit00777@gmail.com",
    subject: `פנייה חדשה מ-${name}`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 500px; color: #222;">
        <h2 style="color: #C8A97E;">פנייה חדשה מהאתר</h2>
        <p><strong>שם:</strong> ${name}</p>
        ${phone ? `<p><strong>טלפון:</strong> ${phone}</p>` : ""}
        <p><strong>הודעה:</strong></p>
        <p style="background: #f5f5f5; padding: 12px; border-radius: 4px;">${message.replace(/\n/g, "<br>")}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">נשלח מ-Nanosh Hair Style Website</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "שגיאה בשליחת המייל" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
