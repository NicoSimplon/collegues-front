import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { collegueMock } from '../mock/collegues.mock';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	collegueList:Collegue[] = collegueMock;
	matriculeList:string[];
	collegueCourant:Collegue;

	constructor() { }

	rechercherParNom(nom: string): string[] {
		this.matriculeList = this.collegueList.filter(collegue => collegue.nom === nom).map(collegue => collegue.matricule);
		return this.matriculeList;
	}

	recupererCollegueCourant(): Collegue[] {
		// TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
		// const collegueCourantList: Collegue[] = this.collegueList.filter(collegue => matricules.forEach(mat => mat === collegue.matricule));
		// return collegueCourantList;

		return this.collegueList;
	}

}