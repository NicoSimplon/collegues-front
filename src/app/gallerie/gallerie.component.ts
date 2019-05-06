import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { StockagePhotoMatricule } from '../models/StockagePhotoMatricule';

@Component({
	selector: 'app-gallerie',
	templateUrl: './gallerie.component.html'
})
export class GallerieComponent implements OnInit {

	messageError: string;
	photos: StockagePhotoMatricule[];

	constructor(private _service: DataService) { }

	ngOnInit() {
		this._service.recupererPhotos().subscribe(
			photos => {
				this.photos = photos;
			},
			erreur => {
				this.messageError = `${erreur.error}`;
			}
		);
	}

}
