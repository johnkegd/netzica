import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../components/layouts/page-layout/page-layout.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';
import { SectionLayoutComponent } from '../../components/sections/section-layout/section-layout.component';
import { ThreeTiers } from '../../components/threetiers/threetiers';
import { FaqAccordionComponent, FaqItem } from '../../components/sections/faq-accordion/faq-accordion.component';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-pricing',
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
    ThreeTiers,
    FaqAccordionComponent
  ],
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
  constructor(private seoService: SEOService) {}

  ngOnInit() {
    // Update SEO for pricing page
    this.seoService.updateSEO(this.seoService.getPageSEO('pricing'));
  }

  faqCategories = [
    {
      title: 'Billing & Plans',
      icon: 'pi pi-dollar',
      items: [
        {
          question: 'Can I change my plan later?',
          answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely.'
        },
        {
          question: 'Is there a money-back guarantee?',
          answer: 'Yes! We offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied, we\'ll refund your payment in full.'
        },
        {
          question: 'Do you offer discounts for annual billing?',
          answer: 'Yes! When you pay annually, you save up to 25% compared to monthly billing. This discount is automatically applied when you select yearly billing.'
        }
      ] as FaqItem[]
    }
  ];
}