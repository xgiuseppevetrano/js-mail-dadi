// Mail
// 1. Chiedo all’utente la sua email
const mail = prompt("Inserisci la tua mail");

// 2. Controllo che la mail sia nella lista di chi può accedere
const usersMail = ["giovanni.rossi@gmail.com", "gianni.rossi@gmail.com", "filippo.rossi@gmail.com", "giorgio.rossi@gmail.com"];
let isValidMail = false;

for (let i = 0; i < usersMail.length; i++) {
    if (mail === usersMail[i]) {
        isValidMail = true;
    }
}

// 3. Stampo un messaggio appropriato sull’esito del controllo
if (isValidMail) {
    console.log("Mail valida, puoi accedere!");
    alert("Puoi accedere!");
} else {
    console.log("Mail non valida, non puoi accedere!");
    alert("Non puoi accedere!");
}