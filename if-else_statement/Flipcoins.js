let HEAD = 0;
let TAIL = 1;

let flipCoin = Math.floor(Math.random() * 10) % 2;

if(flipCoin == HEAD)
    console.log("you got Head");
else
    console.log("You got Tail");    