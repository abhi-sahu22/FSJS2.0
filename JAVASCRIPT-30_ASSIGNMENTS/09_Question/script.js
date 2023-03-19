/* 09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value. */

//==========SOLUTION==========

// -----Truthy value-----

let one = 1 == "1";
let truth = Boolean(true);
let compare = 30 !== "30";

console.log(one);
console.log(truth);
console.log(compare);

// -----Falsy value-----

let falsy = Boolean(false);
let greater = 50 < "50";
let compareNew = 30 >= 40;
console.log(falsy);
console.log(greater);
console.log(compareNew);

