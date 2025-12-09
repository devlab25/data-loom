import { NextRequest, NextResponse } from 'next/server';

// Input validation utilities
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000); // Limit length
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export function validateName(name: string): boolean {
  return typeof name === 'string' && name.length >= 2 && name.length <= 100;
}

export function validateMessage(message: string): boolean {
  return typeof message === 'string' && message.length >= 10 && message.length <= 5000;
}

// Rate limiting for form submissions
const formSubmissions = new Map<string, { count: number; lastSubmission: number }>();

export function checkRateLimit(ip: string, maxSubmissions: number = 5, windowMs: number = 15 * 60 * 1000): boolean {
  const now = Date.now();
  const userSubmissions = formSubmissions.get(ip) || { count: 0, lastSubmission: 0 };
  
  if (now - userSubmissions.lastSubmission > windowMs) {
    formSubmissions.set(ip, { count: 1, lastSubmission: now });
    return true;
  }
  
  if (userSubmissions.count >= maxSubmissions) {
    return false;
  }
  
  formSubmissions.set(ip, { count: userSubmissions.count + 1, lastSubmission: now });
  return true;
}

// Honeypot field validation
export function validateHoneypot(honeypotValue: string): boolean {
  // Honeypot should be empty for legitimate submissions
  return honeypotValue === '';
}

// CSRF token validation (simplified)
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken;
}

// Content Security Policy nonce generation
export function generateNonce(): string {
  return Buffer.from(Math.random().toString(36)).toString('base64');
}

// File upload validation
export function validateFileUpload(file: File): { isValid: boolean; error?: string } {
  const allowedTypes = [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain'
  ];
  
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Invalid file type' };
  }
  
  if (file.size > maxSize) {
    return { isValid: false, error: 'File too large' };
  }
  
  return { isValid: true };
}

// SQL injection prevention
export function sanitizeSQL(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .replace(/['"\\]/g, '') // Remove quotes and backslashes
    .replace(/--/g, '') // Remove SQL comments
    .replace(/\/\*/g, '') // Remove SQL block comment start
    .replace(/\*\//g, '') // Remove SQL block comment end
    .replace(/;/g, '') // Remove semicolons
    .trim();
}

// XSS protection
export function escapeHtml(unsafe: string): string {
  if (typeof unsafe !== 'string') {
    return '';
  }
  
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Data validation schemas
export const contactFormSchema = {
  name: {
    required: true,
    validate: validateName,
    sanitize: sanitizeInput
  },
  email: {
    required: true,
    validate: validateEmail,
    sanitize: sanitizeInput
  },
  phone: {
    required: false,
    validate: validatePhone,
    sanitize: sanitizeInput
  },
  message: {
    required: true,
    validate: validateMessage,
    sanitize: sanitizeInput
  },
  honeypot: {
    required: false,
    validate: validateHoneypot,
    sanitize: (value: string) => value // Don't sanitize honeypot
  }
};

export function validateContactForm(data: Record<string, any>): { isValid: boolean; errors: Record<string, string>; sanitizedData: Record<string, any> } {
  const errors: Record<string, string> = {};
  const sanitizedData: Record<string, any> = {};
  
  for (const [field, rules] of Object.entries(contactFormSchema)) {
    const value = data[field];
    
    // Check required fields
    if (rules.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field} is required`;
      continue;
    }
    
    // Skip validation for optional empty fields
    if (!rules.required && (!value || value.toString().trim() === '')) {
      sanitizedData[field] = '';
      continue;
    }
    
    // Validate field
    if (rules.validate && !rules.validate(value.toString())) {
      errors[field] = `Invalid ${field}`;
      continue;
    }
    
    // Sanitize field
    sanitizedData[field] = rules.sanitize ? rules.sanitize(value.toString()) : value;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData
  };
}