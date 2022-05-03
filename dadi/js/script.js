// Gioco dei dadi
// 1. Generaro un numero random da 1 a 6 sia per il giocatore sia per il computer
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

// 2. Stabilisco il vincitore in base a chi fa il punteggio più alto
if (userNumber > pcNumber) {
    console.log("Hai vinto!");
} else if (userNumber < pcNumber) {
    console.log("Hai perso!");
} else {
    console.log("Hai pareggiato!");
}