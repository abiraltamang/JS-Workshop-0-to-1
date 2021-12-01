// loops in javascript

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);



// for loop
// let n=prompt("Enter number:");
// console.log(typeof n)
// fact=1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log("Factorial of 5 is "+fact);

// let a=1;
// for (;;){
//     if (a==4){
//         break;
//     }
//     console.log(a);
//     a++;
// }


// while loop

// let i=1;
// while (i<=10){
//     console.log(i);
//     i++;
// }



// do while 
// let i=1;
// do {
//     console.log(i);
//     i++;
// } while (i<=5);




// switch case

// eg 1
// let festival=prompt("Enter festival!");

// switch (festival) {
//     case 'tihar':
//         console.log("Tihar got printed");
//         break;
//     case 'chaath':
//         console.log("Chaath got printed");
//         break;
//     case 'Eid':
//         console.log("Eid got printed");
//         break;
//     case 'holi':
//         console.log("Holi got printed");
//         break;
//     case 'dashain':
//         console.log("dashain got printed");
//         break;

//     default:
//         console.log("oops ! festival not found.")
//         break;
// }


// eg 2

// let num1=prompt("Enter 1st number:");
// num1=parseInt(num1);
// let num2=prompt("Enter 2nd number:");
// num2=parseInt(num2);
// let choice=prompt("Enter choice:");
// switch (choice) {
//     case 'add':
//         console.log(num1+num2);
//         break;
//     case 'sub':
//         console.log(num1-num2);
//         break;
//     case 'mul':
//         console.log(num1*num2);
//         break;
//     case 'div':
//         console.log(num1/num2);
//         break;

//     default:
//         break;
// }


// Nested if 


if (true){
    var continueTimer=true;
    if (continueTimer){
        console.log("Timer has been started!");
    }
    else{
        console.log("Printed");
    }
}
console.log(continueTimer);
