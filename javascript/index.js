
console.log("Hello World");

// variables - containers that store values - int , string , bol [true , false] , float , double , char

// var, let, const


let name = "John Doe";
let number = 123;
let bool = true;

// var - global scope
// var name = 'John Doe';
// var number = 123;

// console.log("bar",name);
// console.log(number);

// var num1 = 1
// var num2 = 2

// console.log(num1 + num2);

// let - block level scope
// let name2 = 'John Doe';
// console.log("let:",name2);

// {
//     let name5 = 'car';
//     // var name6 = 'bike';
//     console.log("let:",name5);
//     // console.log("var inside:",name6);
// }
// console.log("var outside:",name6);

// console.log("let outside:",name5);

// const - constant - block level scope
// const a = 10;
// a = 20;

// console.log(a);

/* 
Line 1 
Line 2
Line 3
*/

// var a = 10;
// console.log(a);

// operators - + , - , * , / , % , ++ , -- , += , -= , *= , /= , %=

let sum = 10 + 20;
let sub = 20 - 10;
let mul = 10 * 20;
let div = 20 / 10;
let mod = 20 % 10;

console.log(sum, sub, mul, div, mod);
let inc = 10;
let y = ++inc;
console.log("inc:", y);
let dec = 10;
dec--;
console.log("dec:", dec);

console.log("inc:", y);

// console.log(sum,sub,mul,div,mod,inc,dec);

// built in functions - alert , typeof , parseInt , parseFloat , random , Math
let a = "20";
console.log(typeof(sum));
console.log(typeof(a));
console.log(typeof(10.5));
console.log(typeof(true));
console.log("------------------");
// string - number
console.log(typeof(a));

const b = parseInt(a);

console.log(typeof b);
console.log(b);

console.log("------------------");
console.log(Math.random()); // 0 - 1 value
console.log(Math.ceil(10.5)); // 10.5 -> 11

// functions - block of code that can be reused

// code 1 - 10 lines of code using agian and again - function

// function - keyword'
//- 5  way to create a function

// 1. function declaration
function hello() {
  console.log("function : Hello World");
  console.log("function : Hello World");
  console.log("function : Hello World");
}

hello();

function add(a, b) {
  // let a = 10;
  // let b = 20;
  // let c = a + b;
  console.log("add:", a + b);
}

hello();
let apples = "apple";

hello();
function apple() {
  console.log("apple", apples);
}

function area(l, b) {
  var area = l * b;
  console.log("---area---:", area);
}

area(10, 20);

add(2, 3);

apple();

let value = "red";
if (value === 10) {
  console.log("value is 10");
} else {
  console.log("value is not 10");
}

if (value === "red") {
  console.log("Stop");
}
if (value === "green") {
  console.log("Go");
}

// for loop - Repetition of code

// initilization , condition , increment / decrement
// to print upto 10
for (let i = 0; i < 10; i++) { 
  console.log(i);
}

