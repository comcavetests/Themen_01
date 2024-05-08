
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

console.log("**********************************************************************");
console.log("*****Schönen guten Tag, ich bin dein Persönlicher Taschenrechner.*****");
console.log("*****************Wollen wir es mal versuchen?*************************");
const prompt1 = require('prompt-sync')({sigint: true});
const userInput1 = prompt1("Bitte gib mir deine erste Zahl: ");
const a = parseFloat(userInput1);
console.log("**********************************************************************");

const prompt2 = require('prompt-sync')({sigint: true});
const userInput2 = prompt1("und nun gib mir Bitte Deine zweite Zahl damit ich anfangen kann. ");
const b = parseFloat(userInput2);
let c = a + b;
console.log("**********************************************************************");
console.log("              Die Summe aus :" ,a ,"+" ,b ,"ist ", c);
console.log("**********************************************************************");

