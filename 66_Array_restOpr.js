//---------- Rest Operator in Array -------------
//we do destruring, then remaining data we can get by rest operator
// array ke form mein rest data nikalke dega

let arr=[9,7,4,8,3,45,9]
let [a,...restData]=arr;
console.log(a,restData);      //9 [ 7, 4, 8, 3, 45, 9 ]