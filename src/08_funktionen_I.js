
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcke

// call(er
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
//function test() 
//{
 //   console.log("Hallo, Esther!");    
//}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
//Funktionsaufruf
//outputNames();
//Caller
//function outputNames() 
//{
    // interne Variable | What happens in VEGAS ...

      //  let firstName = "jan"; // wird außerhalb des funktionsblocks nicht als firstName definiert!

  //  console.log("Hallo, " + firstName + "!");

//}
//console.log(firstName); //wird nicht definiert, weil firstName in dem Codeblock von function outputNames definiert wurde und außerhalb nicht!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


//outputNames2("Jan"); // Argument --> Daten für parameter
//outputNames2("Esther");
//outputNames2("Jan");
//outputNames2();

//function outputNames2(firstName) {
   // console.log("Hallo, " + firstName + "!");
//}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

//outputNames3("Max","Mustermann")

//const prompt = require('prompt-sync')({sigint: true});
//outputNames3(prompt("Vorname? : "),prompt("Nachname? : "));

//function outputNames3(firstName, familyName) {
 //   console.log("Hallo, " + firstName + " " + familyName + "!");
//}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

//refacoring

//outputNamesSRP("Max","Mustermann");

//function outputNamesSRP(firstName, familyName) // 

//{   // funktionalität: string composing
  //  const GAP = " ";
   // let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // Funktionalität im string zusammengeführt ( output )
   // console.log(outputStr);
    
//}


/***** Funktionen 03b *****/

// 2. Funktionalität: string output

//output("Hi");
//output(1);
//output(true);

//function output(outputData) {
   // console.log(outputData);
    

   let outputStr = ("Max","Mustermann")

function getString(firstname, familyName) {
  const GAP = " ";
  let outputStr = "Hallo, " + firstName + GAP + familyName + "!"
return outputStr;
  
}