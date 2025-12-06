/* -------------- Callback Function ----------------

Callback function is a function passed to another function as an argument and executed later.
eg. map, filter, reduce,etc.
*/

function addData(num1,num2){
    return num1+num2;
}

function calculate(num1,num2,callback){
    console.log(num1,num2,callback)                 // 10 20 [Function: addData]
    console.log(num1,num2,callback(num1,num2))      // 10 20 30
}

calculate(10,20,addData)