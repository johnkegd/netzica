import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private baseUrl = 'https://netzica.ch';
  private defaultImage = 'https://netzica.ch/og-image.jpg';

  constructor(private meta: Meta, private title: Title) {}

  updateSEO(data: SEOData): void {
    // Update title
    this.title.setTitle(data.title);

    // Update basic meta tags
    this.meta.updateTag({ name: 'description', content: data.description });
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: data.url || this.baseUrl });
    this.meta.updateTag({ property: 'og:image', content: data.image || this.defaultImage });

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image || this.defaultImage });

    // Update canonical URL
    this.meta.updateTag({ rel: 'canonical', href: data.url || this.baseUrl });
  }

  // Predefined SEO data for different pages
  getPageSEO(page: string): SEOData {
    const seoData: { [key: string]: SEOData } = {
      home: {
        title: 'Netzica - Premium Web Hosting & Cloud Solutions | Reliable Swiss Hosting',
        description: 'Netzica offers premium web hosting, cloud solutions, and managed services in Switzerland. 99.9% uptime guarantee, 24/7 support, and enterprise-grade security. Start your online presence today.',
        keywords: 'web hosting, cloud hosting, Swiss hosting, VPS hosting, domain registration, SSL certificates, WordPress hosting, managed hosting, enterprise hosting, Switzerland',
        url: this.baseUrl
      },
      products: {
        title: 'Web Hosting Products & Services | Netzica',
        description: 'Explore our comprehensive range of web hosting products including shared hosting, VPS, cloud solutions, and managed services. Swiss-quality hosting with 99.9% uptime guarantee.',
        keywords: 'web hosting products, shared hosting, VPS hosting, cloud hosting, managed hosting, Swiss hosting services',
        url: `${this.baseUrl}/products`
      },
      solutions: {
        title: 'Hosting Solutions for Every Business | Netzica',
        description: 'Discover tailored hosting solutions for startups, SMEs, and enterprises. From WordPress hosting to dedicated servers, we have the perfect solution for your business needs.',
        keywords: 'hosting solutions, business hosting, enterprise hosting, WordPress hosting, dedicated servers, hosting packages',
        url: `${this.baseUrl}/solutions`
      },
      pricing: {
        title: 'Transparent Hosting Pricing | Netzica',
        description: 'Simple, transparent pricing for all our hosting plans. No hidden fees, no surprises. Choose from Basic, Premium, or Enterprise plans with up to 25% savings on annual billing.',
        keywords: 'hosting pricing, web hosting plans, hosting costs, affordable hosting, hosting packages, pricing plans',
        url: `${this.baseUrl}/pricing`
      },
      corporate: {
        title: 'About Netzica - Swiss Web Hosting Company',
        description: 'Learn about Netzica, Switzerland\'s premier web hosting provider. Our story, team, values, and commitment to delivering exceptional hosting services since 2015.',
        keywords: 'about Netzica, Swiss hosting company, hosting provider, company information, team, values',
        url: `${this.baseUrl}/corporate`
      },
      support: {
        title: '24/7 Hosting Support & Help Center | Netzica',
        description: 'Get expert hosting support 24/7. Access our knowledge base, live chat support, and comprehensive guides to help you succeed with your hosting experience.',
        keywords: 'hosting support, technical support, help center, customer service, hosting help, support tickets',
        url: `${this.baseUrl}/support`
      },
      faq: {
        title: 'Frequently Asked Questions | Netzica Hosting',
        description: 'Find answers to common questions about our hosting services, billing, technical support, and more. Get instant answers to help you make informed decisions.',
        keywords: 'hosting FAQ, frequently asked questions, hosting help, common questions, hosting support',
        url: `${this.baseUrl}/faq`
      }
    };

    return seoData[page] || seoData['home'];
  }
}
