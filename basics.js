/* 

TYPES OF VARIABLES: Var, Let, Const 

VAR: 
- Generally avoided but still useful sometimes (Let and const were introduced in ES6 and are preferred)
- FUNCTION SCOPE - they are still accesible throughout the function in which they are declared 
- Can be re-declared and updated in the same scope without producing an error 
- Subject to HOISTING - they are moved to the top of the function or global scope 

LET: Let us re-define the value 
- Declare block-scoped variables -> block-scoped variables are only accessible within the block in which they are declared
- Cannot be re-declared within the same scope 
- Can be re-assigned 
- Not submject to hoisting - they are not accessible before their declarations in the code 

CONST: CONSTANT => STAYS THE SAME 
- Block-scoped variables that CANNOT be re-assigned 
- Constant must be assigned a value when declared and this value cannot change later
- Not hoisted 
*/

// Variable declaration and assignment 

//  VAR - hoisting 
// console.log(ourName)
var ourName = "Coding temple";


// LET - re-define 
let greeting = "Hello";
console.log(greeting);
greeting = "Go away";
console.log(greeting);


// CONST - constant 
const PI = 3.14; 
console.log(PI); 

// PI = 5.44;
// console.log(PI);



/* 
DATA TYPES
- Strings: text enclosed in single or double quotes
- Numbers: Numeric values, including integers and floating-point number 
- Booleans: true or false (lower case)
- Arrays: Ordered collections of data 
- Objects: Key-value pairs representing complex data structures

*/

// Data types 
let personName = "John"; // String 
let numCats = 30; // Number
let isHappy = true; // Boolean
let likedFruits = ["apple", "banana", "orange"] // Array
let personComplete = { name:"Alice", age:25 } // Object 

/* 

Javascript determines the data type DYNAMICALLY - the data type of a variable is determined at runtime 

PRIMITIVE DATA TYPES 
- string
- number
- boolean
- undefined: represents an undefined value 
- null: represents an empty value 
- symbol: a unique value 

COMPLEX DATA TYPES
- Array
- Object type
- Function data type 
*/

// OBJECT DATA TYPE: Represents complex data structure. A collection of key-value pairs where keys are strings 
// and values can be of ANY data type.
let alice = {name: "Alice", age: 25};

// ARRAY DATA TYPE: A subtype of object data 
// Ordered collection of data. Each element in an array is assigned a unique index string starting from 0. 
// It's variables are recognized as OBJECTS 
let numbers = [1, 2, 3, 4, 5]

// FUNCTION DATA TYPE: A subtype of object data type
// Represents a reusable block of code that can be executed multiple times 
// The variables data types are recognized as FUNCTION

function greet(name){
  console.log("Hello, " + name);  
}
greet("Alice"); 



/* 

OPERATORS: Used to perform operations on variables and values.

- Arithmetic Operators: +, -, *, /, %
  The % operator is used for finding the remainder of a division operation (also known as the modulo operator).
- Assignment Operators: =, +=, -=, *=, /=, %=
- Comparison Operators: ==, ===, !=, !==, >, <, >=, <= 
  Strict versus loose quality -> 
    The == operator checks if two values are equal in value, but it performs type coercion (We will get more into this) if the types are different.
    The === operator checks if two values are equal in both value and type.
    The !== operator checks if two values are not equal in value or type.
- Logical Operators: &&, ||, !
  The && (logical AND) operator returns true if both operands are true.
  The || (logical OR) operator returns true if at least one of the operands is true.
  The ! (logical NOT) operator returns the opposite of the operand.
*/

/* TRUTH TREE
  T && T = T
  T && F = F
  T || F = T
  F && F = F
  F || F = F
*/

let a = 5; 
let b = 3; 
let total = a + b; // Addition
let isAGreaterThanB = a > b; // Comparison 
let isItValid = true && false; // Logical 

// Data types 
// let personName = "John"; // String 
// let numCats = 30; // Number
// let isHappy = true; // Boolean
// let likedFruits = ["apple", "banana", "orange"] // Array
// let personComplete = { name:"Alice", age:25 } // Object 

console.log("Name:", personName);
console.log("Number of Cats:", numCats); 
console.log("Is happy:", isHappy);
console.log("Fruits:", likedFruits);
console.log("Person:", personComplete); 

// Arithmetic operations
let x = 5; 
let y = 3; 
let sum = x + y;

console.log("Sum", sum); 

// Comparison example 
let isGreaterThan = x > y; 
console.log("Is x greater than y?", isGreaterThan);

// Perform logical operations 
let isValid = true && false;
console.log("Is valid?", isValid);