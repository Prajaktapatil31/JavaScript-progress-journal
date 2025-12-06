//factorial program
let f = 1
let facto=(n)=>{
    for(let i=2;i<=n;i++){
        f *= i;
    }
    return f;
}

console.log(facto(3));  //6
