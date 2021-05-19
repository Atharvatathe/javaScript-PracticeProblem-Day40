//Conversion Selection 
const prompt = require('prompt-sync')();
let number = 0;
console.log("Choose the Conversion option from below ")
console.log("1.celcius to farenheit\n2.fareniet to cecius");
let select=prompt();

switch(Number(select)){

    case 1:
        number = prompt("Enter the number which you want to convert: ");
        celciusToFarenhiet(number);
        break;

     case 2:
         number = prompt("Enter the number which you want to convert: ");
         farenhietToCelcius(number);
         break;
        
    default:
        console.log("Invalide option");

}

function celciusToFarenhiet(number){
    let degC = number;
    if(degC >= 0 && degC <= 100){
        let degF = ((degC) * (9/5)) + 32;
        console.log(degC+" C into farenhiet is: " +degF+" F");
    }
}

function farenhietToCelcius(number){
    let degF = number;
    if(degF >= 32 && degF <= 212 ){
        let degC = (degF - 32) * (5/9);
        console.log(degF+" F into celcius is: " +degC+" C");
    }
}