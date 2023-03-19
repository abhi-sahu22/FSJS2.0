/*
28. Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

// ==========SOLUTION========== (PLEASE USE TERMINAL FOR console.log)

// -----a-----

let n = 3;
let aString = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    aString += "*";
  }
  aString += "\n";
}

console.log(aString);

// -----b-----

let m = 3;
let bString = "";

for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
        bString += "*";
    }
    bString += "\n"
}

console.log(bString);

// -----c-----

let r = 3;
let cString = "";

for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= r - i; j++) {
        cString += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        cString += "*";
    }
    cString += "\n";
}

console.log(cString);


// Please use the terminal for the result