import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API Collègues Front';
  paul:Collegue = collegueMock[0];
  nicolas:Collegue = collegueMock[1];
  julie:Collegue = collegueMock[2];
}
