

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : Check!
*/

// Module: addition a + b | test:
//output(add(2,2));
//output(add(2,-2));
//output(add(2,0));

function add(a,b) {
	return a + b;
}

//Module: Subtraction 1 - b | test:
//output(Subtraction(3,2));
//output(Subtraction(3,-2));
//output(Subtraction(3,0));
//output(Subtraction(0,2));

function Subtraction(a , b) {
	return a - b;
}

//Module: Multiplikation a*b | test:

function Multiplikation(a,b) {
	return a * b;
}

//Module Division a/b |test:

function Division(a,b) {
	return a / b;
}



// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

