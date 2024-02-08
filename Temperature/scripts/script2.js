//functions

let counter = 0;

//1) creating the function
function increase(){ 
    counter++;
    console.log(counter);
} 
function decrease(){ 
    counter--;
    console.log(counter);
} 
//2) call/run/execute the function
function sayHi(){ 
    let userName=prompt("Enter your name");

    console.log("Welcome...." + userName) 
} 
function multiByThree(){ 
    //1) get the number from a prompt
    let number = prompt("Enter the number: ");
    //2) Multi the number by 3
    let result = number*3;
    //3) display the result on the console
    document.getElementById("Total").innerHTML=result;
} 
function addTwoNumbers(){ 
    let number1=prompt("Enter your first number");
    console.log(number1);
    let number2=prompt("Enter your second number");
    console.log(number2);
    let result=parseInt(number1)+ parseInt(number2);
    console.log(result);
} 