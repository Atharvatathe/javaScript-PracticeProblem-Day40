//Find the number is prime or not
const prompt = require('prompt-sync')();
let flag = 0;
let number = prompt("Enter the Number: ");
for(let i = 2; i<= number/2 ; i++  ){
    if(number % i == 0){
        console.log(number+ " number is not prime");
        flag = 1;
        break;
    }
}
if(flag == 0)    
    console.log(number+ " Number is prime");

    
