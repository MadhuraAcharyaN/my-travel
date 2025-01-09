import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  OnChanges,
  OnInit,
  output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { FormObjectModel } from '../../../../public/pages/trip-details/model/form-object.model';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { InputDropdownComponent } from '../input-dropdown/input-dropdown.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { InputTextAreaComponent } from '../input-text-area/input-text-area.component';
import { InputTextComponent } from '../input-text/input-text.component';

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
export class FormObjectMapComponent implements OnInit, OnChanges {
  private formBuilder = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  formObject = input.required<FormObjectModel[]>();
  onSubmitForm = output();
  // onValueChange = output();

  dynamicForm!: FormGroup;
  hasSubmitted = signal<boolean>(false);

  ngOnInit(): void {
    // const subscriptions$ = this.dynamicForm.valueChanges.subscribe({
    //   next: (form) => {
    //     this.onValueChange.emit(form);
    //   },
    // });
    // this.destroyRef.onDestroy(() => subscriptions$.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (Object.keys(this.formObject)?.length > 0) {
      this.dynamicForm = this.buildDynamicForm();
      // this.cdr.detectChanges();
    }
  }

  private buildDynamicForm(): FormGroup {
    let formControl: any = {};
    this.formObject().forEach((item) => {
      formControl[item.key] = [item.value];
    });

    return this.formBuilder.group(formControl);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.hasSubmitted.set(true);
      this.onSubmitForm.emit(this.dynamicForm.value);
    }
  }
}
