/* ---------------- Reduce --------------------
reduce() adds or combines all the values in an array into one single value.
it not returns array. it returns only single value.
*/

let l=[2,3,4,5,6]
let total=l.reduce((sum,value)=>sum+value,0) //here we given 0 as initial value for sum variable. and value mein fir jayenge array elements.
console.log(total); //20
