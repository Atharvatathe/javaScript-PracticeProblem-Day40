//check How many bet required gamblet to reach 200
let IS_WON = 1;
let IS_LOSS = 0;
let count = 0 ;

let gamblerRs = 100;
while(gamblerRs < 200){
    let bet = Math.floor(Math.random() * 2) % 10;
    if(bet == IS_WON){
        gamblerRs = gamblerRs + 1;
        count++;
    }
    else if(bet == IS_LOSS){
        gamblerRs = gamblerRs - 1;
    }    
}

console.log("The number of bets med are: " +count);
