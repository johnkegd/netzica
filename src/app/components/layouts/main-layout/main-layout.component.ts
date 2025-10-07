import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../navigation/navigation';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, NavigationComponent, Footer],
  template: `
    <app-navigation />
    <main class="min-h-screen bg-surface-0 dark:bg-surface-950">
      <ng-content></ng-content>
    </main>
    <animal-made-footer />
  `
})
export class MainLayoutComponent {}
