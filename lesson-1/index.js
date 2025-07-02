//Tipi di Dato
// String
"Alessandra";
'Terrazas Rocha';
'D\'Antoni';
"D'Antoni";
// Number
10;
10.3;
1_000_000_000;
// Boolean
true; // true, tutto ciò che non è falsy
false; //fale,0, '', null, undefined
// Null
null; //null, rappresesenta un valore vuoto, inizializzato, assegnato, ma vuoto
undefined; // rappresenta un valore non inizializzato e quindi non assegnato
// Array
[0, 1, 2, 3]; //Array numerico
['A', 'B', 'C']; //Array di stringhe
['A', 3, false, null, [3, 2, 1], "B", [null, [1, 2]]]; //Arrey misto
// Object
({
    id: 0,
    name: 'Alessandra',
    last_name: 'Terrazas Rocha',
})

//Variabili
age = 34; // primo esempio di come non dichiarare una variabile, dichiarazione implicita NO
var name = 'Alessandra'; //Dichiarazione in scope globale NO
let id = 1; //Dichiarazione in scope locale SI
id = 2; // Riassegnazione di un valore si
const cap = "90100"; // Dichiarazione di una costante in scope locale SI
cap = '87100'; // Riassegnazione di una costante NO

const user = { // Dichiarazione per una costante per l'utente Alessandra
    id: 0,
    name: 'Alessandra',
    last_name: 'Terrazas Rocha',
}
user.id = 1; // Modifica di un valore interno all'oggetto SI
user = null; // Riassegnazione di una costante NO

