/*
perfect number - if the sum of all its divisors excluding itself is equal to the number then it is perfect number.

eg. 28 = 1+2+4+7+14 == 28
eg. 10 = 1+2+5 != 10

*/


let n=28
let mid=parseInt(n/2);
let sum=0

for(let i=1;i<=mid;i++){
    if(n%i==0){
        sum+=i;
    }
}

console.log(sum==n? `${n} is perfect number`:`${n} is not perfect number`);

// 28 is perfect number
