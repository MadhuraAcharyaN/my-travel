import {
  ChangeDetectionStrategy,
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

@Component({
  selector: 'app-input-text-area',
  imports: [ReactiveFormsModule],
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextAreaComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextAreaComponent implements ControlValueAccessor, OnInit {
  private destroyRef = inject(DestroyRef);
  private onChange = (value: any) => {};
  private onTouched = () => {};

  formControl!: FormControl;
  inputConfig = input.required<FormObjectModel>();

  ngOnInit(): void {
    this.formControl = new FormControl();
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
