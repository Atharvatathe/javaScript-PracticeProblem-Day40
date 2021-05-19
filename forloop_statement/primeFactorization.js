//compute factor of Number using prime factorization
const prompt = require('prompt-sync')();

let number = prompt("Enter the Number: ");

for(let i=1; i*i < number; i++){

    if(number % i == 0){
        console.log(i+ " ");
        number = number/i;
    }
}
if(number > 2)
    console.log(number);
