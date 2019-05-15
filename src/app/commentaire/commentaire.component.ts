import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Commentaire } from '../models/Commentaire';

@Component({
	selector: 'app-commentaire',
	templateUrl: './commentaire.component.html'
})
export class CommentaireComponent implements OnInit {

	@Input() commentaire: Commentaire;
	@Input() matricule: string;
	@Output() event = new EventEmitter();
	messageError: string;

	constructor(private _service: DataService) { }

	submit(): void {
		if (confirm("Veuillez confirmer la suppression du commentaire")) {
			this._service.supprimerCommentaire(this.commentaire, this.matricule).subscribe(
				() => {
					this.event.emit("Le commentaire a été supprimé avec succès");
				},
				error => {
					if(error.status === 403){
						this.messageError = "Vous devez avoir des droits d'administrateur pour pouvoir supprimer un commentaire";
					} else if (error.status > 200){
						this.messageError = "Une erreur est survenue";
					}
					setInterval(
						() => {
							this.messageError = undefined;
						}, 7000
					);
				}
			)
		}
	}

	ngOnInit() {
	}

}
