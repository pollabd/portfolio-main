import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const targetEmail = process.env.CONTACT_TARGET_EMAIL;

    if (!targetEmail) {
      return NextResponse.json({ error: 'Contact email is not configured' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: targetEmail,
      subject: `Portfolio inquiry from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 });
  }
}

