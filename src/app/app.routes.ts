import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'gallerie', component: GallerieComponent },
    { path: 'apropos', component:  AProposComponent},
    { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];