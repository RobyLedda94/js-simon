// TRACCIA
// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.






let randomNumbers = [];  // array contenitore dei numeri 

while (randomNumbers.length < 5) {  // ciclo while
    let numbers = Math.floor(Math.random() * 100 + 1);  // genero dei numeri da 1 a 100

    if(!randomNumbers.includes(numbers)) {  // condizione di controllo per evitare di inserire numeri doppi all'interno dell'array
        randomNumbers.push(numbers); // inserisco nell'array i 5 numeri generati a random
    }
}

console.log(randomNumbers);