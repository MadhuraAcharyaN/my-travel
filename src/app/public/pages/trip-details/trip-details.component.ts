import { Component, input } from '@angular/core';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { Location } from '../shared/model/location';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-trip-details',
  imports: [RegistrationFormComponent, CarouselComponent, SpinnerComponent],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  location = input<Location>();
}
