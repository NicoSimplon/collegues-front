import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-component',
	templateUrl: './menu-component.component.html'
})
export class MenuComponentComponent implements OnInit {

	constructor(private _service: AuthService, private router: Router) { }

	deconnexion() {
		this._service.deconnexion().subscribe(
			ok => {},
			error => {}
		);
		this.router.navigate(["/login"]);
	}

	ngOnInit() {
	}

}
