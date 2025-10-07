import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-section-layout',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <section [class]="'py-20 ' + (backgroundColor || '')">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-16" *ngIf="title || subtitle">
          <h2 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4" *ngIf="title">{{ title }}</h2>
          <p class="text-lg text-surface-600 dark:text-surface-400" *ngIf="subtitle">{{ subtitle }}</p>
        </div>
        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class SectionLayoutComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundColor: string = '';
}
