let user={
    'userEmail':'prajakta123@gmail.com',
    'phoneNo':5757575775,
    'address':'mumbai',
    1:20
}

console.log(user.address);      //mumbai
console.log(user['address']);   //mumbai
// console.log(user.1); --> it will give error. number key hai to yese access nahi kr sakte.
console.log(user[1]); //20

//add
user.age=20
user['course']='B.Tech'
console.log(user.age,user.course);  //20 B.Tech

//update
user.userEmail='abc@gmail.com'
console.log(user.userEmail);   //abc@gmail.com

//delete
delete user.course
delete user.address
console.log(user);  //{ '1': 20, userEmail: 'abc@gmail.com', phoneNo: 5757575775, age: 20 }
