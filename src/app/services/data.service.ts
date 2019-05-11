import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ModifCollegue } from '../models/ModifCollegue';
import { NewCollegue } from '../models/NewCollegue';
import { StockagePhotoMatricule } from '../models/StockagePhotoMatricule';
import { Commentaire } from '../models/Commentaire';
import { NewCommentaire } from '../models/NewCommentaire';


@Injectable({
	providedIn: 'root'
})
export class DataService {

	URL_BACKEND: string = `${environment.backendUrl}/collegues`;
	subject: Subject<Collegue> = new Subject();

	constructor(private _http: HttpClient) { }

	prendreAbonnement(): Observable<Collegue> {
		return this.subject.asObservable();
	}

	creerCollegue(newCollegue: NewCollegue): Observable<Collegue> {

		return this._http.post<Collegue>(`${this.URL_BACKEND}`, newCollegue, { withCredentials: true });

	}

	modifierCollegue(matricule: string, collegueModifie: ModifCollegue): Observable<Collegue> {

		return this._http.patch<Collegue>(`${this.URL_BACKEND}/${matricule}`, collegueModifie, { withCredentials: true });

	}

	rechercherParNom(nom: string): Observable<string[]> {

		return this._http.get<string[]>(`${this.URL_BACKEND}?nom=${nom}`, { withCredentials: true });

	}

	recupererCollegueCourant(matricule: string): Observable<Collegue> {

		this.subject.subscribe(collegue => {
			if (collegue.matricule === matricule) {
				return collegue;
			}
		});

		return this._http.get<Collegue>(`${this.URL_BACKEND}/${matricule}`, { withCredentials: true })
			.pipe(
				tap(col => {
					this.subject.next(col);
				})
			);

	}

	verifierEmail(email: string): Observable<boolean> {

		return this._http.get<boolean>(`${this.URL_BACKEND}/verif?email=${email}`, { withCredentials: true });

	}

	recupererPhotos(): Observable<StockagePhotoMatricule[]> {

		return this._http.get<StockagePhotoMatricule[]>(`${this.URL_BACKEND}/photos`, { withCredentials: true });

	}

	recupererCommentaires(matricule: string): Observable<Commentaire[]> {

		return this._http.get<Commentaire[]>(`${this.URL_BACKEND}/${matricule}/commentaires`, { withCredentials: true });

	}

	ajouterCommentaire(commentaire: NewCommentaire, matricule: string): Observable<Commentaire> {

		return this._http.post<Commentaire>(`${this.URL_BACKEND}/${matricule}/commentaires`, commentaire, { withCredentials: true });

	}

	supprimerCommentaire(commentaire: Commentaire, matricule: string): Observable<string> {

		return this._http.delete<string>(`${this.URL_BACKEND}/${matricule}/commentaires/${commentaire.id}`, { withCredentials: true });

	}

}
