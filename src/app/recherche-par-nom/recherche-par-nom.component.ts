import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-recherche-par-nom',
	templateUrl: './recherche-par-nom.component.html',
	styleUrls: ['./recherche-par-nom.component.css'],
	providers: [DataService]
})
export class RechercheParNomComponent implements OnInit {

	matriculeList: string[];
	resultBool: boolean = false;

	constructor(private _rechercheNom: DataService) { }

	rechercher(nom: string): void {

		this.matriculeList = this._rechercheNom.rechercherParNom(nom);
		
		if (this.matriculeList[0]) {
			this.resultBool = true;
		}

	}

	ngOnInit() {
	}

}
