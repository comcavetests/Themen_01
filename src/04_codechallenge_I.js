
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt1 = require('prompt-sync')({sigint: true});
const prompt2 = require('prompt-sync')({sigint: true});
let summe = prompt1 + prompt2;
console.log("Die Summe der Zahlen ist:" , summe);