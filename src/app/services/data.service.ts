import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() { }

rechercherParNom(nom: string): string[]  {
  // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
}

recupererCollegueCourant(): Collegue {
  // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
}

}