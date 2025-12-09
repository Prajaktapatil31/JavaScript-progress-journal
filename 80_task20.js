//find the first student with marks less than 35
let students=[
    { name:'gogi',marks:89},
    { name:'sonu',marks:18},
    { name:'tappu',marks:34},
    { name:'goli',marks:12}
]

let ans = students.find((v)=>v.marks<35)
console.log(ans);   //{ name: 'sonu', marks: 18 }