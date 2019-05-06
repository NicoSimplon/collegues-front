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
	emailTemp: string;

	collegueModifie: ModifCollegue = new ModifCollegue();

	messageErreur: string;
	messageOk: string;

	constructor(private _service: DataService) { }

	modifier(matricule: string) {

		if (this.col.email != this.emailTemp){
		
			this.collegueModifie.email = this.col.email;
			this.collegueModifie.photoUrl = this.col.photoUrl;
			
			this._service.modifierCollegue(matricule, this.collegueModifie).subscribe(ok => {
				this.messageErreur = undefined;
				this.messageOk = `Le collègue ${this.col.nom} ${this.col.prenoms} a bien été modifié`;
				setInterval(
					() => {
						this.messageOk = undefined;
					}, 7000
				);
			}, ko => {
				this.messageOk = undefined;
				this.messageErreur = ko.error;
				setInterval(
					() => {
						this.messageErreur = undefined;
					}, 7000
				);
			});
		}

	}

	ngOnInit() {
		this._service.prendreAbonnement()
			.subscribe(collegue => {
				this.col = collegue;
				this.emailTemp = this.col.email;
			});
	}

}
