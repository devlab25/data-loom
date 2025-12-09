import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Data Loom - Transform Raw Data Into Business Intelligence",
  description: "Professional and affordable data engineering services for Indonesian businesses. Transform your raw data into actionable insights with our expert team.",
  keywords: [
    "jasa rekayasa data Indonesia",
    "data cleaning Excel", 
    "visualisasi data bisnis",
    "data engineering services",
    "data analytics Indonesia",
    "business intelligence Jakarta",
    "data transformation services",
    "Excel automation Indonesia"
  ],
  authors: [{ name: "Data Loom Team" }],
  creator: "Data Loom",
  publisher: "Data Loom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dataloom.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Data Loom - Transform Raw Data Into Business Intelligence",
    description: "Professional and affordable data engineering services for Indonesian businesses",
    url: "https://dataloom.id",
    siteName: "Data Loom",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Data Loom - Data Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Loom - Transform Raw Data Into Business Intelligence",
    description: "Professional and affordable data engineering services for Indonesian businesses",
    images: ["/images/og-image.jpg"],
    creator: "@dataloom_id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
