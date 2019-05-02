import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-collegue',
	templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

	modifierClick:boolean = true;
	nomBouton:string = "Modifier";

	creerClick:boolean = true;

	col:Collegue = new Collegue('', '', '', undefined, '', '');

	@Output() messageModif = new EventEmitter<string>();

	@Output() messageCreation = new EventEmitter<string>();

	constructor(private _service: DataService) {
	 }

	modifier() {

		if (this.modifierClick) {
			this.nomBouton = "Valider";
		} else {
			this.nomBouton = "Modifier";
		}

		this.messageModif.emit("Modification du collègue");
	}

	creer() {
		this.messageCreation.emit("Création d'un nouveau collègue");
	}

	ngOnInit() {
		this._service.prendreAbonnement()
			.subscribe(collegue => this.col = collegue);
	}

}
