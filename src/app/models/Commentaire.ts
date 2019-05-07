import { Collegue } from './Collegue';

export class Commentaire {

    public collegue: Collegue;

    constructor (public id: number, public contenu: string, public creationDate: Date) {}

}