//Lopps in js :-
//Loops are used to execute a piece of code again and again .


//01 For loop :-

 for (let count=1; count <= 5; count++) {
    console.log("apna college");
 }



 //ex -02 
 // (Q) calculate the sum of 1 to 5 numbers .

 let sum = 0;
 for (let i=1; i<=5; i++) {
    sum = sum + i;
 }

 console.log("sum=", sum);


 for (let i=1; i<=5; i++) { // if we use Var rather than (let) then the last number is 6 .
    console.log("i=",i);
 }
 






 //02 Infinite loops :----(never used this bocz its very ...)
 //Infinite loop :- A loop that never ends .

//  for (let i=1; i>=0; i++) {
//     console.log("i=", i);
//  }


//03 . While loop :-

let r = 1;
while (r<=5) {
    console.log("r=",r);
    r++;
}


//04. do-while loop :-
 let z = 20;
 do {
    console.log("Apna college");
    i++;
 } while (z<=10);




// 05. For-of loop (string / arrays)

let str = "javascript";
let size = 0;


for (let a of str) {
    console.log("a=", a);
    size++;
}
console.log("string size=", size); //10


//06. for-in loop (used for objects):-

let student = {
    name: "rashmiranjan shaw",
    age: 20,
    cgpa: 9.7,
    isPass: true
};

for(let k in student) {
    console.log("k=", k , "value=", student [k]);
}


// practice question :- 
//print all even numbers from 0 to 100 .


for (let num = 0; num<=100; num++) {
    if (num%2===0) {
        console.log ("num=", num);
    } 
}




//practice question 02 :-
// create a game where you start with any random game number . Ask the user to keep guesssing the game number until the user enters correct value .   



let gameNum = 25;
let userNum = prompt("Guess the game number: ");
while (userNum != gameNum) {
  userNum = prompt(" you entered the wrong game number. Guess again: ");
}

console.log("congratulation, you Guess the right number ");
