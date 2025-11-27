/*
Online Shopping Discount Logic
amount > 1000 : 20% discount
amount > 500 : 10% discount
*/

// let amount = Number(prompt("Enter Total Amount : "))
let amount=566

if (amount > 1000) {
    console.log('20% discount');

}
else if (amount > 500) {
    console.log('10% discount');

}
else {
    console.log('No discount!');

}

// 10% discount