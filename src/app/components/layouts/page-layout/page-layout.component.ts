import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, ButtonModule, MainLayoutComponent],
  template: `
    <app-main-layout>
      <ng-content></ng-content>
    </app-main-layout>
  `
})
export class PageLayoutComponent {}
