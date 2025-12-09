/* ------- Array Higher-Order Function in JS ------
HOF take a callback as an argument
    --> Map
    --> Filter
    --> Reduce
    --> Find
*/


/*----------  Map ---------------
map() is a javascript method that returns a new array by transforming each element of an existing array using a callback function.
it does not modify the original array. result array size will be same as original array. */


let l=[10,20,30,40]
let l2 = l.map((value,index)=>{
    return value+=5;
})
// {} used, hence need to return

console.log(l2);    //[ 15, 25, 35, 45 ]
console.log(l);     //[ 10, 20, 30, 40 ]


//{} not used, hence no need to return. bydefault arrow function will return it
let arr=l.map((v)=> v*=2)
console.log(arr);   //[ 20, 40, 60, 80 ]


//alg se function banake bhi callback map ko de sakte hai. like square is callback function here
let n=[1,2,3,4]
let square = (v)=> v**2  //arrow function
let sqArr = n.map(square)
console.log(sqArr);     //[ 1, 4, 9, 16 ]


let g=n.map((x)=>x)
console.log(g);    //[ 1, 2, 3, 4 ]