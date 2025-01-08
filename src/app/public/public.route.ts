import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {
  locationResolver,
  pageTitle,
} from './pages/services/location.resolver';

export const publicRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'trips/:locationId',
    loadComponent: () =>
      import('./pages/trip-details/trip-details.component').then(
        (c) => c.TripDetailsComponent
      ),
    resolve: {
      location: locationResolver,
    },
    title: pageTitle,
  },
];
