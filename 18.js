//check if a year is Leap Year or not

let y=2025
if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    console.log(`${y} is a Leap Year.`);
}
else {
    console.log(`${y} is not a Leap Year.`);
}

// 2025 is not a Leap Year.