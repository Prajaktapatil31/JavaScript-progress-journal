//Nested Destructuring with Objects in JS

let user={
    userName:'priya',
    userAge:21,
    address:{
        city:'pune',
        state:'maharashtra',
        country:'india'
    }
}

let {address:{city,state}}=user;
console.log(state);    //maharashtra