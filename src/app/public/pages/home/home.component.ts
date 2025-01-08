import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { LocationListComponent } from './components/location-list/location-list.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, LocationListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
