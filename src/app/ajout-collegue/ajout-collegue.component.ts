import { Component, OnInit } from '@angular/core';
import { NewCollegue } from '../models/NewCollegue';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-ajout-collegue',
	templateUrl: './ajout-collegue.component.html'
})
export class AjoutCollegueComponent implements OnInit {

	newCollegue: NewCollegue = new NewCollegue();

	messageErreur: string;
	messageOk: string;

	constructor(private _service: DataService) { }

	creerCollegue() {

		this.newCollegue.roles = ["ROLE_USER"]
		
		this._service.creerCollegue(this.newCollegue).subscribe(ok => {
			this.messageOk = `Le collègue ${this.newCollegue.nom} ${this.newCollegue.prenoms} a bien été créé`;
			setInterval(
				() => {
					this.messageOk = undefined;
				}, 7000
			);
		}, ko => {
			if(ko.status === 403) {
				this.messageErreur = "Il faut avoir des droits d'aministateur pour ajouter un nouveau collègue";
			} else {
				this.messageErreur = ko.message;
			}
			setInterval(
				() => {
					this.messageErreur = undefined;
				}, 7000
			);
		});

	}

	ngOnInit() {
	}

}
