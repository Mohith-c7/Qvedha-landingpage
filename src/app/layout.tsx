import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Q-VEDHA | World's First Quantum Drug Discovery Platform | IonQ Powered",
  description: "Q-VEDHA revolutionizes pharmaceutical research with quantum computing. Accelerate drug discovery from years to moments using IonQ's trapped-ion quantum systems, AI, and the Proxima framework. Discover breakthrough molecular simulations and Virtual Human Twin technology.",
  keywords: [
    'quantum computing',
    'drug discovery',
    'pharmaceutical research',
    'Q-VEDHA',
    'IonQ',
    'quantum drug synthesis',
    'molecular simulation',
    'quantum algorithms',
    'VQE',
    'Grover algorithm',
    'Quantum Fourier Transform',
    'Proxima framework',
    'quantum AI',
    'trapped-ion quantum computing',
    'Virtual Human Twin',
    'quantum machine learning',
    'computational chemistry',
    'quantum pharmacology',
    'drug development',
    'quantum biology',
    'life sciences',
    'quantum simulation',
    'molecular modeling',
    'quantum optimization',
    'pharmaceutical AI',
    'quantum healthcare'
  ],
  authors: [{ name: 'Q-VEDHA Team' }],
  creator: 'Q-VEDHA',
  publisher: 'Q-VEDHA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://q-vedha.com',
    siteName: 'Q-VEDHA',
    title: "Q-VEDHA | Quantum Drug Discovery Platform Powered by IonQ",
    description: "Revolutionize pharmaceutical research with quantum computing. Q-VEDHA accelerates drug discovery using IonQ's quantum systems, AI, and breakthrough molecular simulation technology.",
    images: [
      {
        url: '/ss.webp',
        width: 1200,
        height: 630,
        alt: 'Q-VEDHA Quantum Drug Discovery Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Q-VEDHA | World's First Quantum Drug Discovery Platform",
    description: "Accelerate drug discovery from years to moments with quantum computing, AI, and IonQ's trapped-ion quantum systems.",
    images: ['/ss.webp'],
    creator: '@qvedha',
  },
  alternates: {
    canonical: 'https://q-vedha.com',
  },
  category: 'Technology',
  classification: 'Quantum Computing, Healthcare Technology, Drug Discovery',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon0.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://q-vedha.com'),
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://q-vedha.com/#organization',
        name: 'Q-VEDHA',
        url: 'https://q-vedha.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://q-vedha.com/icon1.png',
        },
        description: "World's first quantum drug discovery platform powered by IonQ",
        sameAs: [
          'https://twitter.com/qvedha',
          'https://linkedin.com/company/qvedha',
        ],
        founder: {
          '@type': 'Organization',
          name: 'Q-VEDHA Team',
        },
        sponsor: {
          '@type': 'Organization',
          name: 'IonQ',
          url: 'https://ionq.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://q-vedha.com/#website',
        url: 'https://q-vedha.com',
        name: 'Q-VEDHA',
        description: 'Quantum Drug Discovery Platform',
        publisher: {
          '@id': 'https://q-vedha.com/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Q-VEDHA',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Quantum-powered drug discovery platform that accelerates pharmaceutical research using IonQ quantum computing systems',
        featureList: [
          'Quantum molecular simulation',
          'AI-powered drug discovery',
          'Virtual Human Twin technology',
          'Proxima framework integration',
          'Real-time quantum computing',
        ],
      },
      {
        '@type': 'Product',
        name: 'Proxima Framework',
        description: 'Universal framework for integrating any LLM with quantum and classical tools',
        brand: {
          '@type': 'Brand',
          name: 'Q-VEDHA',
        },
        category: 'Quantum Computing Framework',
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
