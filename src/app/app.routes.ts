import { Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/pages/home/home.component';
import { TripDetailsComponent } from './public/pages/trip-details/trip-details.component';
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
