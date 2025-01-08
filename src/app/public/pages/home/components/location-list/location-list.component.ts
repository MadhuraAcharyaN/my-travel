import { Component, computed, inject, signal } from '@angular/core';
import { LocationComponent } from './location/location.component';
import { Location } from '../../../shared/model/location';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location-list',
  imports: [LocationComponent],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss',
})
export class LocationListComponent {
  private locationService = inject(LocationService);

  locationList = computed(() => this.locationService.locationList());
}
