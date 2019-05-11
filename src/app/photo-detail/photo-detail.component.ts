import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../models/Commentaire';
import { NewCommentaire } from '../models/NewCommentaire';

@Component({
	selector: 'app-photo-detail',
	templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

	matricule: string;
	collegue: Collegue;
	message: string;
	messageOk: string;
	newComment: NewCommentaire = new NewCommentaire();
	commentaires: Commentaire[];

	constructor(private _service: DataService, private route: ActivatedRoute) { }

	updateListAfterDelete(message: string): void {
		this.updateCommentList(message);		
	}

	saveNewComment(): void {
		if (this.newComment.contenu.length >= 5) {
			this._service.ajouterCommentaire(this.newComment, this.matricule).subscribe(
				ok => {
					this.updateCommentList("Le commentaire a été ajouté avec succès");
				},
				error => {
					if (error.status === 403) {
						this.message = "Vous devez avoir des droits d'administrateur pour ajouter un commentaire";
					} else {
						this.message = `${error.message}`;
					}
					setInterval(
						() => {
							this.message = undefined;
						}, 7000
					);
				}
			);
		}
	}

	updateCommentList(message?: string) {
		this._service.recupererCommentaires(this.matricule).subscribe(
			commentaireList => {
				this.commentaires = commentaireList;
				if (message) {
					this.messageOk = message;
					setInterval(
						() => {
							this.messageOk = undefined;
						}, 7000
					);
				}
			},
			error => {
				this.message = `Une erreur est survenue : ${error.message}`;
				setInterval(
					() => {
						this.message = undefined;
					}, 7000
				);
			}
		);
	}

	ngOnInit() {
		
		this.matricule = this.route.snapshot.paramMap.get("matricule");
		
		this._service.recupererCollegueCourant(this.matricule).subscribe(
			collegue => this.collegue = collegue,
			error => {
				this.message = error.message;
				setInterval(
					() => {
						this.message = undefined;
					}, 7000
				);
			}
		);

		this.updateCommentList();

	}

}
