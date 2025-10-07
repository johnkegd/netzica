import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ title }}</h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">{{ subtitle }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" *ngIf="showButtons">
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showButtons: boolean = true;
}
