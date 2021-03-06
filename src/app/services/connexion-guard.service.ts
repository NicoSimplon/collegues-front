import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate {

	constructor(private router: Router, private authService: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < boolean | UrlTree >  {

		return this.authService.isLoggedIn()
			.pipe(
				catchError( () => of(this.router.parseUrl('/login') ))
			);
	
	}

}
