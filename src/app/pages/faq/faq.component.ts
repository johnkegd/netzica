import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../components/layouts/page-layout/page-layout.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';
import { SectionLayoutComponent } from '../../components/sections/section-layout/section-layout.component';
import { FaqAccordionComponent, FaqItem } from '../../components/sections/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    CardModule, 
    BadgeModule, 
    RouterModule, 
    PageLayoutComponent,
    HeroSectionComponent,
    SectionLayoutComponent,
    FaqAccordionComponent
  ],
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  faqCategories = [
    {
      title: 'Getting Started',
      icon: 'pi pi-cog',
      items: [
        {
          question: 'How do I set up my hosting account?',
          answer: 'After purchasing a hosting plan, you\'ll receive an email with your account details and login information. Simply log into your control panel and follow our step-by-step setup guide to configure your domain and email accounts.'
        },
        {
          question: 'How long does it take for my website to go live?',
          answer: 'Your hosting account is activated immediately after purchase. Domain propagation typically takes 24-48 hours, but you can start uploading your website files right away using our file manager or FTP.'
        },
        {
          question: 'Do you provide free domain registration?',
          answer: 'Yes! All our hosting plans include a free domain registration for the first year. You can choose from popular extensions like .com, .net, .org, and many others.'
        }
      ] as FaqItem[]
    },
    {
      title: 'Security & SSL',
      icon: 'pi pi-shield',
      items: [
        {
          question: 'Is SSL certificate included with my hosting?',
          answer: 'Yes! All our hosting plans include a free SSL certificate from Let\'s Encrypt. This ensures your website is secure and displays the padlock icon in browsers, which is essential for e-commerce and user trust.'
        },
        {
          question: 'How often do you backup my website?',
          answer: 'We perform daily automated backups of all websites on our servers. These backups are stored securely for 30 days, and you can restore your site to any point during this period with just a few clicks.'
        },
        {
          question: 'What security measures do you have in place?',
          answer: 'Our servers are protected by enterprise-grade firewalls, DDoS protection, malware scanning, and regular security updates. We also monitor our network 24/7 for any suspicious activity.'
        }
      ] as FaqItem[]
    },
    {
      title: 'Technical Support',
      icon: 'pi pi-server',
      items: [
        {
          question: 'What is your uptime guarantee?',
          answer: 'We guarantee 99.9% uptime for all our hosting plans. Our servers are monitored 24/7, and we use redundant systems to ensure maximum reliability. If we don\'t meet this guarantee, we\'ll credit your account.'
        },
        {
          question: 'Can I upgrade my hosting plan later?',
          answer: 'Absolutely! You can upgrade your hosting plan at any time through your control panel. The upgrade takes effect immediately, and we\'ll prorate any billing differences.'
        },
        {
          question: 'Do you support WordPress and other CMS platforms?',
          answer: 'Yes! We support all major CMS platforms including WordPress, Joomla, Drupal, and more. We also offer one-click installations for popular applications through our control panel.'
        }
      ] as FaqItem[]
    },
    {
      title: 'Billing & Plans',
      icon: 'pi pi-dollar',
      items: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          question: 'Do you offer a money-back guarantee?',
          answer: 'Yes! We offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied with our service, we\'ll refund your payment in full, no questions asked.'
        },
        {
          question: 'Can I cancel my hosting plan anytime?',
          answer: 'Yes, you can cancel your hosting plan at any time through your control panel. There are no cancellation fees, and you\'ll retain access to your hosting until the end of your current billing period.'
        }
      ] as FaqItem[]
    }
  ];
}
