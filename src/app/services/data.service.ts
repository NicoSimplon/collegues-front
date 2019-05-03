import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, filter, map} from 'rxjs/operators';
import { ModifCollegue } from '../models/ModifCollegue';


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

	modifierCollegue(matricule: string, collegueModifie: ModifCollegue): Observable<Collegue> {

		return this._http.patch<Collegue>(`${this.URL_BACKEND}/${matricule}`,  collegueModifie);

	}

	rechercherParNom(nom: string): Observable<string[]> {

		return this._http.get<string[]>(`${this.URL_BACKEND}?nom=${nom}`);

	}

	recupererCollegueCourant(matricule: string): Observable<Collegue> {

		this.subject.subscribe(collegue => {
			if (collegue.matricule === matricule) {
				return collegue;
			}
		});

		return this._http.get<Collegue>(`${this.URL_BACKEND}/${matricule}`)
				.pipe(
					tap(col => {
						this.subject.next(col);
					})
				);

	}

}
