import { Routes } from '@angular/router';
import { ConstructionGuard } from './guards/construction.guard';

export const routes: Routes = [
  {
    path: 'construction',
    loadComponent: () => import('./pages/construction/construction').then(m => m.ConstructionComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: 'corporate',
    loadComponent: () => import('./pages/corporate/corporate.component').then(m => m.CorporateComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support.component').then(m => m.SupportComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: '',
    loadComponent: () => import('./main.component').then(m => m.MainComponent),
    canActivate: [ConstructionGuard]
  },
  {
    path: '**',
    redirectTo: '/construction'
  }
];
