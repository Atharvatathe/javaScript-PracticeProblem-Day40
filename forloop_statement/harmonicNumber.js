//n'th Harmonic Number
const prompt = require('prompt-sync')();

let n = prompt("Enter the digit: ");

for(let count = 1; count<= n; count=count+1){
    let Hr = count;
   Process.stdout.write("1/"+Hr+"+");
}