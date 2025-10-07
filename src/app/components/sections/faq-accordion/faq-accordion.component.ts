import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="space-y-6">
      <div *ngFor="let category of faqCategories" class="bg-white dark:bg-surface-800 rounded-lg shadow-sm">
        <div class="p-6 border-b border-surface-200 dark:border-surface-700">
          <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0 mb-4 flex items-center">
            <i [class]="category.icon + ' text-primary-500 mr-3'"></i>
            {{ category.title }}
          </h3>
        </div>
        <div class="p-6">
          <p-accordion [multiple]="true">
            <ng-container *ngFor="let item of category.items; let i = index">
              <p-accordion-panel [value]="i">
                <p-accordion-header>{{ item.question }}</p-accordion-header>
                <p-accordion-content>
                  <p class="m-0 text-surface-600 dark:text-surface-400">{{ item.answer }}</p>
                </p-accordion-content>
              </p-accordion-panel>
            </ng-container>
          </p-accordion>
        </div>
      </div>
    </div>
  `
})
export class FaqAccordionComponent {
  @Input() faqCategories: Array<{
    title: string;
    icon: string;
    items: FaqItem[];
  }> = [];
}