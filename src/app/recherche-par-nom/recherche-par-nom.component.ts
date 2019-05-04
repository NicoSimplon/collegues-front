import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
	selector: 'app-recherche-par-nom',
	templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

	matriculeList: string[] = [];
	message: string;

	constructor(private _service: DataService) { }

	rechercher(nom: string): void {

		this._service.rechercherParNom(nom)
			.subscribe((matricules: string[]) => {

				this.message = undefined;
				this.matriculeList = matricules;

			}, (error: any) => {

				if (error.status > 399 && error.status < 500) {
					this.message = "Aucun collègue de ce nom trouvé";
				} else {
					this.message = "Un problème est survenu sur le serveur, veuillez contacter un administrateur";
				}
				
			});

	}

	afficherCollegue(matricule: string): void {

		this._service.recupererCollegueCourant(matricule)
			.subscribe(col => {}, err => {});

	}

	ngOnInit() {
	}

}
