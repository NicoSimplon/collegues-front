import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	title = 'Administration Collègue'; 

	afficherMessage(message: string) {
		console.log(message);
	}

	ngOnInit() {
	}

}
