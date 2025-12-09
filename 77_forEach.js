/* ---------------- forEach -------------------
forEach() runs a function once for every element in an array, but does not return anything. 
it is used to print array elements. */

let users=[
    {
        user_name:'jiya',
        age:21
    },
    {
        user_name:'riya',
        age:12
    },
    {
        user_name:'diya',
        age:14
    }
]

users.forEach((x,i)=>{
    console.log(x,i,x.user_name);    
})

/*
    { user_name: 'jiya', age: 21 } 0 jiya
    { user_name: 'riya', age: 12 } 1 riya
    { user_name: 'diya', age: 14 } 2 diya
*/