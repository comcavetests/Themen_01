/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein!
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes! --> default
//job = "teacher"; // .. unterrichtet!
//job = "instructor"; // .. unterrichtet!

switch (job) 
{
            case "driver":
        console.log(firstName + "fährt taxi");
        break;
            case "diver":
        console.log(firstName + "tacht im Rhein!");
        break;
            case "artist":
         console.log(firstName + "malt ein Bild");
        break;    
            case "pilot":
         console.log(firstName + "macht etwas anders!");
        break;    
            case "teacher":
         console.log(firstName + "unterrichtet");
        break;    
            case "instructor":
         console.log(firstName + "unterrichtet");
        break;
default:
console.log(firstName + ". . macht etwas anderes!")
    break;
}
