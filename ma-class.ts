//Crée une class en js.
//L'export la class permet de retrouver Maclass par le biais de import 
export class Maclass {
    private maProprieter:string; 
    //maProprieter est interdit sur js  mais sur typeScript.

    //methode de construction, équivalente a __construct
    constructor() {
        this.maProprieter = 'bloup';
    }
    //Ajouter une method
    method():string {
        return "la proprieter vaut : " +this.maProprieter;
    }
}