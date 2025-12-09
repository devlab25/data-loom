import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, checkRateLimit } from '@/lib/security';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting (stricter for AI analysis)
    if (!checkRateLimit(ip, 3, 60 * 60 * 1000)) { // 3 requests per hour
      return NextResponse.json(
        { error: 'Too many analysis requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Validate and sanitize input
    const { isValid, errors, sanitizedData } = validateContactForm({
      name: body.name || 'Anonymous',
      email: body.email || 'user@example.com',
      phone: body.phone || '',
      message: body.message || '',
      honeypot: body.honeypot || ''
    });
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Validation failed', errors },
        { status: 400 }
      );
    }
    
    // Validate file data if provided
    let fileAnalysis = null;
    if (body.fileData) {
      try {
        // In a real app, you'd process the actual file
        // For demo, we'll simulate file analysis
        fileAnalysis = {
          fileName: body.fileName || 'data.csv',
          fileSize: body.fileSize || 0,
          rowCount: Math.floor(Math.random() * 10000) + 100,
          columns: ['Column1', 'Column2', 'Column3', 'Column4'],
          dataTypes: ['text', 'number', 'date', 'boolean'],
          quality: Math.floor(Math.random() * 30) + 70 // 70-100% quality
        };
      } catch (error) {
        return NextResponse.json(
          { error: 'Invalid file data' },
          { status: 400 }
        );
      }
    }
    
    // Use ZAI for data analysis
    const zai = await ZAI.create();
    
    const analysisPrompt = `
      Analyze the following data analysis request:
      
      User: ${sanitizedData.name}
      Email: ${sanitizedData.email}
      Message: ${sanitizedData.message}
      
      ${fileAnalysis ? `
      File Information:
      - Name: ${fileAnalysis.fileName}
      - Rows: ${fileAnalysis.rowCount}
      - Columns: ${fileAnalysis.columns.join(', ')}
      - Data Types: ${fileAnalysis.dataTypes.join(', ')}
      - Quality Score: ${fileAnalysis.quality}%
      ` : ''}
      
      Please provide:
      1. A brief analysis of their data needs
      2. Recommended service package
      3. Estimated timeline
      4. Potential challenges
      5. Key insights they can expect
      
      Keep the response professional but friendly, and under 300 words.
    `;
    
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a data engineering expert helping Indonesian businesses with data analysis. Provide helpful, actionable advice in Indonesian context.'
        },
        {
          role: 'user',
          content: analysisPrompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });
    
    const aiAnalysis = completion.choices[0]?.message?.content || 'Analysis unavailable';
    
    // Generate recommendations
    const recommendations = {
      package: fileAnalysis?.rowCount && fileAnalysis.rowCount > 10000 ? 'Enterprise' : 
               fileAnalysis?.rowCount && fileAnalysis.rowCount > 1000 ? 'Professional' : 'Starter',
      estimatedTime: fileAnalysis?.rowCount ? `${Math.ceil(fileAnalysis.rowCount / 1000)} hours` : '2-4 hours',
      complexity: fileAnalysis?.quality && fileAnalysis.quality < 80 ? 'High' : 'Medium',
      insights: [
        'Data cleaning and validation required',
        'Automated reporting system recommended',
        'Dashboard visualization for insights',
        'Integration with existing systems'
      ]
    };
    
    return NextResponse.json({
      success: true,
      analysis: aiAnalysis,
      recommendations,
      fileAnalysis,
      message: 'Free analysis completed! Our team will contact you shortly with detailed recommendations.'
    });
    
  } catch (error) {
    console.error('Analysis error:', error);
    
    return NextResponse.json(
      { error: 'Analysis service temporarily unavailable' },
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