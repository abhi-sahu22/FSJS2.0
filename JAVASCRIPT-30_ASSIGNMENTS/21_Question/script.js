// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// ==========SOLUTION==========

let someCountries = [
  "India",
  "England",
  "Pakistan",
  "Srilanka",
  "USA",
  "Spain",
  "Russia",
  "Japan",
  "China",
  "Ethiopia"
];

if (someCountries.includes("Ethiopia")) {
    console.log("Ethiopia".toUpperCase());
}
else {
    someCountries.push("Ethiopia")
}

