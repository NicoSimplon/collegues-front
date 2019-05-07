import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Commentaire } from '../models/Commentaire';

@Component({
	selector: 'app-commentaire',
	templateUrl: './commentaire.component.html'
})
export class CommentaireComponent implements OnInit {

	@Input() commentaire: Commentaire;

	constructor(private _service: DataService) { }

	ngOnInit() {

	}

}
