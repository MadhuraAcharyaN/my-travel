import { computed, Injectable, signal } from '@angular/core';
import { Location } from '../shared/model/location';

@Injectable({ providedIn: 'root' })
export class LocationService {
  locationList = signal<Location[]>([
    {
      imgURL:
        'https://media.istockphoto.com/id/137340137/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=1024x1024&w=is&k=20&c=bEFX7ulFtE6DDhYO0pJg3lIvieA_N2cst4ezF_iJEfU=',
      locationTitle: 'City Adventures',
      locationDescription: 'Discover urban life and culture.',
      id: '0',
    },
    {
      imgURL:
        'https://media.istockphoto.com/id/520494070/photo/interior-of-mosque-jama-masjid-delhi-india.jpg?s=1024x1024&w=is&k=20&c=sHFAexwh5ZTFeS4YWiwCbd5rH_u5TZ1f_WfrAY3KOtk=',
      locationTitle: 'Majestic Mountains',
      locationDescription: 'Experience breathtaking views.',
      id: '1',
    },
    {
      imgURL:
        'https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      locationTitle: 'Sunny Beach',
      locationDescription: 'Relax by the sea and enjoy the sunshine.',
      id: '2',
    },
  ]);
}
