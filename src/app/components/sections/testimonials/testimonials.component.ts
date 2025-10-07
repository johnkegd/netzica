import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <p-card *ngFor="let testimonial of testimonials" class="text-center">
        <ng-template pTemplate="content">
          <div class="mb-4">
            <i *ngFor="let star of [].constructor(testimonial.rating)" class="pi pi-star-fill text-yellow-400 text-2xl"></i>
          </div>
          <p class="text-surface-600 dark:text-surface-400 mb-4">{{ testimonial.content }}</p>
          <div class="font-semibold text-surface-900 dark:text-surface-0">{{ testimonial.name }}</div>
          <div class="text-sm text-surface-500">{{ testimonial.role }}, {{ testimonial.company }}</div>
        </ng-template>
      </p-card>
    </div>
  `
})
export class TestimonialsComponent {
  @Input() testimonials: Testimonial[] = [];
}
