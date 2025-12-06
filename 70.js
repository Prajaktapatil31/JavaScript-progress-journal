let l1=[1,2,3]
let l2=[9,8,6]

let finalArr=[...l1,...l2]
console.log(finalArr);      //[ 1, 2, 3, 9, 8, 6 ]

l1=[25, ...l1 ,20];
console.log(l1);    //[ 25, 1, 2, 3, 20 ]