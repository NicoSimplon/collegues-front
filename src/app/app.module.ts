import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { AjoutCollegueComponent } from './ajout-collegue/ajout-collegue.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    AjoutCollegueComponent,
    EmailValidatorDirective,
    MenuComponentComponent,
    AccueilComponent,
    GallerieComponent,
    AProposComponent,
    PhotoDetailComponent,
    CommentaireComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
