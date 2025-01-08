import { computed, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { LocationService } from './location.service';
import { Location } from '../shared/model/location';

export const locationResolver: ResolveFn<Location> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const locationService = inject(LocationService);
  const id = route.paramMap.get('locationId');
  //   Make API call
  return locationService.locationList().find((location) => location.id === id)!;
};

export const pageTitle: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const locationService = inject(LocationService);
  const id = route.paramMap.get('locationId');
  return locationService.locationList().find((location) => location.id === id)!
    .locationTitle;
};
