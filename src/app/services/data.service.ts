import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() { }

rechercherParNom(nom: string): string[]  {
  // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
  return [""];
}

recupererCollegueCourant(): Collegue {
  // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
  let temp = new Collegue("a1", "babar", "bebe", new Date(1988,2,1), "http://dsf", "az@analyzeAndValidateNgModules.com");
  return temp;
}

}