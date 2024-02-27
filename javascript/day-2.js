/*
  JavaScript Day 2

    - Identifiers - set of Rules to create [naming] a variable
      var firstName = "apple";
      - Valid Identifiers
        - firstName - camelCase ✅
        - $firstName - $ ✅
        - _firstName - _ ✅
        - firstname12 - ✅

      - Invalid Identifiers
        - 12firstname - ❌
        - first-name - ❌
        - first 12 - ❌
        - keyword if - ❌

    - JavaScript 
      - Primitive Data Types
          - Number
          - String
          - Boolean
          - Null
          - Undefined

      - Non-Primitive Data Types
          - Object
          - Array

      - Array 
        - Array is a collection of elements 

        - How to Create an Array ?
          - var arr = [1,2,3,4,5,6,7,8,9,10.11,12,13,14,15]; 
          - var arr = ["apple",1,2,true];
        - How to access an element from an Array ?
          - arr[0] -> 1 // index 0 
        - How to Modify an element from an Array ?
          - arr[0] = 100;
        - How Find the Length of an Array ?
          - arr.length -> 10 // length of the array Starts from 1
        
        - Array Methods
          - push() - add an element to the end of the array

          - pop() - remove an element from the end of the array
      
      - Object
        - Object is a collection of key value pairs Syntax {key:value,key:value}

      - How to Create an Object ?
        - var obj = {name:"apple",price:100};

      - How to access an element from an Object ?
        1. Dot Notation -> . 
        2. Bracket Notation -> []
      
      - How to Modify an element from an Object ?
        1. Dot Notation
        2. Bracket Notation
      

*/

let arr = [1, 2, 3, 4, 5, true, 7, 8, 9, 10, 11, 12, 13, 14];
var arr2 = ["apple", 1, 2, true];
//index->// 0 1 2 3 4 5 6 7 8 9
console.log(arr);
console.log("Before Modify", arr[2]);
// modify
arr[2] = 100;
console.log("After Modify", arr[2]);
arr[5] = 6;
console.log(arr);
console.log("Length:", arr.length);

// push() - add an element to the end of the array

arr.push(true);
arr2.push("orange");
console.log(arr2);

// pop() - remove an element from the end of the array
arr.pop();
console.log(arr);

// Object
// var arr2 = ["apple", 1, 2, true];
let obj = { name: "apple", price: 100, name: "orange", price: 200 };
console.log(obj);

// How to access an element from an Object ?

let person = { firstname: "Ram", lastname: "Kumar", age: 20 };

// 1. Dot Notation --> .
console.log("Dot Notation:", person.firstname);
console.log("Dot Notation:", person.lastname);
console.log("Dot Notation:", person.age);

// 2. Bracket Notation --> key as a string []
console.log("Bracket Notation:", person["firstname"]);
console.log("Bracket Notation:", person["lastname"]);

// Accessing a key which is not present or [Non Existent] in the object
console.log("Dot Notation:", person.gender); // undefined

console.log("Bracket Notation:", person["gender"]); // undefined

// When Variable is used to access an element from an Object
// Variable should contain the key
let key = "firstname";
console.log("Bracket Notation:", person[key]);

// How to Modify an element from an Object ?

// 1. Dot Notation
person.lastname = "g";
person.firstname = "venkat";
person.age = 50;
console.log(person);

// 2. Bracket Notation
person["lastname"] = "kumar";
person["firstname"] = "Ram";

console.log(person);

// Object Destructuring or Destructuring on Fly
let person2 = { firstname: "Hari", lastname: "sam", age: 70 };
let { firstname, lastname, age, gender } = person2;

console.log(firstname, lastname, age, gender); // undefined 

// Property Shorthand

// - {key:value} = Property or Object
// - key should be unique
// - value can be anything

// What all Value can be in object 

// 1. String as an Value to an object
// 2. Number as an Value to an object
// 3. Added  Boolean as an Value to an object

let person3 = { 
  firstname : "Hari",
  lastname  : "sam",
  age : 50,
  habits : true
}

// 4. Object as an Value to an object
// 5. Array as an Value to an object
// 6. Function as an Value to an object

let person4 = { 
  firstname : "Hari",
  lastname  : "sam",
  age : 50,
  habits : true,
  habits_obj : {
    hobby1 : "cricket",
    hobby2 : "football"
  },
  car : ["Audi","BMW","Benz"],
  run : function(){
    console.log("I am running");
    console.log("I am running");
  }
}

// How to access an element from an Object ?
// 1. Dot Notation

// - Accessing String
console.log("------------------");
console.log(person4.firstname);
console.log(person4.lastname);
// - Accessing Number
console.log(person4.age);
// - Accessing Boolean
console.log(person4.habits);
// - Accessing Object 
console.log(person4.habits_obj);
console.log(person4.habits_obj.hobby1);
console.log(person4.habits_obj.hobby2);
// - Accessing Array
console.log(person4.car);
console.log(person4.car[0]);
console.log(person4.car[1]);

// - Accessing Function
console.log(person4.run());

// 2. Bracket Notation

// = -> Assignment

// Loose Equality [ Will not Check the Data Type ] 
// -> LHS == RHS 5 == 5  
// -> 5 === "5" true

// Strict Equality [ Will Check the Data Type ]
// ===  
// -> LHS == RHS 5 == 5  
// -> 5 === "5" false

if(5 === "5"){
  console.log("Equal");
}else {
  console.log("Not Equal");
}