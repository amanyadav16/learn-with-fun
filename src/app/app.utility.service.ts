/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import {Injectable} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

declare const awscredentials: any;

// eslint-disable-next-line new-cap
@Injectable({
  providedIn: 'root',
})
/**
 * AppUtilityService
 */
export class AppUtilityService {
  integerValidator(control: AbstractControl): ValidationErrors | null {

    const v = +control.value;
    return v%1===0?null:{ 'integerValidator': true , errorMessage:"should be \"integer\""}

  }
}
