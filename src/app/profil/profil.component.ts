import { Component, OnInit } from '@angular/core';
import { Password } from '../models/Password';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profil',
	templateUrl: './profil.component.html'
})
export class ProfilComponent implements OnInit {

	newPassword = new Password("");

	messageSuccess: string;
	messageError: string;

	constructor(private _service: AuthService) { }

	submit() {
		this._service.modifierMotDePasse(this.newPassword).subscribe(
			message => {
				this.newPassword = new Password("");
				this.messageSuccess = "Le mot de passe a été modifié avec succès";
				setInterval(
					() => {
						this.messageSuccess = undefined;
					}, 7000
				);
			},
			error => {
				console.log(error)
				this.messageError = `Une erreur est survenue: ${error.message}`;
				setInterval(
					() => {
						this.messageError = undefined;
					}, 7000
				);
			}
		);
	}

	ngOnInit() {
	}

}
