/*
JavaScript Methods :
(2 types hai ) --> kuch methods original array ko change krte hai, kuch methods original array ko change nahi krte


Mutating Methods (Modify the original array):
---------------------------------------------------------

1. push(): Adds one or more elements to the end of an array.

2. pop(): Removes the last element from an array.

3. shift(): Removes the first element from an array.

4. unshift(): Adds one or more elements to the beginning of an array.

5. splice(): Adds, removes, or replaces elements at a specified index.

6. sort(): Sorts the elements of an array in place.

7. reverse(): Reverses the order of elements in an array in place.

8. fill(): Fills all elements of an array from a start index to an end index with a static value.

*/

// ----------------------------------------------------------------

//push
let l = [4,5,6,7,8]
l.push(5)
l.push(99,45)
console.log(l);     
/*
[
  4, 5,  6,  7,
  8, 5, 99, 45
]
*/

// ------------------------------------------------------------------

//pop
l.pop()
console.log(l.pop());
console.log(l);

/*
99
[ 4, 5, 6, 7, 8, 5 ]
*/

// ----------------------------------------------------------

//shift

l.shift()
console.log(l);     //[ 5, 6, 7, 8, 5 ]

// --------------------------------------------------------------

//unshift

l.unshift(1)
console.log(l); //[ 1, 5, 6, 7, 8, 5 ]

// -----------------------------------------------------------------

// splice -  add/delete dono kam krta hai
// arr.splice(position,deleteCount)

l.splice(1,3) //1 se start hokar 3 elements delete karega
console.log(l); //[ 1, 8, 5 ]

let arr=[1,2,3,4,5]
arr.splice(1,2,66,77,88,99); 
console.log(arr);  // --> [1,4,5] and then sare elements add ho jayenge usi position pe --> [1,66,77,88,99,4,5] 

arr.splice(2,0,45) 
console.log(arr);  // [1,66,77,45,88,99,4,5]

// ------------------------------------------------------------------

//sort - sorts values as strings (dictionary order bydefault - like '113'<'2' --> 1 comes before 2)

let m=[1,2,113,4,22,5,52,6]
m.sort()
console.log(m);   // [1,113,2,22,4,5,52,6]

// -----------------------------------------------------------------

//reverse
m.reverse()
console.log(m); // [6,52,5,4,22,2,113,1]

// ----------------------------------------------------------------------

//fill 
let arr2=[1,2,35,6,7,33]
arr2.fill(5)
console.log(arr2);   //[ 5, 5, 5, 5, 5, 5 ]

arr2.fill(10,0,2);  // --> 10 ko fill karo, 0 se start hoke 2-1=1 tk
console.log(arr2);  //[ 10, 10, 5, 5, 5, 5 ]   







