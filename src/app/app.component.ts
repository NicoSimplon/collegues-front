import { Component, OnInit } from '@angular/core';
import { Collegue } from './models/Collegue';
import { DataService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	title = 'Administration Collègue';
	colleguesArray: Collegue[];

	constructor(private _service: DataService) {
	}

	afficherMessage(message: string) {
		console.log(message);
	}

	rechercheParNom() {
		this.colleguesArray = this._service.recupererCollegueCourant();
	}

	ngOnInit() {
		this.colleguesArray = this._service.getAll();
	}

}
