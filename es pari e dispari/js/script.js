// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("pari o dispari")
console.log(userChoice)

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"))
console.log(userNumber)


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getCpuRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
    
}

let cpuNumber = getCpuRandomNumber(1,5);
console.log(cpuNumber)

// Sommiamo i due numeri
let sum = userNumber + cpuNumber
console.log(sum)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function sommaPariDispari() {
    let pariOdispari = '';
    if (sum % 2 === 0 ) {
        pariOdispari = "pari"
    }else{
        pariOdispari = "dispari"
    }
    return pariOdispari;
}

const result = sommaPariDispari();
console.log(result)

// Dichiariamo chi ha vinto.
let winner = "";
if (userChoice === result) {
    winner = "l'utente ha vinto"
}else{
    winner = "la CPU ha vinto"
}

console.log(winner)