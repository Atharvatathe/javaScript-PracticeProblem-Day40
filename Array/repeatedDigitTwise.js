//Print the digit thar repeated Twise between 1 to 100 ex.11 33 77
let arr = new Array();
let j=0;

for(let i = 1; i < 100; i++){
    if(i%11 == 0){
        arr[j] = i;
        j++;
    }
}
console.log("Digit that repeated twise are: ")
console.log(arr);