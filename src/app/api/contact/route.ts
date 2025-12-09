import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, checkRateLimit } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const { isValid, errors, sanitizedData } = validateContactForm(body);
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Validation failed', errors },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp notification
    // 4. Log the submission
    
    // For demo purposes, we'll just return success
    console.log('Contact form submission:', sanitizedData);
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}