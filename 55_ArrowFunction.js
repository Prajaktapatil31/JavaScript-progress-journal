/* -------------------- Arrow Function ---------------------

Arrow Function is a shorter syntax of regular functions.
It is a part of Ecmascript(ES6)
we use here => 
*/

let greet=()=>{
    console.log('welcome');     //welcome
}
greet()     


let addData=(a,b)=>{
    return a+b;
}
console.log(addData(5,10));     //15


//ek parameter ho to bracket () lagane ki jarurat nahi
let square=x=>x*x
console.log(square(3));     //9


/* Implicit Return  - more shorter
--> agr hmne {} nhi lagaya, to bhi function execute hoga bcos arrow function by default return hi krta hai.
    (agr bracket lagaya to return likhna padega.)
*/
let sub=(n,m)=> n-m
console.log(sub(4,2));  //2

//No parameters
let show=()=>console.log('Arrow function with no parameters.');
show()
