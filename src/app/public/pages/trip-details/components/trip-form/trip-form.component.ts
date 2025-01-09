import { Component, effect, input, OnInit, signal } from '@angular/core';
import { FormObjectMapComponent } from '../../../../../shared/components/controls/form-object-map/form-object-map.component';
import { FormObjectModel } from '../../model/form-object.model';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  templateUrl: './trip-form.component.html',
  styleUrl: './trip-form.component.scss',
  imports: [FormObjectMapComponent],
})
export class TripFormComponent {
  tripMode = input<string>('');

  tripForm = signal<any>({});

  forms: any = {
    flight: [
      { key: 'firstName', label: 'First Name', type: 'text', value: '' },
      { key: 'lastName', label: 'Last Name', type: 'text', value: '' },
      { key: 'email', label: 'Email', type: 'email', value: '' },
      {
        key: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female'],
        value: 'Female',
      },

      { key: 'comments', label: 'Comments', type: 'textarea', value: '' },
    ],
    bus: [
      { key: 'firstName', label: 'First Name', type: 'text', value: '' },
      { key: 'lastName', label: 'Last Name', type: 'text', value: '' },
      { key: 'email', label: 'Email', type: 'email', value: '' },
      {
        key: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female'],
        value: 'Female',
      },
      {
        key: 'transport',
        label: 'Mode of Transport',
        type: 'dropdown',
        options: ['Bus', 'Train', 'Flight'],
        value: '',
      },
      { key: 'comments', label: 'Comments', type: 'textarea', value: '' },
    ],
    train: [
      { key: 'firstName', label: 'First Name', type: 'text', value: '' },
      { key: 'lastName', label: 'Last Name', type: 'text', value: '' },
      { key: 'email', label: 'Email', type: 'email', value: '' },

      {
        key: 'transport',
        label: 'Mode of Transport',
        type: 'dropdown',
        options: ['Bus', 'Train', 'Flight'],
        value: '',
      },
      { key: 'comments', label: 'Comments', type: 'textarea', value: '' },
    ],
  };

  constructor() {
    effect(() => {
      if (this.tripMode()) {
        this.tripForm.set(this.forms[this.tripMode()]);
      }
    });
  }

  onRegister(formValue: any): void {
    console.log(formValue);
  }

  formValueChange(form: any): void {
    console.log(form);
  }
}
