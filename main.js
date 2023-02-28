'use strict';

//WHILE - simulazione ciclo for
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//WHILE - verifica il valore inserito dall'utente
let input = Number(prompt('Inserisci un numero'));

while(isNaN(input)){
    console.log('pippo');
    //operazioni da eseguire
    //operazione per modificare condizione
    input = Number(prompt('Inserisci un numero'));
    console.log(input);
}

//DO WHILE
do {
    let input = Number(prompt('Inserisci un numero'));
} while (isNaN(input));





