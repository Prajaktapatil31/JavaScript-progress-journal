//Find common elements between two arrays

let a=[1,2,3,4]
let b=[6,2,5,1]

for(let x of a){
    if(b.includes(x)){
        console.log(x);        
    }
}

/*
1
2
*/
