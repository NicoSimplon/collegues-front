import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Component({
	selector: 'app-recherche-par-nom',
	templateUrl: './recherche-par-nom.component.html',
	styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

	collegueList:Collegue[] = collegueMock;
	matriculeList:string[];
	resultBool:boolean = false;

	constructor() { }

	rechercher(nom: string): void {
		console.log(`Nom du collègue recherché : ${nom}`);
		this.resultBool = true;

		this.matriculeList = this.collegueList.filter(collegue => collegue.nom === nom).map(collegue => collegue.matricule);

	}

	ngOnInit() {
	}

}
