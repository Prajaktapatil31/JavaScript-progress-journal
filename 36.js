//logical question

let l=[1,2,3,4]
console.log(l);  //[ 1, 2, 3, 4 ]

//ye loop 4 bar nahi chalega kyuki hm isike member ko delete krte ja rahe hai
//l bhi bar bar chota ho raha hai..
for(let x of l){
    l.pop();
}

console.log(l); //[ 1, 2 ]

//Round 1 : [1,2,3]
//Round 2 : [1,2]  ..ab aage data hai hi nahi to aage chalega hi nahi