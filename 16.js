/*
Coditional statements
    --> if..else
    --> nested if..else  -multiple conditions can be checked in sequence
    --> switch case -when we know fix value condition
*/


let age=15
if(age>=18){
    console.log("you are eligible to vote");    
}
else if(age<=0){
    console.log('invalid age');
}
else{
    console.log("not eligible to vote");
}



let signal='yellow'
switch(signal){
    case 'red','R':console.log('stop'); break;
    case 'green':console.log('go'); break;
    case 'yellow':console.log('ready'); break;
    default : console.log('invalid light');   
}

/*

not eligible to vote
ready

*/