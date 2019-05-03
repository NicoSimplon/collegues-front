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
		
		this._service.creerCollegue(this.newCollegue).subscribe(ok => {
			this.messageOk = `Le collègue ${this.newCollegue.nom} ${this.newCollegue.prenoms} a bien été créé`;
		}, ko => {
			this.messageErreur = ko.error;
		});

	}

	ngOnInit() {
	}

}
