const prompt = require('prompt-sync')();
const { read } = require('fs');

let startDay = new Date();
let endDay = new Date();
let startMonth = new Date();
let endMonth = new Date();
let day = new Date();
let month = new Date();

day.setDate(prompt("Enter the day: "));
month.setMonth(prompt("Enter the Month: "));


if( day > startDay.setDate(20) && month > startMonth.setMonth(2) )
    if(month < endMonth.setMonth(5))
        console.log("True");
else
    console.log("False");
