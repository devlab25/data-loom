# Data Loom - Professional Data Engineering Services

A high-conversion, enterprise-grade static website for Data Loom, a data engineering service targeting Indonesian professionals and business owners.

## 🚀 Project Overview

Data Loom transforms raw data into business intelligence through professional and affordable data engineering services. The website is built with conversion optimization, security, and performance as top priorities.

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** with App Router (latest features)
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library

### Key Libraries
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** for forms
- **Zustand** for state management
- **TanStack Query** for server state
- **Z-AI SDK** for AI-powered features

## 🎨 Design System

### Color Palette
- **Primary Tech Blue**: #2563EB
- **Primary Dark**: #1E40AF
- **Accent Affordable**: #F97316
- **Success Green**: #10B981
- **Warning Amber**: #F59E0B

### Typography
- **Headings**: Montserrat (600-700 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   └── analyze/       # AI analysis API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── common/           # Reusable components
│   │   └── WhatsAppWidget.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PricingCards.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactCTA.tsx
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── constants/        # Business constants
│   │   ├── business.ts
│   │   └── design-system.ts
│   ├── db.ts           # Database connection
│   ├── security.ts     # Security utilities
│   └── utils.ts       # General utilities
└── hooks/              # Custom React hooks
```

## 🔒 Security Features

### Production-Grade Security
- **Content Security Policy (CSP)** with nonce implementation
- **Subresource Integrity (SRI)** for all CDN resources
- **XSS Protection** through sanitized content rendering
- **Rate Limiting** for form submissions and API requests
- **Bot Detection** with suspicious pattern identification
- **Input Validation** on both client and server side
- **SQL Injection Prevention** through parameterized queries

### Security Headers
```typescript
// Implemented in middleware.ts
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security
```

## 🚀 Performance & SEO

### Core Web Vitals Target
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Lighthouse Score**: 95+ on all metrics

### SEO Features
- **Schema.org** markup for services and business info
- **Indonesian language** optimization (lang="id")
- **Meta tags** optimized for local search
- **XML Sitemap** with dynamic routes
- **Robots.txt** with proper directives
- **Open Graph** and Twitter Cards

### Performance Optimizations
- **Image optimization** with WebP format
- **Code splitting** and lazy loading
- **Font optimization** with proper preloading
- **Service Worker** for PWA capabilities
- **Resource hints** (preconnect, prefetch)

## 📱 Conversion Optimization

### Smart WhatsApp Integration
- **Context-aware messaging** based on page section
- **Time-based display** showing admin availability
- **Click analytics** for package interest tracking
- **Floating CTA** with animated pulse effect

### Package Comparison Engine
- **Interactive table** with hover effects
- **"Most Popular"** badge on optimal package
- **Monthly/annual** pricing toggle
- **Expandable details** for features

### Trust Engineering
- **Security badges** and compliance info
- **Social proof** with testimonials
- **Process transparency** with step-by-step workflow
- **Money-back guarantee** badge

## 🎯 Key Features

### Value Proposition Matrix
- **Before/After** comparison showing transformation
- **ROI Calculator** widget for time/money savings
- **Persona-specific** content zones for different user types

### AI-Powered Analysis
- **Free data analysis** using Z-AI SDK
- **Automated recommendations** based on data characteristics
- **Package suggestions** tailored to user needs

### Progressive Web App
- **Service Worker** for offline functionality
- **App Manifest** for installability
- **Responsive design** for all devices
- **Push notifications** ready

## 🛠️ Development

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Start production server**
   ```bash
   npm start
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:generate` - Generate Prisma client

### Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# Security
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# AI Services
Z_AI_API_KEY="your-z-ai-api-key"

# Analytics (optional)
GOOGLE_ANALYTICS_ID="your-ga-id"
```

## 📊 Business Metrics

### Target Metrics
- **WhatsApp CTA conversion**: >3%
- **Page load time**: <3s on 3G
- **Mobile usability**: 100%
- **Accessibility**: WCAG 2.1 AA compliant
- **Search ranking**: Top 3 for target keywords

### Success Indicators
- **Clear value proposition** within 5 seconds
- **Primary CTA visible** without scrolling
- **Package comparison** leads to informed decisions
- **Trust indicators** reduce purchase anxiety

## 🌐 Deployment

### Static Site Generation
The site is optimized for static deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Build Configuration
```javascript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Website**: https://dataloom.id
- **WhatsApp**: +62 812-3456-789
- **Email**: hello@dataloom.id
- **Address**: Jakarta, Indonesia

---

Built with ❤️ for Indonesian businesses