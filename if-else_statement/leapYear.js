const prompt = require('prompt-sync')();

let year = prompt("Enter the Year: ");
if(year % 4 == 0 && year % 400 == 0 || year % 100 != 0)
    console.log("This is the leap year: " +year);
else
    console.log("This is not a leap year");