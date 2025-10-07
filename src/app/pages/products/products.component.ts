import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../components/layouts/page-layout/page-layout.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';
import { SectionLayoutComponent } from '../../components/sections/section-layout/section-layout.component';
import { TestimonialsComponent, Testimonial } from '../../components/sections/testimonials/testimonials.component';

@Component({
  selector: 'app-products',
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
    TestimonialsComponent
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'Netzica\'s hosting has been incredibly reliable. Our website has never gone down, and the support team is always there when we need them.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Developer',
      company: 'WebCraft Solutions',
      content: 'The performance is outstanding. Our applications load faster than ever, and the development tools are exactly what we needed.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Marketing Pro',
      content: 'Switching to Netzica was the best decision we made. The uptime is perfect, and our customers love the fast loading times.',
      rating: 5
    }
  ];
}