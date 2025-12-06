/* ---------------- Destructuring ---------------------
Pull out properties into variables.
property ko as a variable banake access karenge.
*/

let user={
    userName:'priya',
    userEmail:'priya@gmail.com',
    course:'Btech',
    address:'pune',
    mob:3435353224
}

let {userEmail}=user;   
console.log(userEmail); //priya@gmail.com //userEmail as a variable use hone lg jayega

let {userName,address}=user;
console.log(userName,address); // priya pune