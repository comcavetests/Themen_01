// Zeilenkommentar | STRG + #

/**
 * 
 * Block-Kommentar
 * 
 /**** Variablen 01 ****/
 //console.log("hi");
 
 /* Deklaration + Wertezuweisung I */

 //let firstName; // Deklaration (Difinition)
 //console.log(firstName); // Ausgabe
 //firstName = "Max"; //Variable festlegen wertzuweisung | assignment 
 //let familyName = "Mütze"; // wertezuweisung Combieniert
 //console.log("Hi, ich bin " + firstName + " " + familyName + "!"); // Hi, ich bin Max Mützel!
/**
 * Wertezuweisung II + Datentypen
 * JS ist ein untypisierte Sprache
 */
//----------------------------------------------------------------------
// let test;
// console.log("Inhalt: "+ test); //ausgabe inhalt
// console.log("Datentyp: "+ typeof test); //ausgabe Datentyp
// console.log("--------------------");

// test = "hi"; // text in "" = string
// console.log("Inhalt: "+ test); //ausgabe inhalt
// console.log("Datentyp: "+ typeof test); //ausgabe Datentyp
// console.log("--------------------");

// test = 2; // number
// console.log("Inhalt: "+ test); //ausgabe inhalt
// console.log("Datentyp: "+ typeof test); //ausgabe Datentyp
// console.log("--------------------");

// test = true; // wahrheitswert  Boolean True and false
// console.log("Inhalt: "+ test); //ausgabe inhalt
// console.log("Datentyp: "+ typeof test); //ausgabe Datentyp
// console.log("--------------------");

// /** Variablen vs. Konstanten in JS */

//----------------------------------------------------------------------
//variable
let test; // Variable : Deklaration
test = "hi"; //wertzuweisung (Initialisierung)
test = "Hello"; // Variable 1 (zeile 46) Überschreiben
console.log("Inhalt: " + test); // Ausgabe
// Konstante
const test2 = "Hi!";
//test2 = "Hello"; // RuntimeError (versuch eine Konstante zu ändern)
console.log("Inhalt: " , test2);


