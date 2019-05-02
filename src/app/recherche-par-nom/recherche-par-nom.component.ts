import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-recherche-par-nom',
	templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

	matriculeList: string[];
	resultBool: boolean = false;
	resultMessage: boolean = false;
	message: string = "";
	@Output() eventRecherche = new EventEmitter<string>();

	constructor(private _rechercheNom: DataService) { }

	rechercher(nom: string): void {
		this.matriculeList = this._rechercheNom.rechercherParNom(nom);
		this.eventRecherche.emit("click");
		
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
