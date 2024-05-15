

/*** Rechner */

const { get } = require("prompt");

/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : Check!
3. Fkt. Grundrechenarten : Check!
4. Ausgabe in Konsole : Check!
*/
const ERROR_STR_GEN = "Irgendwas ging schief!";
const ERROR_STR_DIV = "Division durch 0 nicht Möglich!";

//agreement : "+","-","*";"/"

const prompt1 = require('prompt-sync')({sigint: true});
const userInput1 = prompt1();
const prompt2 = require('prompt-sync')({sigint: true});

const prompt3 = require('prompt-sync')({sigint: true});



startApp();
function startApp() {
	output(calculator(getNumb1(),getNumb2(),getOP()));
}

function getNumb1(params) {
	return parseInt(prompt1("Zahl 1:"));
}

function getNumb2(params) {
	return parseInt(prompt3("Zahl 2:"));
}
function getOP(params) {
	return prompt2;
}

function calculator(a,b,op) {
	switch (op) {
		case "+": //Addieren
			return add(a,b);
	
		case "-": //Subtraieren
			return subtraction(a,b);
	
		case "*": //Multiplizieren
			return multiplikation(a,b);
	
		case "/": //Dividieren
		case ":": //Dividieren
			return division(a,b);
		default:
return ERROR_STR_GEN;
	}
	
}

// Module: addition a + b 

function add(a,b) {
	return a + b;
}

//Module: subtraction 1 - b 

function subtraction(a , b) {
	return a - b;
}

//Module: multiplikation a*b 


function multiplikation(a,b) {
	return a * b;
}

//Module division a/b 


function division(a,b) {
	if (b ===0) 
		return ERROR_STR_DIV;
	
	return a / b;
}



// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

