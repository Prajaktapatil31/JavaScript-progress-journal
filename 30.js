/*
Print pyramid pattern

1
2 3
4 5 6 
7 8 9 10
*/

document.write("pyramid pattern <br>")
let n=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        document.write(n++ +" ")
    }
    document.write("<br>")
}

/*

1
2 3
4 5 6 
7 8 9 10

*/
