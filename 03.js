// variables -container used to store data
//JS is dynamically type language - hm kisibhi type ki value ko store kr sakte hai-number/array/string etc 

//console.log(k); -->gives error like "k is not defined"

// ---------------------------------------------------


/* 
var - functional scoped. public scope. old variable. if we not give value to var variable & try to print it, it will gives answer as undefined
--> reinitialize/redefine
--> reassign
*/


var a=5
var b=4
console.log(a+b); //9

//reassign
a=4.4
console.log(a); //4.4

//reinitialize
var a="prajakta"
console.log(a); //prajakta

var z
console.log(z); //undefined

// -------------------------------------------------


/*
let - block scoped. if we not give value to let variable & try to print it, it will gives answer as undefined
--> reassign
--> can't reinitialize
*/

let num=5
console.log(num); //5

num=2
console.log(num);   //2

// let num=8 - gives error

let v='hello'
console.log(v); //hello

{
    v=66
    console.log(v); //66
    
    let num='inside block'
    console.log(num);   //inside block
}

console.log(v); //66

console.log(num);   //2

let y
console.log(y); //undefined


// --------------------------------------------------


/* 
const - block scoped. we must need to initialize const variable, otherwise it will give error as "Missing initializer in const declaration"
--> can't reassign value
--> can't redefine
*/

const i=4
console.log(i); //4


{
    const i=3
    console.log(i);  //3
}

console.log(i); //4
