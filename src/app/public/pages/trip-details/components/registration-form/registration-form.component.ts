import { Component, input } from '@angular/core';
import { Location } from '../../../shared/model/location';
import { FormObjectModel } from '../../model/form-object.model';
import { FormObjectMapComponent } from './controls/form-object-map/form-object-map.component';

@Component({
  selector: 'app-registration-form',
  imports: [FormObjectMapComponent],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  location = input<Location>();

  formObject: FormObjectModel[] = [
    {
      key: 'mode',
      label: '',
      type: 'radio',
      options: ['Bus', 'Train', 'Flight'],
      value: 'Bus',
      isButton: true,
    },
    { key: 'firstName', label: 'First Name', type: 'text', value: '' },
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
  ];

  onRegister(formValue: any): void {
    console.log(formValue);
  }
}
