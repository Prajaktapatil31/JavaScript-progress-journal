/* 
Operators in JavaScript

    --> arithmetic :    + - * / % ++ -- **(for power) 
    --> assignment :    = += -= *= /= %=
    --> logical    :    && || !
    --> biwise     :
    --> comparison :    == === != !== < > <= >=
    --> string operator : + concatention/append to string
    --> ternary operator: shorthand for if..else 
*/



// ---------------  Arithmetic Operators  -----------------

console.log('Arithmetic Operators');
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
let i=7
console.log(i++);
console.log(i--);
console.log(2**3);

/*
    5
    -1
    6
    0.6666666666666666
    2
    7
    8
    8
*/


// ---------------------  Assignment Operators  ------------------

console.log('Assignment Operators');
let n=10
console.log(n);
console.log(n+=5);
console.log(n-=5);
console.log(n*=5);
console.log(n/=5);

/*
    Assignment Operators
    10
    15
    10
    50
    10
*/


// ---------------------  Logical Operators  ------------------
// if username and password dono true, then only login

console.log('Logical Operators');
let a=5
let b=4
console.log(a>5 && b>2);
console.log(a>5 && b>2);
console.log(a>5 && b>2);
console.log(!(20!=20)); //true


/*
    Logical Operators
    false
    false
    false
*/


// ----------------------  Comparison Operators ------------------------

let m=20
let o=10
console.log('Comparison Operators');
console.log(m!=5);
console.log(20=='20');  // true --> compares only value not datatype
console.log(o==='10'); // false --> compare value as well as datatype
console.log(m<4);
console.log(m!=='20'); 
console.log(m>=1);

/*
    Comparison Operators
    false
    true
    false
    false
    true
    true
*/

console.log((54>4)+3); // 4  --> true+3 = 1+3 = 4   
let p=10
let q=20
let r=5
console.log(p<q<r);     // true  --> 10<20 = true -->  true<5 = 1<5 = true 



// -----------------  Bitwise Operators -----------------

console.log('Bitwise Operators');
console.log(1 & 2);
console.log(1 | 8);

/*
    Bitwise Operators
    0
    9
*/


// ----------------------   string operator   --------------------

console.log("hello"+" world!"); //hello world!

let str='hello';
str+=' ji'
console.log(str); //hello ji

let x=5
x+=2
console.log(x); //7

let s=10
s+='hi'
console.log(s);  //10hi

// ----------------  ternary operator ------------------------

let age=20
// let age = Number(prompt("Enter your age : "))
let result = (age>=18)? "adult":"minor"
console.log(result);  //adult
