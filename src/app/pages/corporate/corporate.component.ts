import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../components/layouts/page-layout/page-layout.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';
import { SectionLayoutComponent } from '../../components/sections/section-layout/section-layout.component';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    CardModule, 
    BadgeModule, 
    RouterModule, 
    PageLayoutComponent,
    HeroSectionComponent,
    SectionLayoutComponent
  ],
  templateUrl: './corporate.component.html'
})
export class CorporateComponent {}