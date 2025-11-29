//logical question

let arr=[1,2,3,4]
console.log(arr);


for(let x of arr){
    arr[3]=x;   
}

console.log(arr);

//Round 1 : [1,2,3,1]
//Round 2 : [1,2,3,2]
//Round 3 : [1,2,3,3]
//Round 4 : [1,2,3,3]
