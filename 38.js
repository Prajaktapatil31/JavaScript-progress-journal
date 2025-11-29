/*
JavaScript

Non-Mutating Methods (Return a new array or value without modifying the original):
------------------------------------------------------------------------------------------------------------

1. slice(): Returns a shallow copy of a portion of an array into a new array.

2. concat(): Joins two or more arrays, returning a new array.

3. includes(): Determines whether an array includes a certain value among its entries, returning true or false.

4. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

5. join(): Joins all elements of an array into a string. (using separator)

6. toString(): Returns a string representing the specified array and its elements.

*/

// -----------------------------------------------------------------------------------------------------------

//slice  - array ka tukda
let color=['green','blue','pink','black']
console.log(color);     //[ 'green', 'blue', 'pink', 'black' ]

let l=color.slice(1,2)
console.log(l);     //[ 'blue' ]

// ---------------------------------------------------------------------------------

//concat - multiple arrays ko merge krna
let l1=[30,40]
let l2=[11,22]
let l3=l1.concat(l2)
let l4=l1.concat(l2,color)
console.log(l3);    //[ 30, 40, 11, 22 ]
console.log(l4);    //[30,40,11,22,'green','blue','pink','black']

// ---------------------------------------------------------------------------------

//includes - find krta hai 
let n=[4,5,76,11]
console.log(n.includes(5));  //true

// ---------------------------------------------------------------------------------

//indexOf
console.log(n.indexOf(76));   //2

// ---------------------------------------------------------------------------------

//join
let fruit=['banana','apple','mango','jujube']
let newArr=fruit.join('-') //we can take any separator
console.log(newArr);  //banana-apple-mango-jujube

// ---------------------------------------------------------------------------------

//toString - commma separated value banake deta hai
let b=[3,4,5,6]
let s=b.toString();
console.log(s);


