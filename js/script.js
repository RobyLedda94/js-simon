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



document.getElementById('numbers').innerText = randomNumbers.join(' - '); // recupero l'elemento numbers dal dom 
console.log(randomNumbers); // mostra l'array dei numeri in console


setTimeout (function() {  // definisco la timing function 
    document.getElementById('numbers').innerText = '';  // funzionalità che cancella i numeri dalla pagina

    let userNumbers = []; // array per raccogliere i numeri inseriti dall'utente 
    let correctNumbers = []; // array per raccogliere i numeri corretti
    

    for (let i = 0; i < 5; i++) {  // l'utente inserisce i numeri uno alla volta

       let userNumber = parseInt(prompt('Inserisci i numeri che hai visto in precesenza')); // prompt per chiedere all'utente di inserire i numeri che ha visto
       userNumbers.push(userNumber); // inserisce i numeri digitati dall'utente nell' array
    //    console.log(userNumbers); 

       if (randomNumbers.includes(userNumber)){
        
         correctNumbers.push(userNumber);
         console.log(correctNumbers);
       }
    } 

    // visualizzo il risultato in pagina
    document.getElementById('result').innerText = ' Hai indovinato ' + correctNumbers.length + ' numeri ' + correctNumbers.join(' - ');
        
},5000); // tempo di visualizzazione dei numeri in pagina espresso in millisecondi



