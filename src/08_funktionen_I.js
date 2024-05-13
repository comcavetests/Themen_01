
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcke

// call(er
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test() 
{
    console.log("Hallo, Esther!");    
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
//Funktionsaufruf
//outputNames();
//Caller
function outputNames() 
{
    // interne Variable | What happens in VEGAS ...

        let firstName = "jan"; // wird außerhalb des funktionsblocks nicht als firstName definiert!

    console.log("Hallo, " + firstName + "!");

}
//console.log(firstName); //wird nicht definiert, weil firstName in dem Codeblock von function outputNames definiert wurde und außerhalb nicht!