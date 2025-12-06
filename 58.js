//count the number of words in a sentence
function check(s){
    return s.split(' ').length;
}

console.log(check('hello students! How are you?')); //5
//s.split() se string array mein convert ho jati hai

// ----------------------------------------------------------

//count the number of words in a sentence
let sentence='my name is anthony gonsalvis';
let count=1;

for(let x of sentence){
    if(x==' '){
        count++;
    }

}

console.log(count);     //5