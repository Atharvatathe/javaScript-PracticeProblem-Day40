//Flip coin and check either Head or Tail win 11 time
let IS_HEAD = 0;
let IS_TAIL = 1;

let countH = 0;
let countL = 0;

while(countH < 11 && countL < 11){
    let flipcoin = Math.floor(Math.random() * 2) % 10;
    if(flipcoin == IS_HEAD)
    {
        countH++;
        console.log("Head Count: " +countH);
    }
    else if(flipcoin == IS_TAIL)
    {
        countL++;
        console.log("Tail Count :" +countL);
    }
}

if(countH == 11)
    console.log("Head is win");
else
    console.log("Tail is Win");