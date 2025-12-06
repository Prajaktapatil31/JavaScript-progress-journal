//Count vowels in a String
let str = 'welcome'
let vowels = 'aeiouAEIOU'
let count = 0;
for(let i=0;i<str.length;i++){
    if(vowels.includes(str.charAt(i))){
        count++;
    }
}
console.log(count);  //3

// --------------------------------------------
// using arrow function 
let c=0;
let cntVowels=(s)=>{
    for(let x of s){
        if(vowels.includes(x)){
            c++;
        }
    }
}

cntVowels('hello STUDENTS')
console.log(c);   //4
