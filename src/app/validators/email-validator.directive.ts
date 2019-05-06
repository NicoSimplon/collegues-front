import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
	selector: '[appEmailValidator]',
	providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements AsyncValidator {

	constructor() { }

	validate(control: AbstractControl): Observable<ValidationErrors> | null {
		// TODO implémenter la validation

		return null;
	}
}