1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function conversion(age,rate=7){
  let dogage = age*rate;
  alert (`your doggie is ${dogage} year old in dog years`);
}
conversion();
```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
function calculateage(age,amount){
 let cal=(amount*365*age);
 return cal
}
alert(calculateage());
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
function conversiontoF(cel){
  let convert=(cel*9/5) + 32;
  return (`${cel}°C is ${convert}°F`);
}
console.log(conversiontoF());

function conversiontoc(fah){
  let convert=(fah - 32) *5/9;
  return (`${fah}°C is ${convert}°F`);
}
console.log(conversiontoc());
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
  let checkAge=age => age>18 ? true :confirm("Did parents allow you ?");
alert(checkAge());
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
  let checkAge=age => age>18 ||confirm("Did parents allow you ?");
alert(checkAge());
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
/// No it work properly
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here
function pow(x,n){
   sum = x**n;
   return sum;
}alert(pow());

// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

// your code goes here
let multi=1;
let sum=0;
let n = +prompt("enter a any number",0);
function add(){
 for(let i=1;i<=n;i++){
  sum +=i;
 }/* alert(sum); */return sum;
}
function mul(){
for (let i=1;i<=n;i++){
multi=multi*i;
}/* alert(multi); */return multi;
}
let task = prompt("enter which operation you want to perform",'');
if (task=="add"){
alert(add());
}else if (task=="mul"){
 alert(mul());
}else{
alert("Enter valid operation");
}
```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
let sum=0
let n = +prompt("enter a any number",0);
function add(){
 for(let i=1;i<=n;i++){
  sum +=i;
 } alert(sum); 
//  return sum;
}add();
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
let sum="";
let n = +prompt("enter a any number",0);
function add(){
 for (i=1;i<=n;i++){
 if (i%5==0 || i%7==0){
 sum +=i;
 }
 } return sum;
}alert(add());
```


8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
function min(a,b){
  if(a>b)
  return b;
  return a;
}
console.log(min(0, 10));
// → 0
function min(a,b){
  if(a>b)
  return b;
  return a;
}
console.log(min(0, -10));
// → -10
```