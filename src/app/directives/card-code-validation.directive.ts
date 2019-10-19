import {
  AbstractControl,
  ValidatorFn,
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors
} from "@angular/forms";
import { Directive, Input } from "@angular/core";

// validation function
function validateCardCodes(cardCodeCount: number): ValidatorFn {
  return (): ValidationErrors | null => {
    return cardCodeCount == 0 ? {cardCodeLength: {valid: false}} : null;
  };
}

@Directive({
  selector: "[cardCodeLength][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: CardCodeValidatorDirective, multi: true }
  ]
})
export class CardCodeValidatorDirective implements Validator {
  @Input("cardCodeLength") cardCodeCount;
  validator: ValidatorFn;

  // constructor() {}

  // ngOnInit() {
  //   this.validator = validateCardCodes(this.cardCodeCount);
  // }

  validate(c: FormControl): ValidationErrors | null {
    // return validateCardCodes(this.cardCodeCount);
    return this.cardCodeCount == 0 ? {cardCodeLength: {valid: false}} : null;
  }

  // validate(control: AbstractControl) {
  //   return this.cardCodeLength ? validateCardCodes(this.cardCodeLength) : null;
  // }
}

