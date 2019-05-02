import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap} from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class DataService {

	URL_BACKEND: string = environment.backendUrl;
	subject: Subject<Collegue> = new Subject();

	constructor(private _http: HttpClient) { }

	prendreAbonnement(): Observable<Collegue> {
		return this.subject.asObservable();
	}

	rechercherParNom(nom: string): Observable<string[]> {

		return this._http.get<string[]>(`${this.URL_BACKEND}?nom=${nom}`);

	}

	recupererCollegueCourant(matricule: string): Observable<Collegue> {

		return this._http.get<Collegue>(`${this.URL_BACKEND}/${matricule}`)
				.pipe(
					tap(col => {
						
						this.subject.next(col);

					})
				);

	}

}
