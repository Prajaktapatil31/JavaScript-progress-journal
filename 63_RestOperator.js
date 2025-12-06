/* --------------------- Rest Operator --------------------
the rest operator(...) collects all the other properties that weren't picked.
it collects all the remaining values after destructuring and put it into object
*/

let user={
    userName:'priya',
    userAge:21,
    address:'kyoto',
    mob:8787878787
}

let {userAge,...others}=user; //... ke bad kuch bhi name likh sakte hai as a variable
console.log(others)    //{ userName: 'priya', address: 'kyoto', mob: 8787878787 }
console.log(typeof(others));  //object