import { Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { publicRoutes } from './public/public.route';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: publicRoutes,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/home/home.component').then((c) => c.HomeComponent),
  },
];
