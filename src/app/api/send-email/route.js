import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  try {
    const { name, email, subject, phone, message, company, readinessScore, metadata, quizAnswers, preferred_date, brief, legacy_details, ...otherFields } = await request.json();

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

    const formType = metadata?.formType || 'Contact Form';
    const sourceSection = metadata?.section || metadata?.sourceSection || 'Contact';
    const sourcePage = metadata?.page || metadata?.sourcePage || 'Website';
    const sourceModal = metadata?.modal || '';
    const engagementModel = metadata?.engagementModel || '';
    const engagementModelType = metadata?.engagementModelType || '';
    const readinessLevel = metadata?.readinessLevel || '';
    const pageUrl = metadata?.pageUrl || '';
    const assessmentData = metadata?.assessmentData || null;

    let assessmentHtml = '';
    if (assessmentData) {
      const { score, level, sublabel, recommendations, dimensions } = assessmentData;
      
      assessmentHtml = `
        <!-- DevOps Maturity Assessment Results -->
        <div style="margin-bottom: 24px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; padding: 20px 24px; margin-bottom: 20px; color: white;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 14px; color: rgba(255, 255, 255, 0.9); font-weight: 500;">DevOps Maturity Score</span>
              <span style="font-size: 32px; color: white; font-weight: bold;">${score}%</span>
            </div>
            <div style="font-size: 16px; color: white; font-weight: bold; margin-bottom: 4px;">${level} Level</div>
            <div style="font-size: 13px; color: rgba(255, 255, 255, 0.85);">${sublabel}</div>
          </div>

          <!-- Dimension Breakdown -->
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 12px; font-size: 12px; font-weight: bold; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Assessment Breakdown</p>
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              ${dimensions.map((dim, index) => `
                <div style="padding: 14px 16px; ${index < dimensions.length - 1 ? 'border-bottom: 1px solid #e0e0e0;' : ''} ${index % 2 === 0 ? 'background: #f9fafb;' : ''}">
                  <div style="font-size: 12px; color: #666666; margin-bottom: 4px; font-weight: 500;">${dim.dimension}</div>
                  <div style="font-size: 14px; color: #111111; font-weight: 600;">${dim.selectedValue}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Recommendations -->
          ${recommendations && recommendations.length > 0 ? `
            <div>
              <p style="margin: 0 0 12px; font-size: 12px; font-weight: bold; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Recommended Next Steps</p>
              ${recommendations.map((rec, index) => `
                <div style="background: linear-gradient(135deg, #f7f9fc 0%, #e8f0fe 100%); border-radius: 8px; padding: 14px 16px; margin-bottom: 10px; border-left: 4px solid #667eea;">
                  <div style="font-size: 14px; color: #111111; font-weight: 600; margin-bottom: 4px;">${rec.t}</div>
                  <div style="font-size: 13px; color: #555555; line-height: 1.5;">${rec.d}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    let quizAnswersHtml = '';
    // Only show quiz answers if there's no assessment data (to avoid duplication)
    if (quizAnswers && quizAnswers.length > 0 && !assessmentData) {
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

    let additionalFieldsHtml = '';
    
    // Add date field if present
    if (preferred_date) {
      additionalFieldsHtml += `
        <tr style="border-top: 1px solid #eeeeee;">
          <td style="padding: 8px 0; font-size: 13px; color: #888888;">Preferred Date</td>
          <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${new Date(preferred_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
        </tr>`;
    }
    
    // Add brief field if present
    if (brief) {
      additionalFieldsHtml += `
        <tr style="border-top: 1px solid #eeeeee;">
          <td style="padding: 8px 0; font-size: 13px; color: #888888;">Brief Description</td>
          <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${brief}</td>
        </tr>`;
    }
    
    // Add legacy_details field if present
    if (legacy_details) {
      additionalFieldsHtml += `
        <tr style="border-top: 1px solid #eeeeee;">
          <td style="padding: 8px 0; font-size: 13px; color: #888888;">Legacy Details</td>
          <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${legacy_details}</td>
        </tr>`;
    }
    
    // Add other fields if present
    Object.entries(otherFields).forEach(([key, value]) => {
      if (value) {
        additionalFieldsHtml += `
          <tr style="border-top: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-size: 13px; color: #888888;">${key.replace('_', ' ')}</td>
            <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${value}</td>
          </tr>`;
      }
    });

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <manisubrahmanyam8032ch@gmail.com>',
      to: ['manisubrahmanyam8032ch@gmail.com'],
      subject: `New ${formType}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
          
          <!-- Header -->
          <div style="background: #185FA5; padding: 24px 28px;">
            <p style="margin: 0; font-size: 11px; font-weight: bold; color: #B5D4F4; text-transform: uppercase; letter-spacing: 1px;">${sourcePage} - ${sourceSection}${sourceModal ? ` - ${sourceModal}` : ''}</p>
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
        ${engagementModel ? `
        <tr style="border-top: 1px solid #eeeeee;">
          <td style="padding: 8px 0; font-size: 13px; color: #888888;">Model</td>
          <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${engagementModel}${engagementModelType ? ` (${engagementModelType})` : ''}</td>
        </tr>` : ''}
        ${preferred_date ? `
        <tr style="border-top: 1px solid #eeeeee;">
          <td style="padding: 8px 0; font-size: 13px; color: #888888;">Preferred Date</td>
          <td style="padding: 8px 0; font-size: 13px; color: #111111; font-weight: bold;">${new Date(preferred_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
        </tr>` : ''}
      </table>

${assessmentHtml}
${quizAnswersHtml}
      ${additionalFieldsHtml}

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