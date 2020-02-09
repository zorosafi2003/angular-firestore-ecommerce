import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable()
export class CustomValidators {
  arrayMinLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) return null;

      return { minLengthArray: { invalid: true } };
    };
  }

  numberMinLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value != null) {
        var length = (c.value as number).toString().length;
        if (length >= min) return null;
      }
      return { minLength: { invalid: true } };
    };
  }

  numberLength(length: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value != null) {
        var valueLength = (c.value as number).toString().length;
        if (valueLength == length) return null;
      }
      return { Length: { invalid: true } };
    };
  }
  numberValidRangeLength(min: number, max: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value != null) {
        var length = (c.value as number).toString().length;
        if (length >= min && length <= max) return null;
      }
      return { Length: { invalid: true } };
    };
  }
}
