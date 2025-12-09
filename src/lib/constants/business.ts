export const BUSINESS_INFO = {
  name: 'Data Loom',
  tagline: 'Transform Raw Data Into Business Intelligence',
  description: 'Professional and affordable data engineering services for Indonesian businesses and professionals',
  
  // Contact information
  contact: {
    whatsapp: '+628123456789',
    email: 'hello@dataloom.id',
    phone: '+628123456789',
    address: 'Jakarta, Indonesia'
  },
  
  // Business hours for WhatsApp
  businessHours: {
    weekdays: '09:00 - 18:00',
    saturday: '09:00 - 15:00',
    sunday: 'Closed'
  },
  
  // SEO and meta information
  seo: {
    keywords: [
      'jasa rekayasa data Indonesia',
      'data cleaning Excel',
      'visualisasi data bisnis',
      'data engineering services',
      'data analytics Indonesia',
      'business intelligence Jakarta',
      'data transformation services',
      'Excel automation Indonesia'
    ],
    author: 'Data Loom Team',
    robots: 'index, follow',
    googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  },
  
  // Social proof
  socialProof: {
    spreadsheetsProcessed: '500+',
    clientsServed: '100+',
    yearsExperience: '5+',
    satisfactionRate: '98%'
  },
  
  // Security badges
  security: {
    encryption: 'AES-256 Encryption',
    compliance: 'GDPR Compliant',
    payment: 'Secure Payment Gateway',
    backup: 'Daily Backup'
  }
};

export const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small datasets and quick analysis',
    price: {
      monthly: 499000,
      annually: 499000 * 10 // 2 months free
    },
    features: [
      'Up to 1,000 rows of data',
      'Basic data cleaning',
      'Simple visualization',
      'Excel/CSV format',
      '24-hour turnaround',
      'Email support'
    ],
    limitations: [
      'No custom dashboards',
      'Basic reporting only'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with regular data needs',
    price: {
      monthly: 1499000,
      annually: 1499000 * 10 // 2 months free
    },
    features: [
      'Up to 10,000 rows of data',
      'Advanced data cleaning',
      'Interactive dashboards',
      'Multiple format support',
      'Custom reports',
      '12-hour turnaround',
      'Priority email & chat support'
    ],
    limitations: [],
    popular: true,
    cta: 'Most Popular'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for large-scale data operations',
    price: {
      monthly: 4999000,
      annually: 4999000 * 10 // 2 months free
    },
    features: [
      'Unlimited data rows',
      'Complete data pipeline',
      'Real-time dashboards',
      'API integration',
      'Custom solutions',
      '6-hour turnaround',
      '24/7 dedicated support',
      'On-site consultation available'
    ],
    limitations: [],
    popular: false,
    cta: 'Contact Sales'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Operations Manager',
    company: 'PT. Maju Bersama',
    avatar: '/images/testimonials/budi.jpg',
    content: 'Data Loom transformed our messy Excel files into clean, actionable insights. We saved 20 hours per month on manual data processing.',
    metrics: {
      timeSaved: '20 hours/month',
      accuracy: '99.5%',
      roi: '300%'
    },
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'CEO',
    company: 'Digital Creative Agency',
    avatar: '/images/testimonials/sarah.jpg',
    content: 'The interactive dashboards helped us make data-driven decisions. Our revenue increased by 35% within 3 months.',
    metrics: {
      revenueIncrease: '35%',
      decisionSpeed: '2x faster',
      clientSatisfaction: '95%'
    },
    rating: 5
  },
  {
    id: 3,
    name: 'Ahmad Rahman',
    role: 'Data Analyst',
    company: 'FinTech Startup',
    avatar: '/images/testimonials/ahmad.jpg',
    content: 'Professional package gave us everything we needed. The custom reports and API integration saved us countless hours.',
    metrics: {
      efficiency: '80%',
      reportQuality: 'Excellent',
      support: '24/7'
    },
    rating: 5
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Data Submission',
    description: 'Share your raw data through our secure portal',
    icon: 'upload',
    duration: '5 minutes'
  },
  {
    id: 2,
    title: 'Analysis & Planning',
    description: 'Our team analyzes your data and creates a transformation plan',
    icon: 'search',
    duration: '2-4 hours'
  },
  {
    id: 3,
    title: 'Data Processing',
    description: 'Clean, transform, and analyze your data using advanced tools',
    icon: 'cpu',
    duration: '6-24 hours'
  },
  {
    id: 4,
    title: 'Delivery & Review',
    description: 'Receive your processed data with interactive dashboards',
    icon: 'check-circle',
    duration: '1 hour'
  },
  {
    id: 5,
    title: 'Support & Optimization',
    description: 'Ongoing support and optimization recommendations',
    icon: 'headphones',
    duration: 'Continuous'
  }
];

export const TECHNOLOGY_STACK = [
  {
    name: 'Python',
    category: 'Data Processing',
    icon: 'python'
  },
  {
    name: 'Pandas',
    category: 'Data Manipulation',
    icon: 'table'
  },
  {
    name: 'Power BI',
    category: 'Visualization',
    icon: 'bar-chart'
  },
  {
    name: 'Tableau',
    category: 'Visualization',
    icon: 'pie-chart'
  },
  {
    name: 'SQL',
    category: 'Database',
    icon: 'database'
  },
  {
    name: 'AWS',
    category: 'Cloud Infrastructure',
    icon: 'cloud'
  },
  {
    name: 'Excel Automation',
    category: 'Office Integration',
    icon: 'file-text'
  },
  {
    name: 'API Integration',
    category: 'Connectivity',
    icon: 'plug'
  }
];

export const WHATSAPP_MESSAGES = {
  greeting: 'Halo Data Loom! Saya tertarik dengan layanan Anda.',
  packageInterest: 'Halo Data Loom! Saya tertarik dengan paket {packageName}. Bisa dijelaskan lebih detail?',
  freeAnalysis: 'Halo Data Loom! Saya mau konsultasi gratis untuk analisis data saya.',
  customQuote: 'Halo Data Loom! Saya butuh solusi data kustom untuk perusahaan saya.',
  support: 'Halo Data Loom! Saya butuh bantuan untuk layanan yang sudah saya pesan.'
};

export const CURRENCY = {
  code: 'IDR',
  symbol: 'Rp',
  locale: 'id-ID'
};