// Sum of 3 integer  add to zero

let arr = [0,-1,2,-3,1];
let n = arr.length; // length of array
let check = false;

for(let i = 0; i < n-2; i++){
    for(j = i+1; j < n-1; j++){
        for(let k = j+1; k < n; k++){
            if(arr[i]+arr[j]+arr[k]=== 0){
                console.log(arr[i]+" "+arr[j]+" "+arr[j]+"\n");
                 check = true;
            }
        }

    }
}

if(check == false)
    console.log("Numbers are not exist");