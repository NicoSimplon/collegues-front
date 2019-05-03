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

	constructor(private _service: DataService) { }

	creerCollegue() {
		
		this._service.creerCollegue(this.newCollegue).subscribe(ok => {
			console.log(ok);
		}, ko => {
			this.messageErreur = ko.error;
		});

	}

	ngOnInit() {
	}

}
