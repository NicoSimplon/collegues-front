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
	collegueCourant:Collegue[];

	constructor() { }

	rechercherParNom(nom: string): string[] {
		this.matriculeList = this.collegueList
			.filter(collegue => collegue.nom === nom)
			.map(collegue => collegue.matricule);

		this.collegueCourant = this.collegueList
			.filter(collegue => collegue.nom === nom);

		return this.matriculeList;
	}

	recupererCollegueCourant(): Collegue[] {

		return this.collegueCourant;
		
	}

	getAll(): Collegue[] {
		return this.collegueList;
	}

}