import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})

export class CustomInputComponent implements ControlValueAccessor {

  @Input() label!: string
  @Input() type !: string

  value: any
  changed!: (value: any) => void
  onTouched!: () => void
  disabled: boolean = false



  writeValue(obj: any): void {
    this.value = obj
  }

  onEnterValue(e: any) {
    this.changed(e.target.value)
  }

  registerOnChange(fn: any): void {
    this.changed = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }



}
