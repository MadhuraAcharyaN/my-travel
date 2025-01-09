import { Routes } from '@angular/router';
import { TripFormComponent } from './components/trip-form/trip-form.component';

export const tripRoutes: Routes = [
  //   { path: '', component: TripFormComponent },
  { path: ':tripMode', component: TripFormComponent },
  { path: '', redirectTo: 'flight', pathMatch: 'prefix' },
];
