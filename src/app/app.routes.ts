import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GallerieComponent },
    { path: 'apropos', component:  AProposComponent},
    { path: 'galerie/:matricule', component: PhotoDetailComponent},
    { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];