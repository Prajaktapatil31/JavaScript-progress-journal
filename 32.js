//nested array -array inside array

let b=[3,4,5,[3,8,9]]
console.log(b);     //[ 3, 4, 5, [ 3, 8, 9 ] ]
console.log(b[3]);  //[ 3, 8, 9 ]



let nums=[10,20,30,40,50,[99,77,66]]
console.log(nums[5]);   //[ 99, 77, 66 ]
console.log(nums[5][1]);    //77


// to access array members/elements, we have three loops

console.log('for loop');
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}


console.log('for of loop'); 
for(let i of nums){
    console.log(i);    
}


console.log('for in loop');
for(let i in nums){
    console.log(nums[i]);    
}

/*

for loop
10
20
30
40
50
[ 99, 77, 66 ]
for of loop
10
20
30
40
50
[ 99, 77, 66 ]
for in loop
10
20
30
40
50
[ 99, 77, 66 ]

*/