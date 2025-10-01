import { Routes } from '@angular/router';
import { ConstructionGuard } from './guards/construction.guard';

export const routes: Routes = [
  {
    path: 'construction',
    loadComponent: () => import('./components/construction/construction').then(m => m.ConstructionComponent)
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
