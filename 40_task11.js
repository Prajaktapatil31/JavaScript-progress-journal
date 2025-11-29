//remove duplicate elements elements from array
let arr=[2,3,4,5,2]

let finalArr=[]

for(let x of arr){
    if(!finalArr.includes(x)){
        finalArr.push(x);
    }
}

console.log(finalArr);  //[ 2, 3, 4, 5 ]
