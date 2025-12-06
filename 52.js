// Tax calculator
function taxCal(price){
    return price*0.10;
}

let productPrice = 50000

let totalAmount = taxCal(productPrice) + productPrice;
console.log(totalAmount);

//return ke bad koi bhi line nhi chalati
// console.log(Number("67")); //67