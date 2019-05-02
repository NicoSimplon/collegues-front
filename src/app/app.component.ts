import { Component, OnInit } from '@angular/core';
import { Collegue } from './models/Collegue';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	title = 'Administration Collègue'; 

	constructor() {
	}

	afficherMessage(message: string) {
		console.log(message);
	}

	ngOnInit() {
	}

}
