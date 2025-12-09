/* ------------------- filter() --------------------
filter() is a JS method that creates a new array with all elements tht pass a condition in a callback function.
it does not modify the original array. condition ke hisab se array ka size km hoga(result array ka). */


let ages = [12,14,16,18,20]
let adults = ages.filter(age => age>=18)
console.log(adults);    //[ 18, 20 ]


//filter even numbers from array
let l=[1,2,3,4,5]
let l2=l.filter(x => x % 2 == 0)
console.log(l2);    //[ 2, 4 ]


//filter numbers divisible by 5 from array
let arr=[23,12,90,34,20,35,1,2]
let ans=arr.filter((v)=>{
    if(v%5==0){
        return v
    }
})

console.log(ans);   //[ 90, 20, 35 ]

// or 
//let ans=arr.filter(v=> v%5==0)
//console.log(ans)