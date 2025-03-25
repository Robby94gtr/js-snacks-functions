/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
let filterByInitial = (array, letter) => {
    const filtered = [];

    for(let i=0; i<array.length; i++){

        if(array[i][0].toLowerCase() === letter.toLowerCase()){
            filtered.push(array[i]);
        }
    }

    return filtered;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitial(names, "a"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]