//prime number or not

// let n=parseInt(prompt("enter the number"))

let n = 5
let ans = true
for (let i = 2; i < n/2; i++) {
    if (n % i == 0) {
        ans = false;
        break;
    }
}

if (ans) {
    console.log(`${n} is Prime Number`);
}
else {
    console.log(`${n} is Non-prime Number`);
}

// 5 is Prime Number