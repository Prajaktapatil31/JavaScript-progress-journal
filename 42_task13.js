//Reverse an array without using reverse

// shift & pop : to delete (first & last position)
// unshift & push : to add (first & last position)

let arr=[11,22,33,44,55]
let ans=[]

for(let x of arr){
    ans.unshift(x)
}

console.log(ans); [ 55, 44, 33, 22, 11 ]
