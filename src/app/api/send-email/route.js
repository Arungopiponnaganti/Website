import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  try {
    const { name, email, subject, phone, message } = await request.json();

    if (!name || !email || !subject || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <manisubrahmanyam8032ch@gmail.com>',
      to: ['manisubrahmanyam8032ch@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
          
          <!-- Header -->
          <div style="background: #185FA5; padding: 24px 28px;">
            <p style="margin: 0; font-size: 11px; font-weight: bold; color: #B5D4F4; text-transform: uppercase; letter-spacing: 1px;">Contact Form</p>
            <p style="margin: 6px 0 0; font-size: 20px; color: #E6F1FB;">New message received</p>
          </div>

          <!-- Sender info -->
          <div style="padding: 24px 28px 0;">
            <div style="padding-bottom: 20px; border-bottom: 1px solid #eeeeee; margin-bottom: 20px;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #111111;">${name}</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #666666;">${email}</p>
            </div>

            <!-- Details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #888888; width: 80px;">Phone</td>
                <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="border-top: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-size: 13px; color: #888888;">Subject</td>
                <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${subject}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: #f7f9fc; border-radius: 6px; padding: 16px 18px; border-left: 3px solid #185FA5; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 11px; font-weight: bold; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.6;">${message || 'No message provided'}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 14px 28px; border-top: 1px solid #eeeeee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="font-size: 12px; color: #aaaaaa;">Sent via your website contact form</td>
                <td style="font-size: 12px; color: #aaaaaa; text-align: right;">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>
            </table>
          </div>

        </div>
      `,
      replyTo: email
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}