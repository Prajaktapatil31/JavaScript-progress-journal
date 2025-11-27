/*
 Non-primitive datatype
 --> Object : key-value pairs
 --> Array
*/


let l=[10,20,30,40]
console.log(typeof(l)); //object


let obj={
    name:'prajakta',
    lname:'patil'
}
console.log(typeof(obj));   //object


function showData(){

}

console.log(showData);  //[Function: showData]
console.log(typeof(showData));  //function


// + ko chodke sabhi operators ka implicit conversion hoga(number hi hone chahiye dono)
console.log(2*'2'); //4  --> implicit type conversion - js automatically converts
console.log(2-'2'); //0  --> implicit type conversion
console.log(2/'2'); //1  --> implicit type conversion
console.log('2'+3); //23

console.log('helo'-2); //NaN --> jb mathematical calculations fail ho jati hai tb NaN deta hai
console.log('hi'*'2'); //NaN


//user se value lene ke liye form hota hai,but will see it later


// take value from user
let age=prompt("enter your age: ") //prompt hamesha first time value string mein hi deta hai
console.log(age);
console.log(typeof(age));   //string



//Explicit Type conversio

let a=parseInt(prompt("enter your age: "))
console.log(typeof(a));     //number

//parseFloat   //number

/* 
Number nam ka function dono chijoko convert krneka kam krega-float as well integer
as a float banake use krlega
as an integer banake use krlega
*/
let height=Number(prompt("enter your heigth: "))
console.log(typeof(height));        //number
