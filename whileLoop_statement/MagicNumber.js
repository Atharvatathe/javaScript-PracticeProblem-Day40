//Find the magic Number 
const prompt=require('prompt-sync')();

let Number  = prompt("Chooes one number berween 1 to 100: " );
let magicNumber = parseInt(Number);
var sum = 0;
let reminder = 1;

while(sum > 9){
    while(magicNumber > 0){
        reminder = magicNumber % 10;
        sum = reminder + sum;
        magicNumber /= 10; 
    }
    magicNumber = sum;
    sum = 0;
}

if(magicNumber == 1)
    console.log("it is magic number");
else
    console.log("its not a magic number");