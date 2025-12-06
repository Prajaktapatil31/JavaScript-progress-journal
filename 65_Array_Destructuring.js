// -------------  Array Destructuring -----------------
// in array distruring, nam hm pass krte HTMLDetailsElement.

let colors=["red","blue","orange","pink"]
let [a]=colors;  //ek nam diya to peheli value ko distruture karega
let [fcolor,scolor]=colors;  //yaha 2 nam diye, to first two values ko distrure karega
console.log(a);     //red 
console.log(fcolor,scolor);     //red blue


let n=[32,3,4,1,2,8,7,5,6]
let [,,x,y,z]=n;
console.log(x);     //4