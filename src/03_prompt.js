const prompt = require('prompt-sync')({sigint: true}); // isntalliere prompt sync mit npm install prompt-sync

// Alles muss man selber machen lassen! ...
let firstName = prompt("Vorname?: ");
let familyName = prompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");

