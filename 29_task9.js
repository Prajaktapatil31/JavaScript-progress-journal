//WAP to reverse a number using while loop

let n=1234;
let revNum=0

while(n>0){
    let last = n%10;
    revNum=revNum*10 +last;
    n=parseInt(n/10);    
}

console.log(revNum);  //4321