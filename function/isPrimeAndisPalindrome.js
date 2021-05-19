//find number is palindrome or not
const prompt = require('prompt-sync')();

let reminder;
let sum = 0;
let temp;
let number1 = prompt("Enter the first number: ");

//Function to check number is palindrome or not
function isPalindrome(number){
    temp = number;
    while(number > 0){
        reminder = number % 10;
        sum = sum * 10 + reminder;
        number = number / 10;   
    }

    if(temp == sum){
        console.log("Number "+ temp +" is palindrome");
        isPrime(temp);
    }
    else
        console.log("Number "+ temp +" is not palindrome");
}


//function to check the palindrome number is prime or not
function isPrime(number){
    let flag = 0;
    for(let i = 2; i<= number/2 ; i++  ){
        if(number % i == 0){
            console.log(number+ " number is not prime");
            flag = 1;
            break;
        }
    }
    if(flag == 0)    
        console.log(number+ " Number is prime");
    
}

isPalindrome(number1);