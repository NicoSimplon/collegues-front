import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;

  constructor() { }

  modifierClick() {
    console.log("Modification du collègue");
  }

  creerClick() {
    console.log("Mr l'utilisateur, vous venez de cliquer");
  }

  ngOnInit() {
  }

}
