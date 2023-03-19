// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


//==========SOLUTION==========

let arr = [
  "ineuron",
  "React",
  "pw skills",
  "NodeJS",
  "fullstack web development",
  "pw skills",
  "html",
  "css",
  "javascript",
];

let last = arr.lastIndexOf("pw skills");
console.log(last);

let first = arr.lastIndexOf("pw skills", 4);
console.log(first);

console.log(`The first occurance of the word "pw skills" is at the positon ${first}, and the last occurance is at the positon ${last} in the array.`)
