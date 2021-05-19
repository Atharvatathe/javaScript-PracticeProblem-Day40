//find number is palindrome or not
const prompt = require('prompt-sync')();

let reminder;
let sum = 0;
let temp;
let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");

//Function to check number is palindrome or not
function palindrome(number){
    temp = number;
    while(number > 0){
        reminder = number % 10;
        sum = sum * 10 + reminder;
        number = number / 10;   
    }

    if(temp == sum){
        console.log("Number "+ temp +" is palindrome");
    }
    else
        console.log("Number "+ temp +" is not palindrome");
}

palindrome(number1);
palindrome(number2);
