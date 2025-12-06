// -------------- Shallow Copy --------------  
//Changes affect the original data

let l=[1,2,3,4,5]
let m=l
m.push(44)
console.log(m);     //[ 1, 2, 3, 4, 5, 44 ]
console.log(l);     //[ 1, 2, 3, 4, 5, 44 ]


// -------------- Deep Copy ---------------
//Changes do not affect the original data

let arr=[4,5,6,7]
let n=[...arr]
n.push(90)
console.log(n);     //[ 4, 5, 6, 7, 90 ]
console.log(arr);   //[ 4, 5, 6, 7 ]