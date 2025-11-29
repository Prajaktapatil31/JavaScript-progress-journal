// Spread operator (...) 
// when no. of parameters are not fixed (when we don't know how many number of parameters are there)
// answer array mein aata hai

function data(...x){
    console.log(x)
}

data(4,5,3,44,5)  //[ 4, 5, 3, 44, 5 ]