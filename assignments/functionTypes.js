// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */


//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */// function decleration
function add(a=0,b=1){
let sum=a+b;
return sum;
}add();
// function expression
 let add =function (a=0,b=1){
  let sum=a+b;
  return sum;
  }
  add();
  // Arrow Function
let add = (a=0,b=1) =>{
  return a+b;
}
add();
// Arrow Without bracket
let add=a => a+1;
add();
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */function sub(a=0,b=1){
let sum=a-b;
return sum;
}sub();
// function expression
 let sub =function (a=0,b=1){
  let sum=a-b;
  return sum;
  }
  sub();
  // Arrow Function
let sub = (a=0,b=1) =>{
  return a-b;
}
sub();
// Arrow Without bracket
let sub=a => a-1;
sub();

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */// function decleration
function add(a=0,b=0){
  let sum=a+b;
  return sum;
  }add();
  // function expression
   let add =function (a=0,b=0){
    let sum=a+b;
    return sum;
    }
    add();
    // Arrow Function
  let add = (a=0,b=0) =>{
    return a+b;
  }
  add();
  // Arrow Without bracket
  let add=(a=0,b=0) => a+b;
  add();

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */ // function decelration
 function sub(a=0,b=0){
  let sum=a-b;
  return sum;
  }sub();
  // function expression
   let sub =function (a=0,b=0){
    let sum=a-b;
    return sum;
    }
    sub();
    // Arrow Function
  let sub = (a=0,b=0) =>{
    return a-b;
  }
  sub();
  // Arrow Without bracket
  let sub=(a=0,b=0) => a-b;
  sub();
  
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */// function decleration
function mul(a=0,b=0){
  let sum=a*b;
  return sum;
  }mul();
  // function expression
   let mul =function (a=0,b=0){
    let sum=a*b;
    return sum;
    }
    mul();
    // Arrow Function
  let mul = (a=0,b=0) =>{
    return a*b;
  }
  mul();
  // Arrow Without bracket
  let mul=(a=0,b=0) => a*b;
  mul();

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */// function decleration
function div(a=0,b=0){
  let sum=a/b;
  return sum;
  }div();
  // function expression
   let div=function (a=0,b=0){
    let sum=a/b;
    return sum;
    }
    div();
    // Arrow Function
  let div= (a=0,b=0) =>{
    return a/b;
  }
  div();
  // Arrow Without bracket
  let div=(a=0,b=0) => a/b;
  div();

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */// function decleration
function mul(a=0){
  let sum=a*a;
  return sum;
  }mul();
  // function expression
   let mul =function (a=0){
    let sum=a*a;
    return sum;
    }
    mul();
    // Arrow Function
  let mul = (a=0) =>{
    return a*a;
  }
  mul();
  // Arrow Without bracket
  let mul= a => a*a;
  mul();

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Decleration
  function add(a=0,b=0){
  let sum =a+b;
  return sum;
  }
  function sub(a=0,b=0){
  let sum =a-b;
  return sum;
  }
  function mul(a=0,b=0){
  let sum =a*b;
  return sum;
  }
  function div(a=0,b=0){
  let sum =a/b;
  return sum;
  }
  let operation=prompt("enter your operation","");
  if(operation=="add"){
  alert(add(10,5));
  }else if(operation=="sub"){
  alert(sub(10,5));
  }else if(operation=="mul"){
  alert(mul(10,5));
  }else if(operation=="div"){
  alert(div(10,5));
  }else{
  alert("enter valid operation");
  }
//expression
  let add=function (a=0,b=0){
  let sum =a+b;
  return sum;
  }
  let sub=function(a=0,b=0){
  let sum =a-b;
  return sum;
  }
  let mul=function(a=0,b=0){
  let sum =a*b;
  return sum;
  }
  let div=function (a=0,b=0){
  let sum =a/b;
  return sum;
  }
  let operation=prompt("enter your operation","");
  if(operation=="add"){
  alert(add(10,5));
  }else if(operation=="sub"){
  alert(sub(10,5));
  }else if(operation=="mul"){
  alert(mul(10,5));
  }else if(operation=="div"){
  alert(div(10,5));
  }else{
  alert("enter valid operation");
  }
  //arrow function
  let add=(a=0 ,b = 0) => {
    return a+b;
    }
    let sub=(a=0 ,b = 0) => {
     return a-b;
     }
    let mul=(a=0 ,b = 0) => {
    return a*b;
    }
    let div=(a=0 ,b = 0) => {
    return a/b;
    }
    let operation=prompt("enter your operation","");
    if(operation=="add"){
    alert(add(10,5));
    }else if(operation=="sub"){
    alert(sub(10,5));
    }else if(operation=="mul"){
    alert(mul(10,5));
    }else if(operation=="div"){
    alert(div(10,5));
    }else{
    alert("enter valid operation");
    }
    //arrow without bracket
    let add=(a=0 ,b = 0) => a+b;
    let sub=(a=0 ,b = 0) => a-b;
    let mul=(a=0 ,b = 0) => a*b;
    let div=(a=0 ,b = 0) => a/b;
    let operation=prompt("enter your operation","");
    if(operation=="add"){
    alert(add(10,5));
    }else if(operation=="sub"){
    alert(sub(10,5));
    }else if(operation=="mul"){
    alert(mul(10,5));
    }else if(operation=="div"){
    alert(div(10,5));
    }else{
    alert("enter valid operation");
    }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */ //function decleration
 function compare(a=0,b=0){
  if(a>b)
  return true;
  return false;
  
 }
 alert(compare());
 //function expression
let compare= function(a=0,b=0){
  if(a>b)
  return true;
  return false; 
 }
 alert(compare());
 //arrow function
 let compare=(a=0,b=0) =>{
  return (a>b ? true:false);
  }
  alert(compare())
  // arrow function 
  let compare=(a=0,b=0) => a>b ? true :false;
  alert(compare());

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 *///function decleration
 function compare(a=0,b=0){
  if(a<b)
  return true;
  return false;
  
 }
 alert(compare());
 //function expression
let compare= function(a=0,b=0){
  if(a<b)
  return true;
  return false; 
 }
 alert(compare());
 //arrow function
 let compare=(a=0,b=0) =>{
  return (a<b ? true:false);
  }
  alert(compare())
  // arrow function 
  let compare=(a=0,b=0) => a<b ? true :false;
  alert(compare());

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 *///function decleration
 function compare(a=0,b=0){
  if(a==b)
  return true;
  return false;
  
 }
 alert(compare());
 //function expression
let compare= function(a=0,b=0){
  if(a==b)
  return true;
  return false; 
 }
 alert(compare());
 //arrow function
 let compare=(a=0,b=0) =>{
  return (a==b ? true:false);
  }
  alert(compare())
  // arrow function 
  let compare=(a=0,b=0) => a==b ? true :false;
  alert(compare());

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */ //function decleration
 function min(a,b){
  if(a>b)
  return b;
  return a;
}
alert(min());
// function expression
let min =function (a,b){
  if(a>b)
  return b;
  return a;
}
alert(min());
// arrow function
let min =(a,b) => {
  return (a>b ? b:a);
}
alert(min());
// arrow without bracket
let min = (a,b) => a>b ? b:a;
alert(min());
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 *///function decleration
 function max(a,b){
  if(a<b)
  return b;
  return a;
}
alert(max());
// function expression
let max=function (a,b){
  if(a<b)
  return b;
  return a;
}
alert(max());
// arrow function
let max =(a,b) => {
  return (a<b ? b:a);
}
alert(max());
// arrow without bracket
let max = (a,b) => a<b ? b:a;
alert(max());

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */ //function  decleration
 function even(a=0){
  if(a%2==0)
  return  "It is even";
  return "It is odd";
 }
 alert(even());
 // function expression
 let even =function(a=0){
  if(a%2==0)
  return  "It is even";
  return "It is odd";
 }
 alert(even());
 // arrow function
 let even = a =>{
   return(a%2==0 ? "It is even" : "It is odd")
 }
 alert(even());
 // arrow function without bracket
 let even = a=> (a%2==0) ? "It is even" : "It is odd";
 alert (even()); 

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 *///function  decleration
 function odd(a=0){
  if(a%2!=0)
  return  "It is odd";
  return "It is even";
 }
 alert(odd());
 // function expression
 let odd =function(a=0){
  if(a%2!=0)
  return  "It is odd";
  return "It is even";
 }
 alert(odd());
 // arrow function
 let odd = a =>{
   return(a%2!=0 ? "It is odd" : "It is even")
 }
 alert(odd());
 // arrow function without bracket
 let odd = a=> (a%2!=0) ? "It is odd" : "It is even";
 alert (odd());

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */ // function decleration
 function score(a= 0) {
  switch(true){
    case(a>= 90 && a<= 100) :
      alert("A");
      break;
    case(a>= 80 && a<= 89) :
      alert("B");
      break;
    case(a>= 70 && a<= 79) :
      alert("C");
      break;
    case(a>= 60 && a<= 69) :
      alert("D");
      break;
    case(a>= 0 && a<= 59) :
      alert("F");
      break;
    default:
       alert("Enter valid score")
     
  }
}
score();
 // function expression
 let score =function(a= 0) {
  switch(true){
    case(a>= 90 && a<= 100) :
      alert("A");
      break;
    case(a>= 80 && a<= 89) :
      alert("B");
      break;
    case(a>= 70 && a<= 79) :
      alert("C");
      break;
    case(a>= 60 && a<= 69) :
      alert("D");
      break;
    case(a>= 0 && a<= 59) :
      alert("F");
      break;
    default:
       alert("Enter valid score")
     
  }
}
score();
 
 // arrow function 
 let score = a => {
  switch(true){
    case(a>= 90 && a<= 100) :
      alert("A");
      break;
    case(a>= 80 && a<= 89) :
      alert("B");
      break;
    case(a>= 70 && a<= 79) :
      alert("C");
      break;
    case(a>= 60 && a<= 69) :
      alert("D");
      break;
    case(a>= 0 && a<= 59) :
      alert("F");
      break;
    default:
        alert("Enter valid score")
      
  }
}
 alert(score());

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */ // function decleration
 function msg(a,b){
  let name = a+" "+b;
  return name;
  }
  msg("","");
  // function expression
  let msg =function (a,b){
    let name = a+" "+b;
    return name;
    }
    msg("","");
// arrow function
let msg = (a,b)=> {
  return (a+" "+b);
}
msg();
// arrow without bracket
let msg = (a,b)=>a+" "+b;
msg();