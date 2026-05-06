import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, phone, message, company, readinessScore, metadata, quizAnswers } = await request.json();

    if (!name || !email) {
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

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST,
      port: parseInt(process.env.NEXT_SMTP_PORT) || 587,
      secure: process.env.NEXT_SMTP_SECURE === 'true',
      auth: {
        user: process.env.NEXT_SMTP_USER,
        pass: process.env.NEXT_SMTP_PASS,
      },
    });

    const formType = metadata?.formType || subject || 'Contact Form';
    const sourceSection = metadata?.sourceSection || 'Contact';
    const sourcePage = metadata?.sourcePage || 'Website';
    const readinessLevel = metadata?.readinessLevel || '';
    const pageUrl = metadata?.pageUrl || '';

    let quizAnswersHtml = '';
    if (quizAnswers && quizAnswers.length > 0) {
      quizAnswersHtml = `
        <!-- Quiz Answers -->
        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 12px; font-size: 11px; font-weight: bold; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Quiz Answers</p>
          ${quizAnswers.map((qa, index) => `
            <div style="background: #f7f9fc; border-radius: 6px; padding: 12px 14px; margin-bottom: 8px; border-left: 3px solid #185FA5;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #666666; font-weight: 500;">Q${index + 1}: ${qa.question}</p>
              <p style="margin: 0; font-size: 13px; color: #111111; font-weight: bold;">${qa.answer}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    const mailOptions = {
      from: process.env.NEXT_SMTP_FROM || process.env.NEXT_SMTP_USER,
      to: process.env.NEXT_SMTP_TO || process.env.NEXT_SMTP_USER,
      subject: `New ${formType}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
          
          <!-- Header -->
          <div style="background: #185FA5; padding: 24px 28px;">
            <p style="margin: 0; font-size: 11px; font-weight: bold; color: #B5D4F4; text-transform: uppercase; letter-spacing: 1px;">${sourcePage} - ${sourceSection}</p>
            <p style="margin: 6px 0 0; font-size: 20px; color: #E6F1FB;">${formType}</p>
          </div>

          <!-- Sender info -->
          <div style="padding: 24px 28px 0;">
            <div style="padding-bottom: 20px; border-bottom: 1px solid #eeeeee; margin-bottom: 20px;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #111111;">${name}</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #666666;">${email}</p>
              ${company ? `<p style="margin: 4px 0 0; font-size: 13px; color: #666666;">${company}</p>` : ''}
            </div>

            <!-- Details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #888888; width: 80px;">Phone</td>
                <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${phone}</td>
              </tr>` : ''}
              ${readinessScore ? `
              <tr style="border-top: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-size: 13px; color: #888888;">Readiness</td>
                <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${readinessScore} ${readinessLevel ? `(${readinessLevel})` : ''}</td>
              </tr>` : ''}
              ${subject ? `
              <tr style="border-top: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-size: 13px; color: #888888;">Subject</td>
                <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${subject}</td>
              </tr>` : ''}
            </table>

            ${quizAnswersHtml}

            ${message ? `
            <!-- Message -->
            <div style="background: #f7f9fc; border-radius: 6px; padding: 16px 18px; border-left: 3px solid #185FA5; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 11px; font-weight: bold; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.6;">${message}</p>
            </div>` : ''}
          </div>

          <!-- Footer -->
          <div style="padding: 14px 28px; border-top: 1px solid #eeeeee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="font-size: 12px; color: #aaaaaa;">${pageUrl ? `Page: ${pageUrl}` : 'Sent via your website contact form'}</td>
                <td style="font-size: 12px; color: #aaaaaa; text-align: right;">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            </table>
          </div>

        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('SMTP Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}