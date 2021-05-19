//Print power of 2 till it does not reach to 256
 const prompt=require('prompt-sync')();

 let range = 256;
 let power = 1;

 console.log("power of 2 is: ");
while(power < 256){
    power = power * 2;
    console.log(power);
}