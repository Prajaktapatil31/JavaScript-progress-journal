//filter out users whose age is greater than 18.
let users=[
    {
        user_name:'priya',
        age:21
    },
    {
        user_name:'riya',
        age:12
    },
    {
        user_name:'diya',
        age:14
    },
    {
        user_name:'siya',
        age:23
    },
    {
        user_name:'jiya',
        age:27
    },
]

let ans = users.filter((v)=> v.age>=18)
console.log(ans);
/*
    [
        { user_name: 'priya', age: 21 },
        { user_name: 'siya', age: 23 },
        { user_name: 'jiya', age: 27 }
    ]
*/