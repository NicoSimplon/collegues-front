import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';

@Directive({
	selector: '[appEmailValidator]',
	providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements AsyncValidator {

	message: string;

	constructor(private _service: DataService) { }

	validate(control: AbstractControl): Observable<ValidationErrors> | null {
		
		return this._service.verifierEmail(control.value).pipe( map (
			(bool) => {
				if (bool) {
					return { emailInvalide : "Cet email existe déjà" };
				} else {
					return null;
				}
			}));

	}
}