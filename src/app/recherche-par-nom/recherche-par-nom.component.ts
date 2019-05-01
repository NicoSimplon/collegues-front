import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-recherche-par-nom',
	templateUrl: './recherche-par-nom.component.html',
	styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

	matriculeList: string[];
	resultBool: boolean = false;
	resultMessage: boolean = false;
	message: string = "";

	constructor(private _rechercheNom: DataService) { }

	rechercher(nom: string): void {
		this.matriculeList = this._rechercheNom.rechercherParNom(nom);
		
		if (this.matriculeList.length > 0) {
			this.resultBool = true;
			this.resultMessage = false;
		} else {
			this.resultMessage = true;
			this.message = "Aucun collègue de ce nom trouvé";
		}

	}

	ngOnInit() {
	}

}
