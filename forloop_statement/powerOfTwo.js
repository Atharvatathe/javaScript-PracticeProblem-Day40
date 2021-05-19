//Power of 2
const prompt = require('prompt-sync')();

let n = prompt("Enter the digit: ");
let x = Math.pow(2,n);

console.log("2^n is : " +x);
console.log("power of 2 is: ");
for(let i = 2; i <= x; i=i*2){
    let power = i;
    console.log(power);
} 