//Read Digit 1,10,100 and display units
const prompt = require('prompt-sync')();
let digit = prompt("Enter the single digit: ");

switch(Number(digit)){

case 1: 
    console.log("One");
    break;

case 10: 
    console.log("Ten");
    break;

case 100: 
    console.log("Hundred");
    break;

case 1000: 
    console.log("Thousand");
    break;

case 10000: 
    console.log("Ten thousand");
    break;

case 100000: 
    console.log("Lakh");
    break;

case 1000000: 
    console.log("Ten Lakh");
    break;

case 10000000: 
    console.log("One coror");
    break;

}