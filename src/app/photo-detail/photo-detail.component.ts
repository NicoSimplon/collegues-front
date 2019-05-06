import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-photo-detail',
	templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

	matricule: string;
	collegue: Collegue;
	message: string;

	constructor(private _service: DataService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.matricule = this.route.snapshot.paramMap.get("matricule");
		this._service.recupererCollegueCourant(this.matricule).subscribe(
			collegue => this.collegue = collegue,
			error => this.message = `${error.error}`
		);
	}

}
