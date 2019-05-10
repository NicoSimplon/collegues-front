import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-component',
	templateUrl: './menu-component.component.html'
})
export class MenuComponentComponent implements OnInit {

	connecte = false;
	@Output() deco = new EventEmitter();

	constructor(private _service: AuthService, private router: Router) { }

	deconnexion() {
		this._service.deconnexion().subscribe(
			ok => {
				console.log("Déconnecté");
				this.connecte = false;
				this.deco.emit(true);
			},
			error => {
				this.connecte = true;
			}
		);
		this.router.navigate(["/login"]);
	}

	ngOnInit() {
		this._service.user.subscribe(
			() => this.connecte = true
		);
	}

}
