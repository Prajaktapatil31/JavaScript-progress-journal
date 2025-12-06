// how do u extract city from this object?
const user={
    name:'ram',
    address:{
        city:'pune'
    }
};

let {address:{city}}=user;
console.log(city);      //pune