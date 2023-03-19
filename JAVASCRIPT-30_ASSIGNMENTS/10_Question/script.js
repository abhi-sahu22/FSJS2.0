/*
10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.
*/

//==========SOLUTION==========

// As 4 is greater than 3, the result is true.
console.log(4 > 3);

// 4 is not equal to but it is greater than 3. So, the value is true. 
console.log(4 >= 3);

// As 4 is not less than 3, the result is false.
console.log(4 < 3);

// As 4 is neither less than or equal to 3, the result is false.
console.log(4 <= 3);

// As 4 is equal to 4, the result is true.
console.log(4 == 4);

// As 4 is strictly equal to 4, the result is true. (STRICT EQUALITY)
console.log(4 === 4);

// As 4 is equal to 4 and the statement says 4 is not equal to 4, the result is false.
console.log(4 != 4);

// As 4 is equal to 4 and the statement says 4 is strictly not equal to 4, the result is false. (STRICT NON-EQUALITY)
console.log(4 !== 4);

// 4 number is compared to string "4". It converts string to number (toNumber("4")). And number 4 is equal to number 4. But here the statement says they are not equal. Hence, it is false.
console.log(4 != "4");

// 4 number is compared to string "4". It converts string to number (toNumber("4")). And number 4 is equal to number 4. Hence, it is true.
console.log(4 == "4");

// Here 4 is not strictly equal to "4". Hence, the value is false.
console.log(4 === "4");

//----- Length of "python" and "jargon" -----

let stringOne = "python";
let stringTwo = "jargon";

console.log(stringOne.length); 
console.log(stringTwo.length); 


// The length of both the strings is equal. The length is 6.
// The falsy statement:

let compare = stringOne.length !== stringTwo.length;
console.log(compare);


