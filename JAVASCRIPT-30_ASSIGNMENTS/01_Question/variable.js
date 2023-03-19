// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

//================SOLUTION================

// ----------Primitive----------
// String variable
let country = "India";
console.log(typeof(country)); //Ans - string

// Boolean
const num1 = 2;
const num2 = "2";
const num3 = 6;

const booleanFalse = num1 === num2;
console.log(booleanFalse); //Ans - false
console.log(typeof(booleanFalse)); //Ans - boolean

const booleanTrue = num1 == num2;
console.log(booleanTrue); //Ans - true
console.log(typeof (booleanFalse)); //Ans - boolean

const booleanValue = num1 !== num3;
console.log(booleanValue); //Ans - true
console.log(typeof (booleanValue)); //Ans - boolean

let empty = Boolean("");
console.log(empty); //Ans - false
console.log(typeof(empty)); //Ans - boolean

let zero = Boolean(0);
console.log(zero); //Ans - false
console.log(typeof(zero)); //Ans - boolean

let twenty = Boolean(20);
console.log(twenty); //Ans - true
console.log(typeof twenty); //Ans - boolean

// Undefined
let seaShore;
console.log(typeof(seaShore)); //Ans - undefined

// Null
let zoo = null;
console.log(zoo);  //Ans - null
console.log(typeof(zoo)); //Ans - object













