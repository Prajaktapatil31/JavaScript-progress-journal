//Find Maximum value in an array
let arr=[2,3,6,34,8,43,2]
let max=arr[0]

for(let x of arr){
    if(x>max){
        max=x;
    }
}

console.log(max); //43

