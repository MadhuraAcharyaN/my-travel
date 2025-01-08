import {
  Component,
  DestroyRef,
  forwardRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { FormObjectModel } from '../../../../model/form-object.model';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input-radio',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
  ],
})
export class InputRadioComponent implements ControlValueAccessor, OnInit {
  private destroyRef = inject(DestroyRef);
  private onChange = (value: any) => {};
  private onTouched = () => {};

  inputConfig = input.required<FormObjectModel>();
  isButton = input<boolean>();
  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = new FormControl('');
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
