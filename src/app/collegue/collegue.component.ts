import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { ModifCollegue } from '../models/ModifCollegue';

@Component({
	selector: 'app-collegue',
	templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

	modifierClick: boolean = true;
	creerClick: boolean = true;

	col: Collegue;

	collegueModifie: ModifCollegue = new ModifCollegue();

	messageErreur: string;

	constructor(private _service: DataService) {
	 }

	modifier(matricule: string) {

		this.collegueModifie.email = this.col.email;
		this.collegueModifie.photoUrl = this.col.photoUrl;
		
		this._service.modifierCollegue(matricule, this.collegueModifie).subscribe(ok => {
			console.log(ok);
		}, ko => {
			this.messageErreur = ko.error;
		});

	}

	ngOnInit() {
		this._service.prendreAbonnement()
			.subscribe(collegue => this.col = collegue);
	}

}