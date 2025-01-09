import { Component, input, Signal, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { Location } from '../shared/model/location';

@Component({
  selector: 'app-trip-details',
  imports: [RouterOutlet, SpinnerComponent, RouterLink, RouterLinkActive],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  location = input<Location>();

  travelMode = signal(['Flight', 'Bus', 'Train']);

  getIcon(type: string): Signal<string> {
    return signal(`assets/svg/${type.toLowerCase()}.svg`);
  }
}
