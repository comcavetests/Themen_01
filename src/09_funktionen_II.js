

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

//Module: subtraction 1 - b | test:
//output(subtraction(3,2));
//output(subtraction(3,-2));
//output(subtraction(3,0));
//output(subtraction(0,2));

function subtraction(a , b) {
	return a - b;
}

//Module: multiplikation a*b | test:
//output(multiplikation(3,2));
//output(multiplikation(3,-2));
//output(multiplikation(3,0));

function multiplikation(a,b) {
	return a * b;
}

//Module division a/b |test:
output(division(4,2));
output(division(3,2));
output(division(3,-2));
output(division(0,2));
output(division(3,0));
output(division(0,0));


function division(a,b) {
	if (b ===0) 
		return "Durch 0 kann man nicht teilen, du Idiot!!!"
	
	return a / b;
}



// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

