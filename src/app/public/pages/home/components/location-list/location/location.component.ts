import { Component, input } from '@angular/core';
import { Location } from '../../../../shared/model/location';
import { CardComponent } from '../../../../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-location',
  imports: [CardComponent, RouterLink],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  location = input.required<Location>();
}
