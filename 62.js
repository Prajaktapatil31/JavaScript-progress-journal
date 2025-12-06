let userName='prajakta' //agr ye nhi likhte to error deta --> userName is not defined
let user={
    userName,
    address:'pune',
    mob:3435353224
}

console.log(userName); //prajakta

let {userName:uname}=user; //object destructure jb kiya, to variable/key ko rename krdiya 
console.log(uname); //prajakta