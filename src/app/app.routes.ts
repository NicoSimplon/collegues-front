import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnexionGuardService } from './services/connexion-guard.service';

export const ROUTES: Routes = [
    { path: 'accueil', canActivate: [ConnexionGuardService], component: AccueilComponent },
    { path: 'galerie', canActivate: [ConnexionGuardService], component: GallerieComponent },
    { path: 'apropos', canActivate: [ConnexionGuardService], component:  AProposComponent},
    { path: 'galerie/:matricule', canActivate: [ConnexionGuardService], component: PhotoDetailComponent},
    { path: 'login', component: AuthentificationComponent },
    { path: '', canActivate: [ConnexionGuardService], pathMatch: 'full', redirectTo: '/login' }
];