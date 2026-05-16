import { NextRequest, NextResponse } from 'next/server';

// Email receiving address - change this to your desired email
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@peaksnr.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact submission (in production, send via email service)
    console.log('[Contact Form] New submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Store in a simple text log for GitHub deployment
    // In production, use Resend, SendGrid, or similar service
    const submissionData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // For GitHub Pages deployment: just log and confirm
    // For Vercel deployment: can integrate with email services
    console.log('[Contact Submission Stored]', JSON.stringify(submissionData, null, 2));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!',
        submitted: submissionData
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
