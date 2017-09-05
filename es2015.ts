//Le let est une variable de bloc qui n'existera que dans le 
//block de code actuel (un block est definie par des acolades 
// et dans les block enfant (si non redé))

let variableScope:string = 'bloup';

const variableConstante:string = "blip";
variableConstante = "Bonnjour tout le monde";

if(true) {
    let variableScope = "blip";
    console.log(variableScope); //blip
} 

console.log(variableScope); //bloup

//Version ecrite 1 : Cette instruction est strictement equivalente a celle  du dessous.
let monTableau:string[] = [];
monTableau.filter(function(valeur) {
    return valeur === 'bloup'; //Renvoie true ou false
});

//Version ecrite 2 : Cette instruction est strictement equivalente a celle  du dessus.
monTableau.filter((valeur) => valeur === "bloup");
//Version ecrite 3 : Et aussi équivalent a celle du dessus.
monTableau.filter((valeur) => {
    return valeur === 'bloup';
});


//Importer des truc de http || syntaxe d'une porte compiler en require.
import {Maclass} from './ma-class';