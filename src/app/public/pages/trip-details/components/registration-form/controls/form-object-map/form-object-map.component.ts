import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { FormObjectModel } from '../../../../model/form-object.model';
import { ButtonComponent } from '../../../../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputTextAreaComponent } from '../input-text-area/input-text-area.component';
import { InputDropdownComponent } from '../input-dropdown/input-dropdown.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';

@Component({
  selector: 'app-form-object-map',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    InputTextComponent,
    InputTextAreaComponent,
    InputDropdownComponent,
    InputRadioComponent,
  ],
  templateUrl: './form-object-map.component.html',
  styleUrl: './form-object-map.component.scss',
})
export class FormObjectMapComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  formObject = input.required<FormObjectModel[]>();
  onSubmitForm = output();

  dynamicForm!: FormGroup;
  hasSubmitted = signal<boolean>(false);

  ngOnInit(): void {
    this.buildDynamicForm();
  }

  private buildDynamicForm(): void {
    let formControl: any = {};
    this.formObject().forEach((item) => {
      formControl[item.key] = [item.value];
    });

    this.dynamicForm = this.formBuilder.group(formControl);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.hasSubmitted.set(true);
      this.onSubmitForm.emit(this.dynamicForm.value);
    }
  }
}
