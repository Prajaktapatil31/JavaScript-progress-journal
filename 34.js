let arr=[2,3,5,6,3,2,4,5]
let sum=0
arr[2]=0
for(let i of arr){
    sum+=i;
}
console.log(sum); //25


console.log('even numbers from array');

for(let x of arr){
    if(x%2==0){
        console.log(x);
        
    }
}

/*
even numbers from array
2
0
6
2
4
*/