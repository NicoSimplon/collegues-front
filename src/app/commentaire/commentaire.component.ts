import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Commentaire } from '../models/Commentaire';
import { Collegue } from '../models/Collegue';

@Component({
	selector: 'app-commentaire',
	templateUrl: './commentaire.component.html'
})
export class CommentaireComponent implements OnInit {

	@Input() commentaire: Commentaire;
	@Input() matricule: string;
	@Output() event = new EventEmitter();

	constructor(private _service: DataService) { }

	submit(): void {
		if (confirm("Veuillez confirmer la suppression du commentaire")) {
			this._service.supprimerCommentaire(this.commentaire, this.matricule).subscribe(
				ok => {
					this.event.emit("Suppression du commentaire réalisée avec succès");
				},
				error => {
					this.event.emit(`Une erreur est survenue: ${error.message}`);
				}
			)
		}
	}

	ngOnInit() {
	}

}
