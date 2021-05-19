const prompt = require('prompt-sync')();
let max = 0;
let min = 0;
let a = prompt("Enter First number a: ");
let b = prompt("Enter Second number b: ");
let c = prompt("Enter Third number c: ");

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

console.log("Result1: " +result1);
console.log("Result2: " +result2);
console.log("Result3: " +result3);
console.log("Result4: " +result4);

min = result1;
max = result1;

if(result2 > max)
    max = result2;
else if(result2 < min)
    min = result2;
if(result3 > max)
    max = result3;
else if(result3 < min)
    min = result3;
if(result4 > max)
    max = result4;
else if(result4 < min)
    min = result4;
    
 console.log("Maximum Number is: " +max);
 console.log("Minimum Number is: " +min);   