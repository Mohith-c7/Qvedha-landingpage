// SEO Configuration for Q-VEDHA
// Centralized SEO settings for easy management

export const seoConfig = {
  siteName: 'Q-VEDHA',
  siteUrl: 'https://q-vedha.com',
  defaultTitle: 'Q-VEDHA | World\'s First Quantum Drug Discovery Platform',
  defaultDescription: 'Q-VEDHA revolutionizes pharmaceutical research with quantum computing. Accelerate drug discovery from years to moments using IonQ\'s trapped-ion quantum systems, AI, and the Proxima framework.',
  
  // Social Media Handles
  social: {
    twitter: '@qvedha',
    linkedin: 'company/qvedha',
    github: 'qvedha',
  },

  // Primary Keywords
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
    'quantum healthcare',
  ],

  // Open Graph Images
  ogImage: {
    url: '/ss.webp',
    width: 1200,
    height: 630,
    alt: 'Q-VEDHA Quantum Drug Discovery Platform',
  },

  // Sections for Sitemap
  sections: [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/#features', priority: 0.8, changefreq: 'monthly' },
    { path: '/#framework', priority: 0.8, changefreq: 'monthly' },
    { path: '/#testimonials', priority: 0.7, changefreq: 'monthly' },
    { path: '/#faq', priority: 0.6, changefreq: 'monthly' },
  ],

  // Structured Data Templates
  organization: {
    '@type': 'Organization',
    name: 'Q-VEDHA',
    description: 'World\'s first quantum drug discovery platform powered by IonQ',
    url: 'https://q-vedha.com',
    logo: 'https://q-vedha.com/icon1.png',
    foundingDate: '2024',
    industry: 'Pharmaceutical Technology',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50-100',
    },
  },

  // FAQ Schema Data
  faqSchema: [
    {
      question: 'What is Q-VEDHA?',
      answer: 'Q-VEDHA is the world\'s first Quantum-AI drug discovery engine that combines quantum computing, artificial intelligence, and reinforcement learning to accelerate pharmaceutical research from years to moments.',
    },
    {
      question: 'How does quantum computing help in drug discovery?',
      answer: 'Quantum computing enables us to simulate molecular interactions at the quantum level with unprecedented accuracy. This allows us to analyze billions of molecular combinations, predict drug efficacy with 99.7% accuracy, and reduce development time from 10+ years to months.',
    },
    {
      question: 'What is the Proxima Framework?',
      answer: 'Proxima is our open-source framework that lets you pull any language model from any provider, equip it with quantum and classical tools, and run it on any inference platform. It bridges classical AI and quantum computing with a unified API.',
    },
  ],
};

// Helper function to generate page metadata
export function generatePageMetadata(page: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
}) {
  return {
    title: page.title || seoConfig.defaultTitle,
    description: page.description || seoConfig.defaultDescription,
    keywords: [...seoConfig.keywords, ...(page.keywords || [])],
    openGraph: {
      title: page.title || seoConfig.defaultTitle,
      description: page.description || seoConfig.defaultDescription,
      url: `${seoConfig.siteUrl}${page.path || ''}`,
      images: [
        {
          url: page.image || seoConfig.ogImage.url,
          width: seoConfig.ogImage.width,
          height: seoConfig.ogImage.height,
          alt: seoConfig.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title || seoConfig.defaultTitle,
      description: page.description || seoConfig.defaultDescription,
      images: [page.image || seoConfig.ogImage.url],
      creator: seoConfig.social.twitter,
    },
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Article Schema (for future blog posts)
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}/icon1.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}
