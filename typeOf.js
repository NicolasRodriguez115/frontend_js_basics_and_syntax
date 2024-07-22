// TYPEOF CONVERSION: Used to determine the data type of a variable or value 
// The typeof operator returns a string indicating the type of the operand 

// String 
let name1 = "John";
console.log(typeof name1); 

// NOTE: we need to be mindful of loose equality (==) versus strict equality (===) when comparing data types.
// Loose equality (==) performs type coercion, while strict equality (===) does not 
// Type coercion is the process of converting value from one data type to another 

console.log(typeof 42); // Number
console.log(typeof "Hello, world!"); // String 
console.log(typeof true); // Boolean

// Object example 
person1 = {
  name: "John",
  age: 30
}; 

// NOTE: the typeof operator returns "object" for objects, arrays, and null. Undefined is still undefined. 

console.log(typeof {name: "John", age:30} ); // Object 
console.log(typeof [1, 2, 3]); // object
console.log(typeof undefined); // undefined 
console.log(typeof null); // object 

// TYPE COERCION
console.log(5 + "5"); // 55 - number to string conversion 
result = 5 + "5";
console.log(typeof result)

console.log("10" - 5); // 5 - string to number conversion 

console.log("true" == true); // false - string to boolean conversion

console.log(+ "100") // string to number conversion

// loose versus strict equality
console.log(0 == false); // true - 0 is the boolean indicator of false 
console.log("" == false); // true - blank = nothing 
console.log(0 === false); // false - literally not false 
console.log("" === false); // false - literally not false 