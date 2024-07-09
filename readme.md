Esercizio di oggi: Simon Says

nome repo: js-simon

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


<!-- PSEUDO CODICE -->

1 - creo un array vuoto che conterrà 5 numeri generati casualmente
2 - definisco un ciclo while 
2.1 - genero casualmente dei numeri da 1 a 100 con la libreria math
2.2 - devo accertarmi che i numeri generati da inserire all'interno dall'array non siano doppi
3 - inserisco con in push i numeri all'interno dell'array
4 - visualizzo i numeri in pagina
4.1 - creo gli elementi nell'html
4.2 - recupero gli elementi dal dom
5 - devo stabilire la timing function
5.1 - i numeri mostrati in pagina spariscono dopo 3 secondi
6 - definisco un array vuoto che contiene i numeri inseriti dall'utente 
7 - definisco un ciclo for in cui devo chiedere all'utente di inserire i numeri che ha visto
7.1 - aggiungo i numeri inseriti dall'utente nell'array
8 - devo verificare quanti e quali numeri sono stati indovinati confrontando gli array

