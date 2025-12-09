/* --------------- Find ---------------
find() returns the first element in an array that satisfies a given condition in a callback function.
*/

let l=[2,4,7,8,9,3]
let x=l.find((v)=>v>3)
console.log(x); //4

//return first odd element in an array
let odd=l.find(n=>n%2!=0)
console.log(odd);   //7