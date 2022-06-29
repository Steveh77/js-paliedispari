// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola

let userWord = prompt("inserisci una parola")
console.log(userWord)

// Creare una funzione per capire se la parola inserita è palindroma


function reverseString (word) {
    let result = '';
        
    for (let i = word.length - 1; i >= 0 ; i--) {
        result += word[i];
            
    }
    return result
}
const reversedString = reverseString(userWord)
console.log(reversedString)

if (userWord === reversedString) {
    alert("La parola inserita è palindroma")
}else{
    alert("la parola inserita non è palindroma")
      
}




